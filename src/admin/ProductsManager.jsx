import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import { formatPrice } from '../data/products';

const ProductsManager = () => {
    const { products, addProduct, updateProduct, deleteProduct } = useContext(ProductContext);
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    
    // Form State
    const [formData, setFormData] = useState({
        title: '',
        category: 'saree',
        price: '',
        oldPrice: '',
        image: '',
        badge: ''
    });

    const openAddModal = () => {
        setEditingProduct(null);
        setFormData({ title: '', category: 'saree', price: '', oldPrice: '', image: '', badge: '' });
        setIsModalOpen(true);
    };

    const openEditModal = (product) => {
        setEditingProduct(product);
        setFormData({ ...product });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({ ...prev, image: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const productData = {
            ...formData,
            price: Number(formData.price),
            oldPrice: formData.oldPrice ? Number(formData.oldPrice) : null
        };

        if (editingProduct) {
            updateProduct(editingProduct.id, productData);
        } else {
            addProduct(productData);
        }
        closeModal();
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 className="admin-title" style={{ marginBottom: 0 }}>Products Management</h1>
                <button className="admin-btn" onClick={openAddModal}>
                    <i className="fas fa-plus"></i> Add New Product
                </button>
            </div>

            <div className="admin-card">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>
                                    <img src={product.image} alt={product.title} style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px' }} />
                                </td>
                                <td style={{ fontWeight: 500 }}>{product.title}</td>
                                <td><span style={{ textTransform: 'capitalize' }}>{product.category}</span></td>
                                <td>{formatPrice(product.price)}</td>
                                <td><span className="status-badge status-delivered">In Stock</span></td>
                                <td>
                                    <div className="action-btns">
                                        <button className="btn-icon" title="Edit" onClick={() => openEditModal(product)}>
                                            <i className="fas fa-pen"></i>
                                        </button>
                                        <button className="btn-icon delete" title="Delete" onClick={() => deleteProduct(product.id)}>
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Add / Edit Modal */}
            {isModalOpen && (
                <div className="admin-modal-overlay" onClick={closeModal}>
                    <div className="admin-modal" onClick={e => e.stopPropagation()}>
                        <div className="admin-modal-header">
                            <h2>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
                            <button className="close-btn" onClick={closeModal}><i className="fas fa-times"></i></button>
                        </div>
                        <form onSubmit={handleSubmit} className="admin-form">
                            
                            <div className="form-group">
                                <label>Product Image</label>
                                <div className="image-upload-wrapper">
                                    {formData.image && <img src={formData.image} alt="Preview" className="img-preview" />}
                                    <input type="file" accept="image/*" onChange={handleImageUpload} />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" name="title" value={formData.title} onChange={handleInputChange} required />
                            </div>

                            <div className="form-row">
                                <div className="form-group" style={{ flex: 1 }}>
                                    <label>Category</label>
                                    <select name="category" value={formData.category} onChange={handleInputChange} required>
                                        <option value="saree">Saree</option>
                                        <option value="kurti">Kurti</option>
                                        <option value="suit">Suit</option>
                                        <option value="lehenga">Lehenga</option>
                                    </select>
                                </div>
                                <div className="form-group" style={{ flex: 1 }}>
                                    <label>Badge (Optional)</label>
                                    <input type="text" name="badge" placeholder="e.g. Sale, New" value={formData.badge} onChange={handleInputChange} />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group" style={{ flex: 1 }}>
                                    <label>Price (₹)</label>
                                    <input type="number" name="price" value={formData.price} onChange={handleInputChange} required />
                                </div>
                                <div className="form-group" style={{ flex: 1 }}>
                                    <label>Old Price (Optional)</label>
                                    <input type="number" name="oldPrice" value={formData.oldPrice || ''} onChange={handleInputChange} />
                                </div>
                            </div>

                            <div className="form-actions">
                                <button type="button" className="admin-btn btn-secondary" onClick={closeModal}>Cancel</button>
                                <button type="submit" className="admin-btn">Save Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductsManager;
