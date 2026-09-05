import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Storefront from './pages/Storefront';
import AdminLayout from './admin/AdminLayout';
import Dashboard from './admin/Dashboard';
import ProductsManager from './admin/ProductsManager';
import OrdersManager from './admin/OrdersManager';
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          {/* Customer Facing Site */}
          <Route path="/" element={<Storefront />} />

          {/* Admin Dashboard */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<ProductsManager />} />
            <Route path="orders" element={<OrdersManager />} />
            <Route path="customers" element={<div style={{padding:'2rem'}}><h1 className="admin-title">Customers</h1><p>Customer management module coming soon.</p></div>} />
            <Route path="settings" element={<div style={{padding:'2rem'}}><h1 className="admin-title">Settings</h1><p>Admin settings module coming soon.</p></div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
