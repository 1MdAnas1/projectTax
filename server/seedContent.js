const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Content = require('./models/Content');

dotenv.config();

// Default content – must match the DEFAULTS in AdminDashboard.jsx
const DEFAULT_CONTENT = {
  heroTitle: 'Smart Tax.',
  heroSubtitle: 'Simple Life.',
  heroDescription: 'Delivering financial clarity and strategic growth with unparalleled expertise in tax, audit, compliance, and advisory solutions.',
  heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920',
  aboutTitle: 'Your Trusted Tax & Financial Partner',
  aboutDescription: 'With years of experience in tax consulting, audit, and compliance, we provide tailored solutions that help businesses navigate complex financial landscapes with confidence.',
  aboutImage: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80',
  aboutBullets: [
    'Expert tax advisory services',
    'Comprehensive audit & assurance',
    'GST compliance made simple'
  ],
  servicesTitle: 'What We Offer',
  servicesDescription: 'Comprehensive financial solutions designed to help your business thrive.',
  services: [
    { icon: '📊', title: 'Tax Consulting', desc: 'Strategic tax planning and compliance solutions tailored to your business needs.' },
    { icon: '🔍', title: 'Audit & Assurance', desc: 'Comprehensive audit services ensuring transparency and regulatory compliance.' },
    { icon: '📋', title: 'GST Compliance', desc: 'End-to-end GST registration, filing, and advisory services.' },
    { icon: '💼', title: 'Business Advisory', desc: 'Strategic financial advice to drive growth and maximize profitability.' }
  ],
  teamTitle: 'OUR TEAM',
  teamDescription: 'Meet the experts behind your numbers',
  team: [
    { name: 'Rajesh Sharma, FCA', role: 'Managing Partner', img: 'https://media.istockphoto.com/id/1949501832/photo/handsome-hispanic-senior-business-man-with-crossed-arms-smiling-at-camera-indian-or-latin.jpg?s=612x612&w=0&k=20&c=LtlsYrQxUyX7oRmYS37PnZeaV2JmoPX9hWYPOfojCgw=' },
    { name: 'Priya Verma, ACA', role: 'Tax & Advisory Head', img: 'https://media.istockphoto.com/id/1203826502/photo/senior-businesswoman-in-office.jpg?s=612x612&w=0&k=20&c=StIwRfkl5S5BmuvUIITCIdAt7XfnvQ_n2VGD5odOFAA=' },
    { name: 'Aman Khanna, CA', role: 'Audit Partner', img: 'https://media.istockphoto.com/id/1351060234/photo/shot-of-a-young-businessman-in-his-office.jpg?s=612x612&w=0&k=20&c=i-09UeAMza1Li0cEY2TOVzlkrRMyu49e0j4WW8chw0M=' },
    { name: 'Neha Gupta, CA', role: 'GST & Compliance Lead', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80' }
  ],
  galleryTitle: 'Our Work',
  galleryDescription: 'A glimpse into our professional journey and client engagements.',
  gallery: [
    'https://picsum.photos/id/1/400/400',
    'https://picsum.photos/id/6/400/400',
    'https://picsum.photos/id/7/400/400',
    'https://picsum.photos/id/8/400/400'
  ],
  contactTitle: 'Get In Touch',
  contactDescription: "Have questions? We're here to help.",
  contactPhone: '+91 9122456789',
  contactEmail: 'mail@tax.com',
  contactAddress: 'India'
};

async function seedContent() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    for (const [key, value] of Object.entries(DEFAULT_CONTENT)) {
      const existing = await Content.findOne({ sectionKey: key });
      if (existing) {
        console.log(`🔄 Updating "${key}" ...`);
        existing.value = value;
        await existing.save();
      } else {
        console.log(`➕ Creating "${key}" ...`);
        const newEntry = new Content({ sectionKey: key, value });
        await newEntry.save();
      }
    }

    console.log('✅ Default content seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding content:', error);
    process.exit(1);
  }
}

seedContent();