const express = require('express');
const router = express.Router();
const messageController = require('../controllers/message');
const { authenticate } = require('../middleware/auth');

// Define routes
router.get('/:groupId', authenticate, messageController.getMessagesByGroup);
router.post('/', authenticate, messageController.createMessage);

module.exports = router;
