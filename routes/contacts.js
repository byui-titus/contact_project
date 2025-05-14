const express = require('express');
const router = express.Router();

const ContactCotroller = require('../controllers/contacts');

router.get('/', ContactCotroller.getAll);

router.get('/:id', ContactCotroller.getSingle);

router.post('/', ContactCotroller.createContact);

router.put('/:id', ContactCotroller.updateContact);

router.delete('/:id', ContactCotroller.deleteContact);

module.exports = router;