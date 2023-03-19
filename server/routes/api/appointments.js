const express = require('express')
const mongodb = require('mongodb')

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('Fuck');
})

module.exports = router;