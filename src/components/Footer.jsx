import React from 'react';

const Footer = () => {
    return (
        <>
            {/* Features Banner */}
            <section className="features-banner">
                <div className="container">
                    <div className="features-grid">
                        <div className="feature-item">
                            <i className="fas fa-shipping-fast"></i>
                            <h4>Free Shipping</h4>
                            <p>On orders above ₹999</p>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-undo"></i>
                            <h4>Easy Returns</h4>
                            <p>7-day return policy</p>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-shield-alt"></i>
                            <h4>Secure Payment</h4>
                            <p>100% secure checkout</p>
                        </div>
                        <div className="feature-item">
                            <i className="fas fa-headset"></i>
                            <h4>24/7 Support</h4>
                            <p>Dedicated assistance</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Floating Actions */}
            <div className="floating-actions">
                <a href="#" className="float-btn whatsapp-btn" aria-label="WhatsApp Support">
                    <i className="fab fa-whatsapp"></i>
                </a>
                <a href="#" className="float-btn call-btn" aria-label="Call Support">
                    <i className="fas fa-phone-alt"></i>
                </a>
            </div>

            {/* Main Footer */}
            <footer className="main-footer">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-col brand-col">
                            <h3>Radhe <span>Clothing</span></h3>
                            <p>Elevating traditional elegance with modern sophistication. Quality, heritage, and style in every thread.</p>
                            <div className="social-links">
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                <a href="#"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                        <div className="footer-col">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Shop Collection</a></li>
                                <li><a href="#">New Arrivals</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Customer Care</h4>
                            <ul>
                                <li><a href="#">Track Order</a></li>
                                <li><a href="#">Shipping Policy</a></li>
                                <li><a href="#">Returns & Exchanges</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                        <div className="footer-col newsletter-col">
                            <h4>Newsletter</h4>
                            <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
                            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                                <input type="email" placeholder="Enter your email address" required />
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2026 Radhe Clothing. All rights reserved.</p>
                        <div className="payment-methods">
                            <i className="fab fa-cc-visa"></i>
                            <i className="fab fa-cc-mastercard"></i>
                            <i className="fab fa-cc-paypal"></i>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
