import React from 'react';

const OrdersManager = () => {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 className="admin-title" style={{ marginBottom: 0 }}>Orders Management</h1>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button className="admin-btn" style={{ background: 'transparent', color: '#111', border: '1px solid #ddd' }}>Export CSV</button>
                </div>
            </div>

            <div className="admin-card">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Items</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ fontWeight: 500 }}>#ORD-8902</td>
                            <td>Kavya Reddy</td>
                            <td>Sep 05, 2026</td>
                            <td>1</td>
                            <td>₹ 4,500</td>
                            <td><span className="status-badge status-pending">Pending</span></td>
                            <td>
                                <button className="btn-icon" title="View Details"><i className="fas fa-eye"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ fontWeight: 500 }}>#ORD-8901</td>
                            <td>Priya Sharma</td>
                            <td>Sep 04, 2026</td>
                            <td>2</td>
                            <td>₹ 12,000</td>
                            <td><span className="status-badge status-shipped">Shipped</span></td>
                            <td>
                                <button className="btn-icon" title="View Details"><i className="fas fa-eye"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ fontWeight: 500 }}>#ORD-8900</td>
                            <td>Anjali Menon</td>
                            <td>Sep 03, 2026</td>
                            <td>1</td>
                            <td>₹ 3,250</td>
                            <td><span className="status-badge status-delivered">Delivered</span></td>
                            <td>
                                <button className="btn-icon" title="View Details"><i className="fas fa-eye"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ fontWeight: 500 }}>#ORD-8899</td>
                            <td>Sneha Rao</td>
                            <td>Sep 02, 2026</td>
                            <td>3</td>
                            <td>₹ 18,700</td>
                            <td><span className="status-badge status-delivered">Delivered</span></td>
                            <td>
                                <button className="btn-icon" title="View Details"><i className="fas fa-eye"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrdersManager;
