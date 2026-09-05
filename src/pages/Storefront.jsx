import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import Footer from '../components/Footer';
import Reviews from '../components/Reviews';
import InstagramFeed from '../components/InstagramFeed';
import Toast from '../components/Toast';
import QuickView from '../components/QuickView';
import '../index.css';
import '../features.css';

const Storefront = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const [toastMessage, setToastMessage] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
    if (savedMode) {
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const newMode = !prev;
      localStorage.setItem('darkMode', newMode);
      if (newMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
      return newMode;
    });
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    
    showToast(`${product.title} added to cart`);
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  const updateQuantity = (id, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return { ...item, quantity: newQty > 0 ? newQty : 1 };
      }
      return item;
    }));
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const openQuickView = (product) => {
    setQuickViewProduct(product);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="Storefront">
      <Header 
        cartCount={cartCount} 
        toggleCart={toggleCart} 
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
      />
      
      <main>
        <Hero />
        
        <section className="categories section-padding">
            <div className="container">
                <div className="section-header">
                    <h2>Shop by Category</h2>
                    <p>Discover our meticulously crafted collections</p>
                    <div className="section-divider"></div>
                </div>
                <div className="category-grid">
                    <a href="#sarees" className="category-card">
                        <img src="https://images.unsplash.com/photo-1610189013233-6bc312566db9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Sarees" />
                        <div className="category-overlay">
                            <h3>Sarees</h3>
                            <span>Explore &rarr;</span>
                        </div>
                    </a>
                    <a href="#kurtis" className="category-card">
                        <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Kurtis" />
                        <div className="category-overlay">
                            <h3>Designer Kurtis</h3>
                            <span>Explore &rarr;</span>
                        </div>
                    </a>
                    <a href="#lehengas" className="category-card">
                        <img src="https://images.unsplash.com/photo-1584852932337-33d98eb82ce0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Lehengas" />
                        <div className="category-overlay">
                            <h3>Bridal Lehengas</h3>
                            <span>Explore &rarr;</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>

        <ProductList onAddToCart={handleAddToCart} onQuickView={openQuickView} />
        
        <Reviews />
        
        <InstagramFeed />
      </main>

      <Footer />

      <Cart 
        isCartOpen={isCartOpen} 
        toggleCart={toggleCart}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />

      <QuickView 
        product={quickViewProduct} 
        isOpen={!!quickViewProduct} 
        onClose={closeQuickView}
        onAddToCart={handleAddToCart}
      />

      <Toast 
        message={toastMessage} 
        isVisible={!!toastMessage} 
      />
    </div>
  );
};

export default Storefront;
