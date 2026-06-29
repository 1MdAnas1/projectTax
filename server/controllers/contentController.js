const Content = require('../models/Content');

// @desc    Get all content
// @route   GET /api/content
exports.getAllContent = async (req, res) => {
  try {
    const contents = await Content.find();
    res.json(contents);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get single content by key
// @route   GET /api/content/:key
exports.getContentByKey = async (req, res) => {
  try {
    const content = await Content.findOne({ sectionKey: req.params.key });
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    res.json(content);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Create or update content
// @route   PUT /api/content/:key
exports.updateContent = async (req, res) => {
  try {
    const { key } = req.params;
    const { value } = req.body;

    const updated = await Content.findOneAndUpdate(
      { sectionKey: key },
      { value, updatedAt: Date.now() },
      { new: true, upsert: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Delete content
// @route   DELETE /api/content/:key
exports.deleteContent = async (req, res) => {
  try {
    await Content.findOneAndDelete({ sectionKey: req.params.key });
    res.json({ message: 'Content deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};