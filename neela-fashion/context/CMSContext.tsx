import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { 
    Product, Order, User, CategoryStructure, 
    ShippingRule, ShippingRulesMap, Review, HomeContent, AboutContent, ContactContent, GlobalSettings,
    CATEGORIES
} from '../types';
import toast from 'react-hot-toast';

const DEFAULT_HOME_CONTENT: HomeContent = {
    heroTitle: 'Radhe Clothing', heroSubtitle: 'Sacred Elegance & Timeless Luxury Fashion',
    heroImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1600&q=80', marqueeText: ["Radhe Clothing", "Peacock Grace", "Royal Silk", "Heritage Handloom", "Krishna Elegance"],
    sectionTitleTrends: 'Curated Collections', sectionTitleFeatured: 'Trending Grace', sectionTitleTestimonials: 'Voices of Radhe',
    testimonials: [
      { id: 1, text: "Absolutely stunning craftsmanship. The silk saree I ordered for the festival was beyond my expectations.", author: "Ananya S.", role: "Verified Buyer" },
      { id: 2, text: "Radhe Clothing has redefined luxury ethnic wear. The vibrant colors and embroidery are unmatched.", author: "Priya M.", role: "Fashion Enthusiast" },
      { id: 3, text: "Impeccable service and fabric quality. Will definitely buy again!", author: "Rohan K.", role: "Loyal Customer" },
    ], trendImages: { large: '', topRight: '', bottomRight: '' }
};

const DEFAULT_GLOBAL_SETTINGS: GlobalSettings = { 
    logoUrl: '/logo.png', 
    siteName: 'Radhe Clothing', 
    currency: '₹', 
    logoWidth: '150px', 
    taxRate: 5,
    instagramUrl: 'https://instagram.com/radheclothing',
    youtubeUrl: 'https://youtube.com',
    whatsappNumber: '+91 9876543210',
    contactNumber: '+91 9876543210'
};

const DEFAULT_ABOUT_CONTENT: AboutContent = { 
    title: 'Sacred Weaves & Timeless Grace', 
    description: 'At Radhe Clothing, we craft elegance inspired by heritage traditions, vibrant peacock motifs, and divine craftsmanship.', 
    heroImage: '' 
};

const DEFAULT_CONTACT_CONTENT: ContactContent = { 
    address: 'Radhe Clothing Plaza, Main Road', 
    phone: '+91 9876543210', 
    email: 'support@radheclothing.com', 
    mapUrl: '', 
    heroImage: '' 
};

const INITIAL_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Kanchipuram Silk Saree - Royal Gold & Magenta",
    category: "Saree",
    subCategory: "Silk Saree",
    price: 4999,
    discountPrice: 3999,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Pure zari woven authentic Kanchipuram silk saree with vibrant color combinations and rich pallu work.",
    material: "Pure Silk",
    rating: 4.9,
    stock: 15,
    sizeStock: { "Free Size": 15 },
    sizePrices: { "Free Size": 3999 },
    showFreeSize: true
  },
  {
    id: 2,
    name: "Embroidered Nyra Cut Kurti Set",
    category: "Kurtis Collections",
    subCategory: "Nyra Cut Kurti",
    price: 1899,
    discountPrice: 1499,
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Graceful Nyra cut kurti set with intricate thread embroidery and soft viscose dupatta.",
    material: "Viscose Rayon",
    rating: 4.7,
    stock: 25,
    sizeStock: { "S": 5, "M": 10, "L": 8, "XL": 2 },
    sizePrices: { "S": 1499, "M": 1499, "L": 1499, "XL": 1499 },
    showFreeSize: false
  },
  {
    id: 3,
    name: "Premium Cotton Ankle Length Leggings",
    category: "Bottom Wear",
    subCategory: "Ankle Length",
    price: 499,
    discountPrice: 399,
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80"
    ],
    description: "4-way stretch bio-washed combed cotton leggings for all-day comfort and perfect fit.",
    material: "95% Cotton, 5% Spandex",
    rating: 4.8,
    stock: 50,
    sizeStock: { "Free Size": 50 },
    sizePrices: { "Free Size": 399 },
    showFreeSize: true
  },
  {
    id: 4,
    name: "Handloom Organic Linen Cotton Saree",
    category: "Saree",
    subCategory: "Cotton Saree",
    price: 2299,
    discountPrice: 1799,
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Breathable handloom linen cotton saree featuring hand-block prints and tassel detailing.",
    material: "Linen Cotton",
    rating: 4.6,
    stock: 20,
    sizeStock: { "Free Size": 20 },
    sizePrices: { "Free Size": 1799 },
    showFreeSize: true
  },
  {
    id: 5,
    name: "Royal Anarkali 3-Piece Kurti Set",
    category: "Kurtis Collections",
    subCategory: "Three piece set",
    price: 2999,
    discountPrice: 2299,
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Full flair flared Anarkali with pant and heavy organza dupatta, perfect for festive occasions.",
    material: "Chanderi Silk Blend",
    rating: 4.9,
    stock: 12,
    sizeStock: { "M": 4, "L": 5, "XL": 3 },
    sizePrices: { "M": 2299, "L": 2299, "XL": 2299 },
    showFreeSize: false
  },
  {
    id: 6,
    name: "Bandhani Printed Pure Cotton Dupatta",
    category: "Dupatta",
    subCategory: "Printed Cotton Dupatta",
    price: 399,
    discountPrice: 299,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Vibrant ethnic Bandhani tie-dye printed dupatta with latkan border.",
    material: "100% Cotton",
    rating: 4.5,
    stock: 35,
    sizeStock: { "Free Size": 35 },
    sizePrices: { "Free Size": 299 },
    showFreeSize: true
  }
];

const INITIAL_USERS: User[] = [
  {
    id: '1',
    name: 'Radhe Admin',
    email: 'admin@radheclothing.com',
    role: 'admin',
    isActive: true,
    phone: '+91 9876543210',
    address: 'Radhe Clothing House',
    city: 'Chennai',
    district: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600001'
  }
];

interface CMSContextType {
  products: Product[]; orders: Order[]; users: User[]; categories: CategoryStructure; shippingRules: ShippingRulesMap; reviews: Review[];
  globalSettings: GlobalSettings; homeContent: HomeContent; aboutContent: AboutContent; contactContent: ContactContent; adminCredentials: { email: string; pass: string };
  
  addProduct: (p: Product) => Promise<boolean>; 
  updateProduct: (id: number, p: Partial<Product>) => Promise<boolean>; 
  deleteProduct: (id: number) => Promise<void>; 
  bulkDeleteProducts: (ids: number[]) => Promise<void>; 
  importProducts: (newProducts: Partial<Product>[]) => Promise<void>; 

  addCategory: (name: string, rules: ShippingRule[]) => void; 
  updateCategory: (oldName: string, newName: string, rules: ShippingRule[]) => void; 
  deleteCategory: (name: string) => void; 
  addSubCategory: (categoryName: string, subCategoryName: string) => void;
  deleteSubCategory: (categoryName: string, subCategoryName: string) => void;

  updateUserProfile: (id: string, data: Partial<User>) => void; 
  deleteUser: (id: string) => void; 
  toggleUserStatus: (id: string) => void;
  addUser: (user: User) => void;

  addOrder: (order: Order) => void; 
  updateOrderStatus: (id: string, status: Order['status']) => void; 
  cancelOrder: (id: string) => void;
  deleteOrder: (id: string) => void;

  addReview: (review: Review) => void; 
  deleteReview: (id: string) => void;

  updateGlobalSettings: (s: Partial<GlobalSettings>) => void; 
  updateHomeContent: (c: Partial<HomeContent>) => void; 
  updateAboutContent: (c: Partial<AboutContent>) => void; 
  updateContactContent: (c: Partial<ContactContent>) => void; 
  updateAdminCredentials: (creds: { email: string; pass: string }) => void;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const CMSProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('rc_products');
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('rc_orders');
    return saved ? JSON.parse(saved) : [];
  });

  const [users, setUsers] = useState<User[]>(() => {
    const saved = localStorage.getItem('rc_users');
    return saved ? JSON.parse(saved) : INITIAL_USERS;
  });

  const [categories, setCategories] = useState<CategoryStructure>(() => {
    const saved = localStorage.getItem('rc_categories');
    return saved ? JSON.parse(saved) : CATEGORIES;
  });

  const [shippingRules, setShippingRules] = useState<ShippingRulesMap>(() => {
    const saved = localStorage.getItem('rc_shipping_rules');
    return saved ? JSON.parse(saved) : {};
  });

  const [reviews, setReviews] = useState<Review[]>(() => {
    const saved = localStorage.getItem('rc_reviews');
    return saved ? JSON.parse(saved) : DEFAULT_HOME_CONTENT.testimonials.map((t, idx) => ({
      id: String(idx + 1),
      userName: t.author,
      rating: 5,
      comment: t.text,
      createdAt: new Date().toISOString()
    }));
  });

  const [globalSettings, setGlobalSettings] = useState<GlobalSettings>(() => {
    const saved = localStorage.getItem('rc_global_settings');
    return saved ? JSON.parse(saved) : DEFAULT_GLOBAL_SETTINGS;
  });

  const [homeContent, setHomeContent] = useState<HomeContent>(() => {
    const saved = localStorage.getItem('rc_home_content');
    return saved ? JSON.parse(saved) : DEFAULT_HOME_CONTENT;
  });

  const [aboutContent, setAboutContent] = useState<AboutContent>(() => {
    const saved = localStorage.getItem('rc_about_content');
    return saved ? JSON.parse(saved) : DEFAULT_ABOUT_CONTENT;
  });

  const [contactContent, setContactContent] = useState<ContactContent>(() => {
    const saved = localStorage.getItem('rc_contact_content');
    return saved ? JSON.parse(saved) : DEFAULT_CONTACT_CONTENT;
  });

  const [adminCredentials, setAdminCredentials] = useState(() => {
    const saved = localStorage.getItem('rc_admin_creds');
    return saved ? JSON.parse(saved) : { email: 'admin@radheclothing.com', pass: 'admin-radhe' };
  });

  // Sync to localStorage
  useEffect(() => { localStorage.setItem('rc_products', JSON.stringify(products)); }, [products]);
  useEffect(() => { localStorage.setItem('rc_orders', JSON.stringify(orders)); }, [orders]);
  useEffect(() => { localStorage.setItem('rc_users', JSON.stringify(users)); }, [users]);
  useEffect(() => { localStorage.setItem('rc_categories', JSON.stringify(categories)); }, [categories]);
  useEffect(() => { localStorage.setItem('rc_shipping_rules', JSON.stringify(shippingRules)); }, [shippingRules]);
  useEffect(() => { localStorage.setItem('rc_reviews', JSON.stringify(reviews)); }, [reviews]);
  useEffect(() => { localStorage.setItem('rc_global_settings', JSON.stringify(globalSettings)); }, [globalSettings]);
  useEffect(() => { localStorage.setItem('rc_home_content', JSON.stringify(homeContent)); }, [homeContent]);
  useEffect(() => { localStorage.setItem('rc_about_content', JSON.stringify(aboutContent)); }, [aboutContent]);
  useEffect(() => { localStorage.setItem('rc_contact_content', JSON.stringify(contactContent)); }, [contactContent]);
  useEffect(() => { localStorage.setItem('rc_admin_creds', JSON.stringify(adminCredentials)); }, [adminCredentials]);

  // Actions
  const addCategory = (name: string, rules: ShippingRule[]) => {
    setCategories(prev => ({ ...prev, [name]: prev[name] || [] }));
    setShippingRules(prev => ({ ...prev, [name]: rules }));
    toast.success("Category Added!");
  };

  const updateCategory = (oldName: string, newName: string, rules: ShippingRule[]) => {
    setCategories(prev => {
      const newCats = { ...prev };
      const subs = newCats[oldName] || [];
      delete newCats[oldName];
      newCats[newName] = subs;
      return newCats;
    });
    setShippingRules(prev => {
      const newRules = { ...prev };
      delete newRules[oldName];
      newRules[newName] = rules;
      return newRules;
    });
    toast.success("Category Updated!");
  };

  const deleteCategory = (name: string) => {
    setCategories(prev => { const n = { ...prev }; delete n[name]; return n; });
    setShippingRules(prev => { const n = { ...prev }; delete n[name]; return n; });
    toast.success("Category Deleted!");
  };
  
  const addSubCategory = (categoryName: string, subCategoryName: string) => {
    setCategories(prev => {
      const current = prev[categoryName] || [];
      if (!current.includes(subCategoryName)) {
        return { ...prev, [categoryName]: [...current, subCategoryName] };
      }
      return prev;
    });
    toast.success("SubCategory Added!");
  };

  const deleteSubCategory = (categoryName: string, subCategoryName: string) => {
    setCategories(prev => {
      const current = prev[categoryName] || [];
      return { ...prev, [categoryName]: current.filter(s => s !== subCategoryName) };
    });
    toast.success("SubCategory Removed!");
  };

  const addOrder = (order: Order) => {
    setOrders(prev => [order, ...prev]);
    toast.success("Order Placed Successfully!");
  };

  const updateOrderStatus = (id: string, status: Order['status']) => {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status } : o));
    toast.success("Order Status Updated!");
  };

  const cancelOrder = (id: string) => {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status: 'Cancelled' } : o));
    toast.success("Order Cancelled");
  };

  const deleteOrder = (id: string) => {
    setOrders(prev => prev.filter(o => o.id !== id));
    toast.success("Order Deleted!");
  };
  
  const updateGlobalSettings = (s: Partial<GlobalSettings>) => {
    setGlobalSettings(prev => ({ ...prev, ...s }));
    toast.success("Settings Saved!");
  };

  const updateHomeContent = (c: Partial<HomeContent>) => {
    setHomeContent(prev => ({ ...prev, ...c }));
    toast.success("Home Content Updated!");
  };

  const updateAboutContent = (c: Partial<AboutContent>) => {
    setAboutContent(prev => ({ ...prev, ...c }));
    toast.success("About Content Updated!");
  };

  const updateContactContent = (c: Partial<ContactContent>) => {
    setContactContent(prev => ({ ...prev, ...c }));
    toast.success("Contact Content Updated!");
  };
  
  const addProduct = async (p: Product): Promise<boolean> => { 
      const newId = products.length > 0 ? Math.max(...products.map(item => item.id)) + 1 : 1;
      const newProduct = { ...p, id: newId };
      setProducts(prev => [newProduct, ...prev]);
      toast.success(`Added: ${p.name}`); 
      return true;
  };

  const updateProduct = async (id: number, p: Partial<Product>): Promise<boolean> => { 
      setProducts(prev => prev.map(item => item.id === id ? { ...item, ...p } : item));
      toast.success("Product Updated!"); 
      return true;
  };

  const deleteProduct = async (id: number) => { 
      setProducts(prev => prev.filter(p => p.id !== id));
      toast.success("Product Deleted!"); 
  };

  const bulkDeleteProducts = async (ids: number[]) => { 
      setProducts(prev => prev.filter(p => !ids.includes(p.id)));
      toast.success("Products Deleted!"); 
  };
  
  const importProducts = async (newProducts: Partial<Product>[]) => {
      let count = 0;
      let nextId = products.length > 0 ? Math.max(...products.map(item => item.id)) + 1 : 1;
      const toAdd: Product[] = [];
      for (const p of newProducts) {
          if (p.name && p.price && p.category) {
              toAdd.push({
                  id: nextId++,
                  name: p.name,
                  category: p.category,
                  subCategory: p.subCategory || '',
                  price: p.price,
                  discountPrice: p.discountPrice,
                  image: p.image || 'https://picsum.photos/400/600',
                  images: p.images || [p.image || 'https://picsum.photos/400/600'],
                  description: p.description || '',
                  material: p.material || 'Cotton',
                  rating: p.rating || 4.5,
                  stock: p.stock || 10
              });
              count++;
          }
      }
      if (toAdd.length > 0) {
          setProducts(prev => [...toAdd, ...prev]);
          toast.success(`${count} Products Imported!`);
      }
  };

  const addUser = (newUser: User) => {
    setUsers(prev => {
      const exists = prev.some(u => u.email === newUser.email);
      if (!exists) return [...prev, newUser];
      return prev.map(u => u.email === newUser.email ? { ...u, ...newUser } : u);
    });
  };

  const deleteUser = (id: string) => { 
      setUsers(prev => prev.filter(u => u.id !== id));
      toast.success("User Deleted!"); 
  };

  const toggleUserStatus = (id: string) => { 
      setUsers(prev => prev.map(u => u.id === id ? { ...u, isActive: !u.isActive } : u));
      toast.success("Status Toggled!"); 
  };

  const updateUserProfile = (id: string, d: Partial<User>) => { 
      setUsers(prev => prev.map(u => u.id === id ? { ...u, ...d } : u));
      toast.success("Profile Updated!");
  };

  const addReview = (r: Review) => { 
      setReviews(prev => [r, ...prev]);
      toast.success("Review Submitted!"); 
  };

  const deleteReview = (id: string) => { 
      setReviews(prev => prev.filter(r => r.id !== id));
      toast.success("Review Deleted!"); 
  };

  const updateAdminCredentials = (creds: {email: string, pass: string}) => {
      setAdminCredentials(creds);
      toast.success("Admin Credentials Updated!");
  };

  return (
    <CMSContext.Provider value={{
      products, orders, users, categories, shippingRules, reviews, globalSettings, homeContent, aboutContent, contactContent, adminCredentials,
      addProduct, updateProduct, deleteProduct, bulkDeleteProducts, importProducts,
      addCategory, updateCategory, deleteCategory, addSubCategory, deleteSubCategory, updateUserProfile, deleteUser, toggleUserStatus, addUser,
      addOrder, updateOrderStatus, cancelOrder, deleteOrder,
      addReview, deleteReview,
      updateGlobalSettings, updateHomeContent, updateAboutContent, updateContactContent, updateAdminCredentials
    }}>
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (!context) throw new Error('useCMS must be used within a CMSProvider');
  return context;
};