"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function ForumPost({ postId }) {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        loadSamplePost();
    }, [postId]);

    function loadSamplePost() {
        setLoading(true);
        
        // Sample posts data
        const samplePosts = {
            '365570ea-bb33-493a-9bef-91d3c63a4c81': {
                id: postId,
                title: 'How to start Soleus Activation as a beginner?',
                content: 'I\'m new to Soleus Activation and looking for beginner-friendly tips. Any advice?\n\nI\'ve heard about the benefits but don\'t know where to start. Specifically:\n\n• What are the basic exercises?\n• How long should I practice daily?\n• Any precautions for beginners?\n• Expected timeline for results?\n\nWould love to hear from experienced practitioners!',
                author_name: 'Priya S.',
                author_first_name: 'P',
                category_name: 'Wellness',
                category_icon: '💪',
                category_color: '#EBF2E3',
                reply_count: 24,
                like_count: 18,
                view_count: 156,
                created_at: '2024-04-27T10:00:00Z',
                is_sample: true
            },
            '365570ea-bb33-493a-9bef-91d3c63a4c82': {
                id: postId,
                title: 'Ayurvedic diet tips for Pitta dosha?',
                content: 'I recently discovered I have a Pitta constitution and would love some dietary guidance.\n\nI\'ve been experiencing:\n• Excessive heat in the body\n• Irritability and anger\n• Digestive issues\n• Skin problems\n\nWhat foods should I include and avoid? Any specific meal timing recommendations?',
                author_name: 'Rajesh K.',
                author_first_name: 'R',
                category_name: 'Ayurveda',
                category_icon: '🌿',
                category_color: '#FDF0EB',
                reply_count: 15,
                like_count: 12,
                view_count: 89,
                created_at: '2024-04-27T05:00:00Z',
                is_sample: true
            },
            '365570ea-bb33-493a-9bef-91d3c63a4c83': {
                id: postId,
                title: 'Meditation techniques for anxiety relief',
                content: 'Sharing some meditation techniques that have helped me with anxiety. What works for you?\n\nTechniques I\'ve found helpful:\n• Box breathing (4-4-4-4 pattern)\n• Body scan meditation\n• Loving-kindness meditation\n• Walking meditation\n\nI practice 10-15 minutes daily and have noticed significant improvement in my anxiety levels. Would love to hear what techniques work for others!',
                author_name: 'Ananya M.',
                author_first_name: 'A',
                category_name: 'Mental Health',
                category_icon: '🧠',
                category_color: '#F0EEF9',
                reply_count: 32,
                like_count: 28,
                view_count: 234,
                created_at: '2024-04-26T10:00:00Z',
                is_sample: true
            },
            '365570ea-bb33-493a-9bef-91d3c63a4c84': {
                id: postId,
                title: 'Success story: Reversed my pre-diabetes!',
                content: 'After 6 months of following the program, my HbA1c went from 6.2 to 5.4! Here\'s what I did...\n\n**My Journey:**\n• Started with the Wake Up Life program\n• Followed Ayurvedic dietary guidelines\n• Incorporated daily Soleus Activation\n• Practiced meditation for stress management\n• Regular sleep schedule (10 PM - 6 AM)\n\n**Results after 6 months:**\n• HbA1c: 6.2 → 5.4\n• Weight: Lost 15 kg\n• Energy levels: Significantly improved\n• Sleep quality: Much better\n\nThe key was consistency and following the holistic approach. Happy to answer any questions!',
                author_name: 'Vikram T.',
                author_first_name: 'V',
                category_name: 'Success Stories',
                category_icon: '🎉',
                category_color: '#D5F5E3',
                reply_count: 45,
                like_count: 67,
                view_count: 412,
                created_at: '2024-04-25T10:00:00Z',
                is_sample: true
            }
        };

        // Check if we have a sample post for this ID
        if (samplePosts[postId]) {
            setPost(samplePosts[postId]);
        } else if (postId && postId.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)) {
            // Default sample for any UUID
            setPost({
                id: postId,
                title: 'Sample Community Discussion',
                content: 'This is a sample discussion to demonstrate how the community forum works.\n\nOnce you set up the community database, this will be replaced with real discussions where users can:\n\n• Ask questions about wellness and health\n• Share their experiences and success stories\n• Get advice from experts and community members\n• Connect with like-minded individuals\n\nTo set up real discussions, please follow the Community Setup Guide.',
                author_name: 'Community Admin',
                author_first_name: 'C',
                category_name: 'General',
                category_icon: '💬',
                category_color: '#EBF2E3',
                reply_count: 0,
                like_count: 0,
                view_count: 1,
                created_at: '2024-04-27T12:00:00Z',
                is_sample: true
            });
        } else {
            setPost(null);
        }
        
        setLoading(false);
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

    if (loading) {
        return (
            <section className="section">
                <div className="container">
                    <div className="loading-state">
                        <p>Loading discussion...</p>
                    </div>
                </div>
            </section>
        );
    }

    if (!post) {
        return (
            <section className="section">
                <div className="container">
                    <div className="error-state">
                        <h2>Discussion not found</h2>
                        <p>The discussion you're looking for doesn't exist or has been removed.</p>
                        <p>This might be because the community database hasn't been set up yet.</p>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                            <Link href="/forums" className="btn btn-primary">
                                Back to Forums
                            </Link>
                            <button 
                                onClick={() => alert('To set up real discussions, please follow the instructions in COMMUNITY_SETUP_GUIDE.md')}
                                className="btn btn-outline"
                            >
                                Setup Guide
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="section">
            <div className="container">
                {/* Breadcrumb */}
                <nav className="breadcrumb">
                    <Link href="/forums">Forums</Link>
                    <span>/</span>
                    {post.category_name && (
                        <>
                            <span>{post.category_name}</span>
                            <span>/</span>
                        </>
                    )}
                    <span>{post.title}</span>
                </nav>

                {/* Post Content */}
                <article className="forum-post-detail">
                    {post.is_sample && (
                        <div className="sample-post-notice">
                            <div className="notice-content">
                                <span className="notice-icon">⚠️</span>
                                <div>
                                    <strong>Sample Discussion</strong>
                                    <p>This is a demo discussion. To create real discussions, set up the community database.</p>
                                </div>
                                <button 
                                    onClick={() => alert('Follow the instructions in COMMUNITY_SETUP_GUIDE.md to set up the full community system with real discussions, replies, and user interactions.')}
                                    className="btn btn-sm btn-outline"
                                >
                                    Setup Guide
                                </button>
                            </div>
                        </div>
                    )}
                    
                    <header className="post-header">
                        {post.category_name && (
                            <div 
                                className="post-category"
                                style={{ background: post.category_color }}
                            >
                                <span>{post.category_icon}</span>
                                <span>{post.category_name}</span>
                            </div>
                        )}
                        
                        <h1>{post.title}</h1>
                        
                        <div className="post-meta">
                            <div className="author-info">
                                <div className="author-avatar">
                                    {(post.author_first_name || 'A')[0].toUpperCase()}
                                </div>
                                <div>
                                    <div className="author-name">
                                        {post.author_name || 'Anonymous'}
                                    </div>
                                    <div className="post-time">
                                        {formatTimeAgo(post.created_at)}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="post-stats">
                                <span>👁️ {post.view_count} views</span>
                                <span>💬 {post.reply_count} replies</span>
                            </div>
                        </div>
                    </header>

                    <div className="post-content">
                        <p style={{ whiteSpace: 'pre-line' }}>{post.content}</p>
                    </div>

                    <div className="post-actions">
                        <button className="like-btn">
                            ❤️ {post.like_count} Like
                        </button>
                        <button className="reply-btn">
                            💬 Reply
                        </button>
                    </div>
                </article>

                {/* Replies Section */}
                <section className="replies-section">
                    <h3>Replies (0)</h3>
                    
                    {/* Reply Form */}
                    {user ? (
                        <div className="reply-form">
                            <div className="form-group">
                                <textarea
                                    placeholder="Share your thoughts..."
                                    rows="4"
                                    disabled
                                />
                            </div>
                            <button className="btn btn-primary" disabled>
                                Post Reply (Demo)
                            </button>
                        </div>
                    ) : (
                        <div className="login-prompt">
                            <p>
                                <Link href="/login">Sign in</Link> to join the discussion
                            </p>
                        </div>
                    )}

                    <div className="empty-state">
                        <p>No replies yet. Be the first to share your thoughts!</p>
                    </div>
                </section>
            </div>
        </section>
    );
}