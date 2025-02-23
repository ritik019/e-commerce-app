require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
  {
    name: 'iPhone 15 Pro',
    description: 'Latest iPhone with A17 Pro chip, 48MP camera system, and titanium design',
    price: 999.99,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693009284541',
    category: 'Electronics',
    countInStock: 50
  },
  {
    name: 'MacBook Air M2',
    description: 'Supercharged by M2 chip, up to 18 hours of battery life',
    price: 1199.99,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-config-20220606?wid=820&hei=498&fmt=jpeg&qlt=90&.v=1654122880566',
    category: 'Electronics',
    countInStock: 30
  },
  {
    name: 'Nike Air Max',
    description: 'Classic design with modern comfort technology',
    price: 129.99,
    image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1eeaacc0-e07c-4024-a5f7-57f2fd23e8a2/air-max-270-mens-shoes-KkLcGR.png',
    category: 'Footwear',
    countInStock: 100
  },
  {
    name: 'Samsung 4K Smart TV',
    description: '65-inch QLED display with smart features',
    price: 1299.99,
    image: 'https://images.samsung.com/is/image/samsung/p6pim/levant/qe65q60bauxtk/gallery/levant-qled-q60b-qe65q60bauxtk-531504783?$720_576_PNG$',
    category: 'Electronics',
    countInStock: 20
  },
  {
    name: 'PlayStation 5',
    description: 'Next-gen gaming console with 4K graphics',
    price: 499.99,
    image: 'https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$',
    category: 'Gaming',
    countInStock: 15
  }
];

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    
    try {
      // Clear existing products
      await Product.deleteMany({});
      console.log('Existing products cleared');

      // Add new products
      await Product.insertMany(products);
      console.log('Sample products added successfully');
      
      mongoose.connection.close();
      console.log('Database connection closed');
    } catch (error) {
      console.error('Error seeding database:', error);
      mongoose.connection.close();
    }
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
