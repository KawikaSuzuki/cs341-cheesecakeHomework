var express = require('express');
var router = express.Router();

/* GET orders listing */
router.get('/orders', function(req, res, next) {
    const ORDERS = [
        {topping: 'cherry', quantity: 2},
        {topping: 'plain', quantity: 6},
        {topping: 'chocolate', quantity: 3}
    ];
    //send through json object
    res.json(ORDERS);
    //res.send('This is the orders page');
});

module.exports = router;