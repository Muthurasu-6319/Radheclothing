import React from 'react';

const Reviews = () => {
    const testimonials = [
        {
            id: 1,
            text: "The quality of the silk is exceptional. It drapes beautifully and I received so many compliments.",
            author: "Priya Sharma",
            stars: 5
        },
        {
            id: 2,
            text: "Fast shipping and the packaging felt so premium. Will definitely shop again for the wedding season.",
            author: "Anjali Menon",
            stars: 5
        },
        {
            id: 3,
            text: "Minimalist yet traditional. The fit was perfect out of the box. Absolutely love my new Kurti.",
            author: "Kavya Reddy",
            stars: 4
        }
    ];

    return (
        <section className="reviews-section section-padding">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Client Testimonials</h2>
                    <p>What our customers say about us</p>
                    <div className="section-divider center"></div>
                </div>
                <div className="reviews-grid">
                    {testimonials.map(review => (
                        <div key={review.id} className="review-card">
                            <div className="stars">
                                {[...Array(review.stars)].map((_, i) => (
                                    <i key={i} className="fas fa-star"></i>
                                ))}
                                {[...Array(5 - review.stars)].map((_, i) => (
                                    <i key={i} className="far fa-star"></i>
                                ))}
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <h4 className="review-author">- {review.author}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
