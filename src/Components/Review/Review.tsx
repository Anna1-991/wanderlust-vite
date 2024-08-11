import React, { useState, useEffect } from "react";
import { fetchReviews, ReviewProps } from "../../api/Review";
import './review.css';

export const Review: React.FC = () => {
    const [people, setPeople] = useState<ReviewProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getReviews = async () => {
            try {
                const reviews = await fetchReviews();
                setPeople(reviews);
                setLoading(false);
            } catch (err) {
                setError("Failed to load reviews");
                setLoading(false);
            }
        };

        getReviews();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <section className="section">
            <div className="title">
                <h2>
                    <span>/</span>reviews
                </h2>
            </div>
            <div className="section-center">
                {people.length > 0 ? (
                    <ul className="review-list">
                        {people.map((person) => {
                            const { id, text, user, date, url, likesCount, commentsCount } = person;
                            return (
                                <li key={id} className="review-item">
                                    <p className="text">{text}</p>
                                    <p className="author">{user.name}</p>
                                    <p className="date">{new Date(date).toLocaleDateString()}</p>
                                    <p className="likes">Likes: {likesCount}</p>
                                    <p className="comments">Comments: {commentsCount}</p>
                                    <a href={url} target="_blank">View on Facebook</a>
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <p>No reviews available.</p>
                )}
            </div>
        </section>
    );
};
