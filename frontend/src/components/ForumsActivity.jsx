"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getForumPosts } from "@/lib/communityApi";

export default function ForumsActivity() {
    const [forumPosts, setForumPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadForumPosts() {
            try {
                const { data } = await getForumPosts(4); // Get 4 recent posts
                if (data && data.length > 0) {
                    setForumPosts(data.map(post => ({
                        id: post.id,
                        category: post.category_name || "General",
                        categoryIcon: post.category_icon || "💬",
                        categoryColor: post.category_color || "#EBF2E3",
                        title: post.title,
                        author: post.author_name || "Anonymous",
                        authorAvatar: (post.author_first_name || "A")[0].toUpperCase(),
                        replyCount: post.reply_count || 0,
                        likeCount: post.like_count || 0,
                        timeAgo: formatTimeAgo(post.created_at),
                        isActive: isRecentActivity(post.last_activity_at),
                    })));
                } else {
                    // Always use fallback static data if no real data
                    setForumPosts([
                        {
                            id: "1",
                            category: "Wellness",
                            categoryIcon: "💪",
                            categoryColor: "#EBF2E3",
                            title: "How to start Soleus Activation as a beginner?",
                            author: "Priya S.",
                            authorAvatar: "P",
                            replyCount: 24,
                            likeCount: 18,
                            timeAgo: "2 hours ago",
                            isActive: true,
                        },
                        {
                            id: "2",
                            category: "Ayurveda",
                            categoryIcon: "🌿",
                            categoryColor: "#FDF0EB",
                            title: "Ayurvedic diet tips for Pitta dosha?",
                            author: "Rajesh K.",
                            authorAvatar: "R",
                            replyCount: 15,
                            likeCount: 12,
                            timeAgo: "5 hours ago",
                            isActive: true,
                        },
                        {
                            id: "3",
                            category: "Mental Health",
                            categoryIcon: "🧠",
                            categoryColor: "#F0EEF9",
                            title: "Meditation techniques for anxiety relief",
                            author: "Ananya M.",
                            authorAvatar: "A",
                            replyCount: 32,
                            likeCount: 28,
                            timeAgo: "1 day ago",
                            isActive: false,
                        },
                        {
                            id: "4",
                            category: "Success Stories",
                            categoryIcon: "🎉",
                            categoryColor: "#D5F5E3",
                            title: "Success story: Reversed my pre-diabetes!",
                            author: "Vikram T.",
                            authorAvatar: "V",
                            replyCount: 45,
                            likeCount: 67,
                            timeAgo: "2 days ago",
                            isActive: false,
                        },
                    ]);
                }
            } catch (error) {
                console.error('Error loading forum posts:', error);
                // Always use fallback static data on any error
                setForumPosts([
                    {
                        id: "1",
                        category: "Wellness",
                        categoryIcon: "💪",
                        categoryColor: "#EBF2E3",
                        title: "How to start Soleus Activation as a beginner?",
                        author: "Priya S.",
                        authorAvatar: "P",
                        replyCount: 24,
                        likeCount: 18,
                        timeAgo: "2 hours ago",
                        isActive: true,
                    },
                    {
                        id: "2",
                        category: "Ayurveda",
                        categoryIcon: "🌿",
                        categoryColor: "#FDF0EB",
                        title: "Ayurvedic diet tips for Pitta dosha?",
                        author: "Rajesh K.",
                        authorAvatar: "R",
                        replyCount: 15,
                        likeCount: 12,
                        timeAgo: "5 hours ago",
                        isActive: true,
                    },
                    {
                        id: "3",
                        category: "Mental Health",
                        categoryIcon: "🧠",
                        categoryColor: "#F0EEF9",
                        title: "Meditation techniques for anxiety relief",
                        author: "Ananya M.",
                        authorAvatar: "A",
                        replyCount: 32,
                        likeCount: 28,
                        timeAgo: "1 day ago",
                        isActive: false,
                    },
                    {
                        id: "4",
                        category: "Success Stories",
                        categoryIcon: "🎉",
                        categoryColor: "#D5F5E3",
                        title: "Success story: Reversed my pre-diabetes!",
                        author: "Vikram T.",
                        authorAvatar: "V",
                        replyCount: 45,
                        likeCount: 67,
                        timeAgo: "2 days ago",
                        isActive: false,
                    },
                ]);
            } finally {
                setLoading(false);
            }
        }

        loadForumPosts();
    }, []);

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

    function isRecentActivity(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diffInHours = (now - date) / (1000 * 60 * 60);
        return diffInHours < 24; // Active if activity within 24 hours
    }

    return (
        <section id="forums-activity" className="section" aria-labelledby="forums-heading">
            <div className="container">
                <div className="section-header fade-up visible">
                    <span className="section-label">Community Conversations</span>
                    <h2 id="forums-heading">Active Discussions</h2>
                    <p>
                        Join the conversation and connect with others on their wellness journey
                    </p>
                </div>

                <div className="forums-grid">
                    {forumPosts.map((post, index) => (
                        <Link
                            key={post.id}
                            href={`/forums/${post.id === "1" ? "365570ea-bb33-493a-9bef-91d3c63a4c81" : 
                                   post.id === "2" ? "365570ea-bb33-493a-9bef-91d3c63a4c82" :
                                   post.id === "3" ? "365570ea-bb33-493a-9bef-91d3c63a4c83" :
                                   post.id === "4" ? "365570ea-bb33-493a-9bef-91d3c63a4c84" : post.id}`}
                            className={`forum-card fade-up visible fade-up-delay-${Math.floor(index / 2) + 1}`}
                        >
                            <div className="forum-card-header">
                                <div
                                    className="forum-category-badge"
                                    style={{ background: post.categoryColor }}
                                >
                                    <span className="category-icon">{post.categoryIcon}</span>
                                    <span className="category-name">{post.category}</span>
                                </div>
                                {post.isActive && (
                                    <div className="forum-active-indicator">
                                        <span className="active-dot"></span>
                                        <span className="active-text">Active</span>
                                    </div>
                                )}
                            </div>

                            <h3 className="forum-card-title">{post.title}</h3>

                            <div className="forum-card-footer">
                                <div className="forum-author">
                                    <div className="author-avatar">{post.authorAvatar}</div>
                                    <span className="author-name">{post.author}</span>
                                </div>

                                <div className="forum-meta">
                                    <span className="forum-stat">
                                        <span className="stat-icon">💬</span>
                                        {post.replyCount} replies
                                    </span>
                                    <span className="forum-stat">
                                        <span className="stat-icon">❤️</span>
                                        {post.likeCount} likes
                                    </span>
                                    <span className="forum-time">{post.timeAgo}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="forums-cta">
                    <Link
                        href="/forums"
                        className="btn btn-outline"
                    >
                        View All Forums →
                    </Link>
                </div>
            </div>
        </section>
    );
}
