const express = require('express');
const router = express.Router();//mini app to attach route handlers
//we'll export this router to use in the main app
const {
    createGroup,
    getGroups
} = require('../controllers/groupController');

// Routes
router.post('/', createGroup);
router.get('/', getGroups);

module.exports = router;
