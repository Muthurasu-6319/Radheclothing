import React, { createContext, useState, useEffect } from 'react';
import { products as initialProducts } from '../data/products';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Load from local storage, or fallback to default data
        const savedProducts = localStorage.getItem('radheProducts');
        if (savedProducts) {
            setProducts(JSON.parse(savedProducts));
        } else {
            setProducts(initialProducts);
            localStorage.setItem('radheProducts', JSON.stringify(initialProducts));
        }
    }, []);

    // Save to local storage whenever products change
    useEffect(() => {
        if (products.length > 0) {
            localStorage.setItem('radheProducts', JSON.stringify(products));
        }
    }, [products]);

    const addProduct = (product) => {
        const newProduct = {
            ...product,
            id: Date.now(), // Generate a unique ID
        };
        setProducts(prev => [newProduct, ...prev]);
    };

    const updateProduct = (id, updatedProduct) => {
        setProducts(prev => prev.map(p => (p.id === id ? { ...p, ...updatedProduct } : p)));
    };

    const deleteProduct = (id) => {
        setProducts(prev => prev.filter(p => p.id !== id));
    };

    return (
        <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
            {children}
        </ProductContext.Provider>
    );
};
