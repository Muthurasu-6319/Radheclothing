import React from 'react';

const InstagramFeed = () => {
    const images = [
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1583391733958-650fac5eb369?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1610189013233-6bc312566db9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1584852932337-33d98eb82ce0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1610030469983-98e550d615ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    ];

    return (
        <section className="instagram-section">
            <div className="container" style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Follow @radheclothing</h3>
            </div>
            <div className="insta-feed">
                {images.map((img, index) => (
                    <a key={index} href="#" className="insta-item">
                        <img src={img} alt={`Instagram ${index + 1}`} />
                        <div className="insta-overlay">
                            <i className="fab fa-instagram"></i>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default InstagramFeed;
