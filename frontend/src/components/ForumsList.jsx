"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getForumPosts, getForumCategories, createForumPost } from "@/lib/communityApi";
import { useAuth } from "@/context/AuthContext";

export default function ForumsList() {
    const [posts, setPosts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [newPost, setNewPost] = useState({ title: "", content: "", category_id: "" });
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        loadData();
    }, [selectedCategory]);

    async function loadData() {
        try {
            setLoading(true);
            
            // Load categories
            const { data: categoriesData } = await getForumCategories();
            if (categoriesData) {
                setCategories(categoriesData);
            }

            // Load posts
            const { data: postsData } = await getForumPosts(20, 0, selectedCategory);
            if (postsData && postsData.length > 0) {
                setPosts(postsData);
            } else {
                // Show sample posts when no real data exists
                setPosts([
                    {
                        id: '365570ea-bb33-493a-9bef-91d3c63a4c81', // Wellness
                        title: 'How to start Soleus Activation as a beginner?',
                        content: 'I\'m new to Soleus Activation and looking for beginner-friendly tips.',
                        author_name: 'Priya S.',
                        category_name: 'Wellness',
                        category_icon: '💪',
                        category_color: '#EBF2E3',
                        reply_count: 24,
                        like_count: 18,
                        view_count: 156,
                        created_at: '2024-04-27T10:00:00Z',
                        is_sample: true
                    },
                    {
                        id: '365570ea-bb33-493a-9bef-91d3c63a4c82', // Ayurveda
                        title: 'Ayurvedic diet tips for Pitta dosha?',
                        content: 'I recently discovered I have a Pitta constitution and would love some dietary guidance.',
                        author_name: 'Rajesh K.',
                        category_name: 'Ayurveda',
                        category_icon: '🌿',
                        category_color: '#FDF0EB',
                        reply_count: 15,
                        like_count: 12,
                        view_count: 89,
                        created_at: '2024-04-27T05:00:00Z',
                        is_sample: true
                    },
                    {
                        id: '365570ea-bb33-493a-9bef-91d3c63a4c83', // Mental Health
                        title: 'Meditation techniques for anxiety relief',
                        content: 'Sharing some meditation techniques that have helped me with anxiety.',
                        author_name: 'Ananya M.',
                        category_name: 'Mental Health',
                        category_icon: '🧠',
                        category_color: '#F0EEF9',
                        reply_count: 32,
                        like_count: 28,
                        view_count: 234,
                        created_at: '2024-04-26T10:00:00Z',
                        is_sample: true
                    },
                    {
                        id: '365570ea-bb33-493a-9bef-91d3c63a4c84', // Success Stories
                        title: 'Success story: Reversed my pre-diabetes!',
                        content: 'After 6 months of following the program, my HbA1c went from 6.2 to 5.4!',
                        author_name: 'Vikram T.',
                        category_name: 'Success Stories',
                        category_icon: '🎉',
                        category_color: '#D5F5E3',
                        reply_count: 45,
                        like_count: 67,
                        view_count: 412,
                        created_at: '2024-04-25T10:00:00Z',
                        is_sample: true
                    }
                ]);
            }
        } catch (error) {
            console.error('Error loading forum data:', error);
        } finally {
            setLoading(false);
        }
    }

    async function handleCreatePost(e) {
        e.preventDefault();
        if (!user) {
            router.push('/login');
            return;
        }

        try {
            const postData = {
                title: newPost.title,
                content: newPost.content,
                author_id: user.id,
                category_id: newPost.category_id || null,
                status: 'published'
            };

            const { data, error } = await createForumPost(postData);
            if (error) throw new Error(error);

            // Reset form and reload posts
            setNewPost({ title: "", content: "", category_id: "" });
            setShowCreateForm(false);
            loadData();
        } catch (error) {
            console.error('Error creating post:', error);
            alert('Error creating post. Please try again.');
        }
    }

    function formatTimeAgo(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
        
        if (diffInHours < 1) return "Just now";
        if (diffInHours < 24) return `${diffInHours} hours ago`;
        
        const diffInDays = Math.floor(diffInHours / 24);
        if (diffInDays === 1) return "1 day ago";
        if (diffInDays < 7) return `${diffInDays} days ago`;
        
        return date.toLocaleDateString();
    }

    return (
        <section className="section">
            <div className="container">
                {/* Header with Create Button */}
                <div className="forums-header">
                    <div>
                        <h2>Community Discussions</h2>
                        <p>Share knowledge, ask questions, and connect with fellow wellness enthusiasts</p>
                    </div>
                    <button 
                        className="btn btn-primary"
                        onClick={() => setShowCreateForm(!showCreateForm)}
                    >
                        {showCreateForm ? 'Cancel' : '+ New Discussion'}
                    </button>
                </div>

                {/* Create Post Form */}
                {showCreateForm && (
                    <div className="create-post-form">
                        <h3>Start a New Discussion</h3>
                        <form onSubmit={handleCreatePost}>
                            <div className="form-group">
                                <label htmlFor="category">Category</label>
                                <select
                                    id="category"
                                    value={newPost.category_id}
                                    onChange={(e) => setNewPost({...newPost, category_id: e.target.value})}
                                >
                                    <option value="">Select a category</option>
                                    {categories.map(category => (
                                        <option key={category.id} value={category.id}>
                                            {category.icon} {category.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    value={newPost.title}
                                    onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                                    placeholder="What would you like to discuss?"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="content">Content</label>
                                <textarea
                                    id="content"
                                    value={newPost.content}
                                    onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                                    placeholder="Share your thoughts, questions, or experiences..."
                                    rows="6"
                                    required
                                />
                            </div>
                            <div className="form-actions">
                                <button type="submit" className="btn btn-primary">
                                    Create Discussion
                                </button>
                                <button 
                                    type="button" 
                                    className="btn btn-outline"
                                    onClick={() => setShowCreateForm(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Category Filter */}
                <div className="category-filter">
                    <button 
                        className={`category-btn ${!selectedCategory ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(null)}
                    >
                        All Categories
                    </button>
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category.id)}
                        >
                            {category.icon} {category.name}
                        </button>
                    ))}
                </div>

                {/* Posts List */}
                {loading ? (
                    <div className="loading-state">
                        <p>Loading discussions...</p>
                    </div>
                ) : posts.length === 0 ? (
                    <div className="empty-state">
                        <h3>No discussions yet</h3>
                        <p>Be the first to start a conversation in this category!</p>
                    </div>
                ) : (
                    <div className="forums-list">
                        {posts.map((post) => (
                            post.is_sample ? (
                                <div 
                                    key={post.id}
                                    className="forum-post-card sample-post"
                                    onClick={() => {
                                        alert('This is a sample discussion. To create real discussions, please set up the community database. See COMMUNITY_SETUP_GUIDE.md for instructions.');
                                    }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="post-header">
                                        {post.category_name && (
                                            <div 
                                                className="post-category"
                                                style={{ background: post.category_color }}
                                            >
                                                <span>{post.category_icon}</span>
                                                <span>{post.category_name}</span>
                                            </div>
                                        )}
                                        <div className="post-meta">
                                            <span className="post-author">
                                                {post.author_name || 'Anonymous'}
                                            </span>
                                            <span className="post-time">
                                                {formatTimeAgo(post.created_at)}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <h3 className="post-title">{post.title}</h3>
                                    
                                    <div className="post-stats">
                                        <span className="stat">
                                            💬 {post.reply_count} replies
                                        </span>
                                        <span className="stat">
                                            ❤️ {post.like_count} likes
                                        </span>
                                        <span className="stat">
                                            👁️ {post.view_count} views
                                        </span>
                                    </div>
                                    
                                    <div className="sample-badge">
                                        Sample Discussion
                                    </div>
                                </div>
                            ) : (
                                <Link 
                                    key={post.id} 
                                    href={`/forums/${post.id}`}
                                    className="forum-post-card"
                                >
                                    <div className="post-header">
                                        {post.category_name && (
                                            <div 
                                                className="post-category"
                                                style={{ background: post.category_color }}
                                            >
                                                <span>{post.category_icon}</span>
                                                <span>{post.category_name}</span>
                                            </div>
                                        )}
                                        <div className="post-meta">
                                            <span className="post-author">
                                                {post.author_name || 'Anonymous'}
                                            </span>
                                            <span className="post-time">
                                                {formatTimeAgo(post.created_at)}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <h3 className="post-title">{post.title}</h3>
                                    
                                    <div className="post-stats">
                                        <span className="stat">
                                            💬 {post.reply_count} replies
                                        </span>
                                        <span className="stat">
                                            ❤️ {post.like_count} likes
                                        </span>
                                        <span className="stat">
                                            👁️ {post.view_count} views
                                        </span>
                                    </div>
                                </Link>
                            )
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}