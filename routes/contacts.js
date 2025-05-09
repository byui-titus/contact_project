const express = require('express');
const router = express.Router();

const ContactCotroller = require('../controllers/contacts');

router.get('/', ContactCotroller.getAll);

router.get('/:id', ContactCotroller.getSingle);

module.exports = router;