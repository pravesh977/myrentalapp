const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('this is list of rentals route');
});

module.exports = router;