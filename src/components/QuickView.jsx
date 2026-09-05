import React, { useState } from 'react';
import { formatPrice } from '../data/products';

const QuickView = ({ product, isOpen, onClose, onAddToCart }) => {
    const [selectedSize, setSelectedSize] = useState('M');

    if (!isOpen || !product) return null;

    const handleAddToCart = () => {
        onAddToCart(product);
        onClose();
    };

    return (
        <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
            <div className="quick-view-modal" onClick={e => e.stopPropagation()}>
                <button className="close-modal-btn" onClick={onClose}>
                    <i className="fas fa-times"></i>
                </button>
                <div className="qv-image">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="qv-details">
                    <h2 className="qv-title">{product.title}</h2>
                    <div className="qv-price">
                        <span className="price-current" style={{ fontWeight: 500 }}>{formatPrice(product.price)}</span>
                    </div>
                    <p className="qv-desc">
                        A premium piece from our latest collection. Tailored to perfection using the finest fabrics to ensure comfort without compromising on style. Perfect for your upcoming special occasions.
                    </p>
                    
                    <div className="qv-options">
                        <h4>Select Size</h4>
                        <div className="size-selector">
                            {['S', 'M', 'L', 'XL'].map(size => (
                                <button 
                                    key={size}
                                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button className="btn btn-primary btn-block" onClick={handleAddToCart} style={{ marginTop: 'auto' }}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuickView;
