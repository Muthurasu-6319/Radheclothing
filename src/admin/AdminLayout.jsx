import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import './admin.css';

const AdminLayout = () => {
    return (
        <div className="admin-layout">
            {/* Sidebar */}
            <aside className="admin-sidebar">
                <div className="brand">
                    <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
                        RADHE <span style={{ fontWeight: 300 }}>ADMIN</span>
                    </Link>
                </div>
                <nav className="admin-nav">
                    <NavLink to="/admin" end>
                        <i className="fas fa-home"></i> Dashboard
                    </NavLink>
                    <NavLink to="/admin/products">
                        <i className="fas fa-box"></i> Products
                    </NavLink>
                    <NavLink to="/admin/orders">
                        <i className="fas fa-shopping-cart"></i> Orders
                    </NavLink>
                    <NavLink to="/admin/customers">
                        <i className="fas fa-users"></i> Customers
                    </NavLink>
                    <NavLink to="/admin/settings">
                        <i className="fas fa-cog"></i> Settings
                    </NavLink>
                </nav>
            </aside>

            {/* Main Content Area */}
            <div className="admin-content">
                {/* Topbar */}
                <header className="admin-header">
                    <div className="search-bar">
                        <i className="fas fa-search" style={{ color: '#aaa', marginRight: '10px' }}></i>
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            style={{ border: 'none', outline: 'none', background: 'transparent' }}
                        />
                    </div>
                    <div className="admin-actions" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <i className="far fa-bell" style={{ color: '#666', cursor: 'pointer' }}></i>
                        <div className="admin-user">
                            <div className="admin-user-avatar">A</div>
                            <span>Admin User</span>
                        </div>
                    </div>
                </header>

                {/* Main Page Content (Injected by React Router) */}
                <main className="admin-main">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
