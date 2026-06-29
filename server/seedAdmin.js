// Only run if this file is executed directly
if (require.main === module) {
  require('dotenv').config();
  const mongoose = require('mongoose');
  const User = require('./models/User');

  const seed = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@tax.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'Admin@123';

    const existing = await User.findOne({ email: adminEmail });
    if (existing) {
      console.log('✅ Admin already exists');
      process.exit(0);
    }

    const admin = new User({
      name: 'Admin',
      email: adminEmail,
      password: adminPassword,
      role: 'admin'
    });
    await admin.save();
    console.log(`✅ Admin created: ${adminEmail} / ${adminPassword}`);
    process.exit(0);
  };

  seed().catch(err => {
    console.error('❌ Error seeding:', err);
    process.exit(1);
  });
}