import React from 'react';
import { formatPrice } from '../data/products';

const ProductCard = ({ product, onAddToCart, onQuickView }) => {
    return (
        <div className="product-card">
            <div className="product-image">
                <div className="product-badges">
                    {product.badge && (
                        <span className={`badge-tag ${product.badge === 'Sale' ? 'badge-sale' : ''}`}>
                            {product.badge}
                        </span>
                    )}
                </div>
                <img src={product.image} alt={product.title} />
                <div className="product-actions">
                    <button 
                        className="p-action-btn add-to-cart" 
                        onClick={() => onAddToCart(product)}
                        aria-label="Add to cart"
                    >
                        <i className="fas fa-shopping-bag"></i>
                    </button>
                    <button 
                        className="p-action-btn" 
                        aria-label="Quick view"
                        onClick={() => onQuickView(product)}
                    >
                        <i className="far fa-eye"></i>
                    </button>
                    <button className="p-action-btn" aria-label="Add to wishlist">
                        <i className="far fa-heart"></i>
                    </button>
                </div>
            </div>
            <div className="product-info">
                <div className="product-category">{product.category}</div>
                <h3 className="product-title">{product.title}</h3>
                <div className="product-price">
                    <span className="price-current">{formatPrice(product.price)}</span>
                    {product.oldPrice && (
                        <span className="price-old">{formatPrice(product.oldPrice)}</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
