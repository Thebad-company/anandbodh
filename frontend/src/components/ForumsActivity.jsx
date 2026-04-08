import Link from "next/link";

export default function ForumsActivity() {
    const forumPosts = [
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
    ];

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
                        <div
                            key={post.id}
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
                        </div>
                    ))}
                </div>

                <div className="forums-cta">
                    <Link
                        href="/community"
                        className="btn btn-outline"
                    >
                        View All Forums →
                    </Link>
                </div>
            </div>
        </section>
    );
}
