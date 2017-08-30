const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('this is the main dummy page');
});


router.get('/:whatever',(req, res)=>{
    res.send(`You just typed ${req.params.whatever}`)
})

module.exports = router;