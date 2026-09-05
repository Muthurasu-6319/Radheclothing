import React, { useState, useEffect } from 'react';

const Header = ({ cartCount, toggleCart, toggleDarkMode, isDarkMode }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            {/* Top Announcement Bar */}
            <div className="top-bar">
                <p>Free shipping on all orders over ₹999 | Use code: RADHE10</p>
            </div>

            {/* Main Header */}
            <header id="main-header" className={isScrolled ? 'scrolled' : ''}>
                <div className="header-container">
                    {/* Mobile Menu Toggle */}
                    <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                        <i className="fas fa-bars"></i>
                    </button>

                    {/* Navigation Links */}
                    <nav className="main-nav">
                        <ul className="nav-links">
                            <li><a href="#" className="active">Home</a></li>
                            <li><a href="#shop">Shop</a></li>
                            <li><a href="#collections">Collections</a></li>
                            <li><a href="#about">Our Story</a></li>
                        </ul>
                    </nav>

                    {/* Brand Logo */}
                    <div className="brand-logo">
                        <a href="#">
                            <h1>Radhe <span>Clothing</span></h1>
                        </a>
                    </div>

                    {/* Action Icons */}
                    <div className="header-actions">
                        <button className="action-btn" aria-label="Toggle Dark Mode" onClick={toggleDarkMode}>
                            <i className={isDarkMode ? "fas fa-sun" : "fas fa-moon"}></i>
                        </button>
                        <button className="action-btn" aria-label="Search">
                            <i className="fas fa-search"></i>
                        </button>
                        <button className="action-btn" aria-label="Wishlist">
                            <i className="far fa-heart"></i>
                            <span className="badge">0</span>
                        </button>
                        <button className="action-btn" aria-label="Account">
                            <i className="far fa-user"></i>
                        </button>
                        <button className="action-btn" aria-label="Cart" onClick={toggleCart}>
                            <i className="fas fa-shopping-bag"></i>
                            <span className="badge">{cartCount}</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation Menu */}
            <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}></div>
            <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <div className="mobile-menu-header">
                    <h2>Radhe</h2>
                    <button className="close-menu-btn" onClick={toggleMobileMenu}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                <ul className="mobile-nav-links">
                    <li><a href="#" onClick={toggleMobileMenu}>Home</a></li>
                    <li><a href="#shop" onClick={toggleMobileMenu}>Shop Collections</a></li>
                    <li><a href="#sarees" onClick={toggleMobileMenu}>Premium Sarees</a></li>
                    <li><a href="#kurtis" onClick={toggleMobileMenu}>Designer Kurtis</a></li>
                    <li><a href="#about" onClick={toggleMobileMenu}>About Us</a></li>
                    <li><a href="#contact" onClick={toggleMobileMenu}>Contact</a></li>
                </ul>
            </div>
        </>
    );
};

export default Header;
