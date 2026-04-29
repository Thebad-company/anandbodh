"use client";

import { useEffect, useState } from "react";
import { 
    getForumPosts, 
    getForumCategories, 
    getCommunityGroups,
    getCommunityStats,
    deleteForumPost,
    updateForumPost
} from "@/lib/communityApi";

export default function CommunityManagement() {
    const [activeTab, setActiveTab] = useState('overview');
    const [stats, setStats] = useState(null);
    const [posts, setPosts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        try {
            setLoading(true);
            
            // Load stats
            const { data: statsData } = await getCommunityStats();
            if (statsData) setStats(statsData);

            // Load posts
            const { data: postsData } = await getForumPosts(50);
            if (postsData) setPosts(postsData);

            // Load categories
            const { data: categoriesData } = await getForumCategories();
            if (categoriesData) setCategories(categoriesData);

            // Load groups
            const { data: groupsData } = await getCommunityGroups();
            if (groupsData) setGroups(groupsData);

        } catch (error) {
            console.error('Error loading community data:', error);
        } finally {
            setLoading(false);
        }
    }

    async function handleDeletePost(postId) {
        if (!confirm('Are you sure you want to delete this post?')) return;
        
        try {
            await deleteForumPost(postId);
            setPosts(posts.filter(post => post.id !== postId));
        } catch (error) {
            console.error('Error deleting post:', error);
            alert('Error deleting post');
        }
    }

    async function handleTogglePostStatus(postId, currentStatus) {
        const newStatus = currentStatus === 'published' ? 'archived' : 'published';
        
        try {
            await updateForumPost(postId, { status: newStatus });
            setPosts(posts.map(post => 
                post.id === postId ? { ...post, status: newStatus } : post
            ));
        } catch (error) {
            console.error('Error updating post status:', error);
            alert('Error updating post status');
        }
    }

    function formatDate(dateString) {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    if (loading) {
        return (
            <div className="admin-loading">
                <p>Loading community data...</p>
            </div>
        );
    }

    return (
        <div className="admin-community">
            <div className="admin-header">
                <h1>Community Management</h1>
                <p>Manage forums, groups, and community interactions</p>
            </div>

            {/* Tab Navigation */}
            <div className="admin-tabs">
                <button 
                    className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                    onClick={() => setActiveTab('overview')}
                >
                    Overview
                </button>
                <button 
                    className={`tab-btn ${activeTab === 'posts' ? 'active' : ''}`}
                    onClick={() => setActiveTab('posts')}
                >
                    Forum Posts
                </button>
                <button 
                    className={`tab-btn ${activeTab === 'groups' ? 'active' : ''}`}
                    onClick={() => setActiveTab('groups')}
                >
                    Groups
                </button>
                <button 
                    className={`tab-btn ${activeTab === 'categories' ? 'active' : ''}`}
                    onClick={() => setActiveTab('categories')}
                >
                    Categories
                </button>
            </div>

            {/* Overview Tab */}
            {activeTab === 'overview' && (
                <div className="tab-content">
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-icon">👥</div>
                            <div className="stat-info">
                                <div className="stat-number">{stats?.totalMembers || 0}</div>
                                <div className="stat-label">Total Members</div>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">💬</div>
                            <div className="stat-info">
                                <div className="stat-number">{stats?.totalPosts || 0}</div>
                                <div className="stat-label">Forum Posts</div>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">🏘️</div>
                            <div className="stat-info">
                                <div className="stat-number">{stats?.totalGroups || 0}</div>
                                <div className="stat-label">Active Groups</div>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">🔥</div>
                            <div className="stat-info">
                                <div className="stat-number">{stats?.activeDiscussions || 0}</div>
                                <div className="stat-label">Active Discussions</div>
                            </div>
                        </div>
                    </div>

                    <div className="recent-activity">
                        <h3>Recent Forum Posts</h3>
                        <div className="activity-list">
                            {posts.slice(0, 5).map(post => (
                                <div key={post.id} className="activity-item">
                                    <div className="activity-content">
                                        <div className="activity-title">{post.title}</div>
                                        <div className="activity-meta">
                                            By {post.author_name} • {formatDate(post.created_at)}
                                        </div>
                                    </div>
                                    <div className="activity-stats">
                                        <span>💬 {post.reply_count}</span>
                                        <span>❤️ {post.like_count}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Posts Tab */}
            {activeTab === 'posts' && (
                <div className="tab-content">
                    <div className="content-header">
                        <h3>Forum Posts ({posts.length})</h3>
                        <button 
                            className="btn btn-primary"
                            onClick={loadData}
                        >
                            Refresh
                        </button>
                    </div>

                    <div className="posts-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Author</th>
                                    <th>Category</th>
                                    <th>Replies</th>
                                    <th>Likes</th>
                                    <th>Status</th>
                                    <th>Created</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map(post => (
                                    <tr key={post.id}>
                                        <td>
                                            <div className="post-title-cell">
                                                {post.title}
                                            </div>
                                        </td>
                                        <td>{post.author_name || 'Anonymous'}</td>
                                        <td>
                                            {post.category_name && (
                                                <span className="category-badge">
                                                    {post.category_icon} {post.category_name}
                                                </span>
                                            )}
                                        </td>
                                        <td>{post.reply_count}</td>
                                        <td>{post.like_count}</td>
                                        <td>
                                            <span className={`status-badge ${post.status}`}>
                                                {post.status}
                                            </span>
                                        </td>
                                        <td>{formatDate(post.created_at)}</td>
                                        <td>
                                            <div className="action-buttons">
                                                <button
                                                    className="btn-small btn-outline"
                                                    onClick={() => handleTogglePostStatus(post.id, post.status)}
                                                >
                                                    {post.status === 'published' ? 'Archive' : 'Publish'}
                                                </button>
                                                <button
                                                    className="btn-small btn-danger"
                                                    onClick={() => handleDeletePost(post.id)}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Groups Tab */}
            {activeTab === 'groups' && (
                <div className="tab-content">
                    <div className="content-header">
                        <h3>Community Groups ({groups.length})</h3>
                        <button 
                            className="btn btn-primary"
                            onClick={() => alert('Create New Group functionality - Connect to database to enable')}
                        >
                            + Create New Group
                        </button>
                    </div>

                    <div className="groups-grid">
                        {groups.map(group => (
                            <div key={group.id} className="group-card">
                                <div className="group-header">
                                    <div 
                                        className="group-icon"
                                        style={{ background: group.background_color }}
                                    >
                                        {group.icon}
                                    </div>
                                    <div className="group-info">
                                        <div className="group-name">{group.name}</div>
                                        <div className="group-members">
                                            {group.current_member_count || 0} members
                                        </div>
                                    </div>
                                </div>
                                <div className="group-description">
                                    {group.description}
                                </div>
                                <div className="group-meta">
                                    <span>Category: {group.category}</span>
                                    <span>Created: {formatDate(group.created_at)}</span>
                                </div>
                                <div className="group-actions" style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                                    <button className="btn-small btn-outline">Edit</button>
                                    <button className="btn-small btn-danger">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Categories Tab */}
            {activeTab === 'categories' && (
                <div className="tab-content">
                    <div className="content-header">
                        <h3>Forum Categories ({categories.length})</h3>
                        <button 
                            className="btn btn-primary"
                            onClick={() => alert('Create New Category functionality - Connect to database to enable')}
                        >
                            + Create New Category
                        </button>
                    </div>

                    <div className="categories-list">
                        {categories.map(category => (
                            <div key={category.id} className="category-item">
                                <div 
                                    className="category-icon"
                                    style={{ background: category.color }}
                                >
                                    {category.icon}
                                </div>
                                <div className="category-info">
                                    <div className="category-name">{category.name}</div>
                                    <div className="category-description">
                                        {category.description}
                                    </div>
                                </div>
                                <div className="category-meta">
                                    <span>Order: {category.sort_order}</span>
                                    <span>Status: {category.is_active ? 'Active' : 'Inactive'}</span>
                                </div>
                                <div className="category-actions" style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                                    <button className="btn-small btn-outline">Edit</button>
                                    <button className="btn-small btn-danger">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}