const router = require('express').Router();

router.get('/', (req, res) => {res.send('hello there');});

router.use('/contacts', require ('./contacts'));

module.exports = router;
