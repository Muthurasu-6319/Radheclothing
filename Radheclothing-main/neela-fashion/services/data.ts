
import { Product, CATEGORIES } from '../types';

const generateProducts = (): Product[] => {
  const products: Product[] = [];
  let idCounter = 1;

  Object.entries(CATEGORIES).forEach(([category, subCategories]) => {
    subCategories.forEach((sub) => {
      // Generate 1-2 products per subcategory for demo purposes
      const count = 2;
      for (let i = 0; i < count; i++) {
        const price = Math.floor(Math.random() * 2000) + 500;
        const discount = Math.random() > 0.5 ? Math.floor(price * 0.8) : undefined;
        const stock = Math.floor(Math.random() * 20); // Random stock between 0 and 20
        const chudidarImages = [
            "/original_chudidar_1.jpg",
            "/original_chudidar_2.jpg",
            "/original_chudidar_3.jpg"
        ];
        const mainImage = chudidarImages[idCounter % 3];
        
        products.push({
          id: idCounter++,
          name: `${sub} - Style ${String.fromCharCode(65 + i)}`,
          category,
          subCategory: sub,
          price: price,
          discountPrice: discount,
          image: mainImage,
          images: [
              mainImage,
              chudidarImages[(idCounter + 1) % 3],
              chudidarImages[(idCounter + 2) % 3]
          ],
          description: `Elegant and comfortable ${sub} designed for the modern woman. Perfect for casual or formal wear depending on styling.`,
          material: category.includes('Cotton') ? '100% Cotton' : 'Premium Blend',
          rating: (Math.random() * 2 + 3), // Rating between 3 and 5
          stock: stock
        });
      }
    });
  });

  products.unshift({
    id: idCounter++,
    name: `Black Floral Katha Stitch Suit`,
    category: 'Cotton Sets',
    subCategory: 'Unstitched Suits',
    price: 1799,
    image: "/katha_stitch_1.jpg",
    images: ["/katha_stitch_1.jpg"],
    description: `Top: 2.5 m Soft Mul cotton with full Katha stitch work\nBottom: 2 m full chickenkari work\nDuppata: 2.5 m Soft Mul cotton with cut work and patch work design`,
    material: 'Soft Mul Cotton',
    rating: 4.8,
    stock: 20
  });

  products.unshift({
    id: idCounter++,
    name: `Green Floral Katha Stitch Suit`,
    category: 'Cotton Sets',
    subCategory: 'Unstitched Suits',
    price: 1799,
    image: "/katha_stitch_2.jpg",
    images: ["/katha_stitch_2.jpg"],
    description: `Top: 2.5 m Soft Mul cotton with full Katha stitch work\nBottom: 2 m full chickenkari work\nDuppata: 2.5 m Soft Mul cotton with cut work and patch work design`,
    material: 'Soft Mul Cotton',
    rating: 4.9,
    stock: 20
  });

  products.unshift({
    id: idCounter++,
    name: `Olive Paisley Katha Stitch Suit`,
    category: 'Cotton Sets',
    subCategory: 'Unstitched Suits',
    price: 1799,
    image: "/katha_stitch_3.jpg",
    images: ["/katha_stitch_3.jpg"],
    description: `Top: 2.5 m Soft Mul cotton with full Katha stitch work\nBottom: 2 m full chickenkari work\nDuppata: 2.5 m Soft Mul cotton with cut work and patch work design`,
    material: 'Soft Mul Cotton',
    rating: 4.7,
    stock: 20
  });

  products.unshift({
    id: idCounter++,
    name: `Pink Floral Katha Stitch Suit`,
    category: 'Cotton Sets',
    subCategory: 'Unstitched Suits',
    price: 1799,
    image: "/katha_stitch_4.jpg",
    images: ["/katha_stitch_4.jpg"],
    description: `Top: 2.5 m Soft Mul cotton with full Katha stitch work\nBottom: 2 m full chickenkari work\nDuppata: 2.5 m Soft Mul cotton with cut work and patch work design`,
    material: 'Soft Mul Cotton',
    rating: 4.9,
    stock: 20
  });

  products.unshift({
    id: idCounter++,
    name: `Black Mul Cotton Embroidery Suit`,
    category: 'Cotton Sets',
    subCategory: 'Unstitched Suits',
    price: 1399,
    image: "/black_embroidery_suit.jpg",
    images: ["/black_embroidery_suit.jpg"],
    description: `Top: 2.5 m Mul cotton with neck and buttons embroidery work\nBottom: 2 m with embroidery work\nDuppata: 2.5 m with full embroidery work`,
    material: 'Mul Cotton',
    rating: 4.8,
    stock: 20
  });

  products.unshift({
    id: idCounter++,
    name: `Blue Mul Cotton Embroidery Suit`,
    category: 'Cotton Sets',
    subCategory: 'Unstitched Suits',
    price: 1399,
    image: "/blue_embroidery_suit.jpg",
    images: ["/blue_embroidery_suit.jpg"],
    description: `Top: 2.5 m Mul cotton with neck and buttons embroidery work\nBottom: 2 m with embroidery work\nDuppata: 2.5 m with full embroidery work`,
    material: 'Mul Cotton',
    rating: 4.9,
    stock: 20
  });

  return products;
};

export const MOCK_PRODUCTS = generateProducts();

export const getProductById = (id: number): Product | undefined => {
  return MOCK_PRODUCTS.find(p => p.id === id);
};

export const getRelatedProducts = (category: string, currentId: number): Product[] => {
  return MOCK_PRODUCTS.filter(p => p.category === category && p.id !== currentId).slice(0, 4);
};
