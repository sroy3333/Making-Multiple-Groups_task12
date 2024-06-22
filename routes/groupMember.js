const express = require('express');
const router = express.Router();
const groupMemberController = require('../controllers/groupMember');
const { authenticate } = require('../middleware/auth');

// Define routes
router.post('/join', authenticate, groupMemberController.joinGroup);
router.delete('/leave/:groupId/:userId', authenticate, groupMemberController.leaveGroup);

module.exports = router;
