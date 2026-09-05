import React from 'react';
import { formatPrice } from '../data/products';

const Cart = ({ isCartOpen, toggleCart, cartItems, updateQuantity, removeFromCart }) => {
    const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <>
            <div className={`cart-sidebar-overlay ${isCartOpen ? 'active' : ''}`} onClick={toggleCart}></div>
            <div className={`cart-sidebar ${isCartOpen ? 'active' : ''}`}>
                <div className="cart-header">
                    <h3>Your Cart</h3>
                    <button className="close-cart-btn" onClick={toggleCart}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                
                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <div className="empty-cart-message">Your cart is currently empty.</div>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.title} className="cart-item-img" />
                                <div className="cart-item-info">
                                    <h4 className="cart-item-title">{item.title}</h4>
                                    <div className="cart-item-price">{formatPrice(item.price)}</div>
                                    <div className="qty-control">
                                        <button 
                                            className="qty-btn" 
                                            onClick={() => updateQuantity(item.id, -1)}
                                        >-</button>
                                        <input type="text" value={item.quantity} className="qty-input" readOnly />
                                        <button 
                                            className="qty-btn" 
                                            onClick={() => updateQuantity(item.id, 1)}
                                        >+</button>
                                    </div>
                                    <button 
                                        className="remove-item-btn" 
                                        onClick={() => removeFromCart(item.id)}
                                    >Remove</button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                
                <div className="cart-footer">
                    <div className="cart-subtotal">
                        <span>Subtotal</span>
                        <span>{formatPrice(totalAmount)}</span>
                    </div>
                    <p className="tax-note">Taxes and shipping calculated at checkout</p>
                    <button className="btn btn-primary btn-block checkout-btn">Proceed to Checkout</button>
                </div>
            </div>
        </>
    );
};

export default Cart;
