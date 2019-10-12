const express = require('express');
const router = express.Router(); // this is intergration router in express.

router.get('/', (req, res) => {
    res.send('go')
});

module.exports = router;

