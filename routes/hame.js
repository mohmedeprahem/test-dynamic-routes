const express = require('express');
const router = express.Router();
const view = require('../controller/get')
const add = require('../controller/post')
// @disc: get home page
// @routs: '/'
// @access: public
router.get('/', view.getHomePage);

// @disc: add data
// @routs: '/add'
// @access: public
router.post('/add', add.addData);

// @disc: view memebers
// @routs: '/member'
// @access: public
router.get('/members', view.getMembers);

module.exports = router;