import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { fetchReviews, ReviewProps } from "../../api/Review";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./review.css";

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

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <section className="section">
            <h3>Մեր Հաճախորդները</h3>
            <div className="slider-container">
                {people.length > 0 ? (
                    <Slider {...settings}>
                        {people.map((person) => {
                            const { id, text, user, date, url, likesCount } =
                                person;
                            return (
                                <div key={id} className="review-slide">
                                    <div className="review-content">
                                        <p className="text">
                                            <span>"</span>
                                            {text}
                                            <span>"</span>
                                        </p>
                                        <p className="author">{user.name}</p>
                                        <p className="date">
                                            {new Date(
                                                date
                                            ).toLocaleDateString()}
                                        </p>
                                        <p className="likes">
                                            Likes: {likesCount}
                                        </p>
                                        <a
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View on Facebook
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                ) : (
                    <p>No reviews available.</p>
                )}
            </div>
        </section>
    );
};
