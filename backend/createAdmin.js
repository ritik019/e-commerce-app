require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

const adminData = {
  name: 'Admin User',
  email: 'admin@example.com',
  password: 'admin123456',
  role: 'admin'
};

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    
    try {
      // Check if admin already exists
      const existingAdmin = await User.findOne({ email: adminData.email });
      if (existingAdmin) {
        console.log('Admin user already exists');
        mongoose.connection.close();
        return;
      }

      // Create admin user
      const admin = await User.create(adminData);
      console.log('Admin user created successfully:', {
        name: admin.name,
        email: admin.email,
        role: admin.role
      });
      
      mongoose.connection.close();
    } catch (error) {
      console.error('Error creating admin:', error);
      mongoose.connection.close();
    }
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
