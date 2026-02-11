/* eslint-disable */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Mapeo manual para mejorar la estética (Curaduría "Nexus")
// IDs basados en FakeStoreAPI
const customImages: Record<number, { newTitle?: string; newImage: string }> = {
  // --- MEN'S CLOTHING ---
  1: {
    newTitle: 'Urban Traveler Backpack',
    newImage:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
  },
  2: {
    newTitle: 'Minimalist Cotton Tee',
    newImage:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
  },
  3: {
    newTitle: 'Structure Jacket',
    newImage:
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80',
  },
  4: {
    newTitle: 'Slim Fit Tech Layer',
    newImage:
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80',
  },

  // --- JEWELERY ---
  5: {
    newTitle: 'Dragon Silver Chain',
    newImage:
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80',
  },
  6: {
    newTitle: 'Petite Gold Solid',
    newImage:
      'https://images.unsplash.com/photo-1602751584552-8ba420552259?auto=format&fit=crop&w=800&q=80',
  },
  7: {
    newTitle: 'White Gold Plated Princess',
    newImage:
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
  },
  8: {
    newTitle: 'Rose Gold Pierced',
    newImage:
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
  },

  // --- ELECTRONICS ---
  9: {
    newTitle: 'WD Portable Drive 2TB',
    newImage:
      'https://images.unsplash.com/photo-1563396983906-b3795482a59a?auto=format&fit=crop&w=800&q=80',
  },
  10: {
    newTitle: 'SanDisk SSD Plus 1TB',
    newImage:
      'https://images.unsplash.com/photo-1597872252721-2454205331e2?auto=format&fit=crop&w=800&q=80',
  },
  11: {
    newTitle: 'Silicon Power 256GB SSD',
    newImage:
      'https://images.unsplash.com/photo-1558486012-817176f84c6d?auto=format&fit=crop&w=800&q=80',
  },
  12: {
    newTitle: 'WD 4TB Gaming Drive',
    newImage:
      'https://images.unsplash.com/photo-1588872657578-c1e5564c7873?auto=format&fit=crop&w=800&q=80',
  },
  13: {
    newTitle: 'Acer SB220Q Monitor',
    newImage:
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
  },
  14: {
    newTitle: 'Samsung 49-Inch CHG90',
    newImage:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
  },

  // --- WOMEN'S CLOTHING ---
  15: {
    newTitle: 'Snowboard Jacket Winter',
    newImage:
      'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?auto=format&fit=crop&w=800&q=80',
  },
  16: {
    newTitle: 'Leather Moto Jacket',
    newImage:
      'https://images.unsplash.com/photo-1551488852-0801464c8c71?auto=format&fit=crop&w=800&q=80',
  },
  17: {
    newTitle: 'Rain Jacket Women',
    newImage:
      'https://images.unsplash.com/photo-1545631310-b4df49a729ae?auto=format&fit=crop&w=800&q=80',
  },
  18: {
    newTitle: 'MBJ Short Sleeve Boat Neck',
    newImage:
      'https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&w=800&q=80',
  },
  19: {
    newTitle: "Opna Women's Short Sleeve",
    newImage:
      'https://images.unsplash.com/photo-1527719327859-ac9ce0155851?auto=format&fit=crop&w=800&q=80',
  },
  20: {
    newTitle: 'DANVOUY Womens T Shirt',
    newImage:
      'https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&w=800&q=80',
  },
};

async function main() {
  console.log('🌱 Start seeding...');

  // 1. Fetch data from FakeStoreAPI
  const response = await fetch('https://fakestoreapi.com/products');
  const products: any[] = await response.json();

  console.log(`📦 Fetched ${products.length} products from API`);

  // 2. Transform & Save to DB
  for (const product of products) {
    const enrichment = customImages[product.id];

    // Si tenemos datos personalizados, los usamos. Si no, usamos los de la API.
    const finalTitle = enrichment?.newTitle || product.title;
    const finalImage = enrichment?.newImage || product.image;

    await prisma.product.upsert({
      where: { apiId: product.id },
      update: {
        title: finalTitle,
        image: finalImage,
        price: product.price,
        // Actualizamos precios si cambiaron en la API
      },
      create: {
        apiId: product.id,
        title: finalTitle,
        price: product.price,
        description: product.description,
        category: product.category,
        image: finalImage,
      },
    });
  }

  console.log('✅ Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
