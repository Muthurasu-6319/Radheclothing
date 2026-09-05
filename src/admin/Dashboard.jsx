import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <h1 className="admin-title">Dashboard Overview</h1>
            
            <div className="metrics-grid">
                <div className="metric-card">
                    <div className="metric-title">Total Revenue</div>
                    <div className="metric-value">₹ 1,24,500</div>
                </div>
                <div className="metric-card">
                    <div className="metric-title">Total Orders</div>
                    <div className="metric-value">482</div>
                </div>
                <div className="metric-card">
                    <div className="metric-title">Active Customers</div>
                    <div className="metric-value">1,294</div>
                </div>
                <div className="metric-card">
                    <div className="metric-title">Conversion Rate</div>
                    <div className="metric-value">3.4%</div>
                </div>
            </div>

            <div className="admin-card">
                <div className="admin-card-header">
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 500 }}>Recent Transactions</h3>
                    <button className="admin-btn" style={{ background: 'transparent', color: '#111', border: '1px solid #ddd' }}>View All</button>
                </div>
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#ORD-8902</td>
                            <td>Kavya Reddy</td>
                            <td>Today, 10:23 AM</td>
                            <td>₹ 4,500</td>
                            <td><span className="status-badge status-pending">Pending</span></td>
                        </tr>
                        <tr>
                            <td>#ORD-8901</td>
                            <td>Priya Sharma</td>
                            <td>Yesterday</td>
                            <td>₹ 12,000</td>
                            <td><span className="status-badge status-shipped">Shipped</span></td>
                        </tr>
                        <tr>
                            <td>#ORD-8900</td>
                            <td>Anjali Menon</td>
                            <td>Sep 03, 2026</td>
                            <td>₹ 3,250</td>
                            <td><span className="status-badge status-delivered">Delivered</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
