const express = require('express');
const router = express.Router();

router.get('/chartData', (req, res) => {
    res.json({
        "values":[10,15,20,25,30],
        "labels":["ItemOne","ItemTwo","ItemThree","ItemFour","ItemFive"]
    })
})
router.post('/chartData', (req, res) => {
    res.send(req.body);
})
module.exports = router;