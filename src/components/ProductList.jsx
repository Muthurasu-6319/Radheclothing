import React, { useState, useContext } from 'react';
import ProductCard from './ProductCard';
import { ProductContext } from '../context/ProductContext';

const ProductList = ({ onAddToCart, onQuickView }) => {
    const { products } = useContext(ProductContext);
    const [filter, setFilter] = useState('all');

    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(p => p.category === filter);

    return (
        <section id="shop" className="featured-products section-padding bg-light">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Trending This Week</h2>
                    <p>Handpicked styles curated just for you</p>
                    <div className="section-divider center"></div>
                </div>
                
                {/* Filters */}
                <div className="product-filters">
                    <button 
                        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => setFilter('all')}
                    >All</button>
                    <button 
                        className={`filter-btn ${filter === 'saree' ? 'active' : ''}`}
                        onClick={() => setFilter('saree')}
                    >Sarees</button>
                    <button 
                        className={`filter-btn ${filter === 'kurti' ? 'active' : ''}`}
                        onClick={() => setFilter('kurti')}
                    >Kurtis</button>
                    <button 
                        className={`filter-btn ${filter === 'suit' ? 'active' : ''}`}
                        onClick={() => setFilter('suit')}
                    >Salwar Suits</button>
                </div>

                {/* Products Grid */}
                <div className="products-grid">
                    {filteredProducts.map(product => (
                        <ProductCard 
                            key={product.id} 
                            product={product} 
                            onAddToCart={onAddToCart} 
                            onQuickView={onQuickView}
                        />
                    ))}
                </div>
                
                <div className="text-center view-all-btn-wrapper">
                    <a href="#" className="btn btn-outline">View All Products</a>
                </div>
            </div>
        </section>
    );
};

export default ProductList;
