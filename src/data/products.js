export const products = [
    {
        id: 1,
        title: "Emerald Silk Kanjeevaram Saree",
        category: "saree",
        price: 8999,
        oldPrice: 12999,
        image: "https://images.unsplash.com/photo-1610030469983-98e550d615ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        badge: "Sale",
        isNew: false
    },
    {
        id: 2,
        title: "Champagne Gold Embroidered Kurti",
        category: "kurti",
        price: 2499,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        badge: "New",
        isNew: true
    },
    {
        id: 3,
        title: "Royal Blue Chiffon Saree",
        category: "saree",
        price: 4599,
        oldPrice: 5999,
        image: "https://images.unsplash.com/photo-1583391733958-650fac5eb369?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        badge: "",
        isNew: false
    },
    {
        id: 4,
        title: "Maroon Anarkali Suit Set",
        category: "suit",
        price: 5999,
        oldPrice: 7499,
        image: "https://images.unsplash.com/photo-1584852932337-33d98eb82ce0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        badge: "Bestseller",
        isNew: false
    },
    {
        id: 5,
        title: "Mint Green Cotton Kurti",
        category: "kurti",
        price: 1299,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1610189013233-6bc312566db9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        badge: "",
        isNew: false
    },
    {
        id: 6,
        title: "Midnight Black Georgette Saree",
        category: "saree",
        price: 3899,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1610030469983-98e550d615ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        badge: "New",
        isNew: true
    },
    {
        id: 7,
        title: "Pastel Pink Palazzo Suit",
        category: "suit",
        price: 3299,
        oldPrice: 4599,
        image: "https://images.unsplash.com/photo-1584852932337-33d98eb82ce0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        badge: "Sale",
        isNew: false
    },
    {
        id: 8,
        title: "Mustard Yellow A-Line Kurti",
        category: "kurti",
        price: 1899,
        oldPrice: 2299,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        badge: "",
        isNew: false
    }
];

// Formatting function
export const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(price);
};
