const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const {
  getAllContent,
  getContentByKey,
  updateContent,
  deleteContent
} = require('../controllers/contentController');

// Public routes
router.get('/', getAllContent);
router.get('/:key', getContentByKey);

// Admin-only routes
router.put('/:key', auth, admin, updateContent);
router.delete('/:key', auth, admin, deleteContent);

module.exports = router;