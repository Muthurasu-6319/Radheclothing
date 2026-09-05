import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-split">
                <div className="hero-content">
                    <span className="hero-subtitle">NEW ARRIVALS 2026</span>
                    <h2 className="hero-title">Discover the Art of <br />Traditional Elegance</h2>
                    <p className="hero-description">
                        Experience our latest collection blending modern comfort with ethnic heritage. Designed for the contemporary spirit.
                    </p>
                    <div className="hero-actions">
                        <a href="#shop" className="btn btn-primary">Shop Collection</a>
                        <a href="#lookbook" className="btn btn-secondary">View Lookbook</a>
                    </div>
                </div>
                <div className="hero-image-container">
                    <div className="hero-image-wrapper">
                        <img 
                            src="https://images.unsplash.com/photo-1583391733958-650fac5eb369?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                            alt="Elegant ethnic wear model" 
                            className="hero-img" 
                        />
                        <div className="image-accent"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
