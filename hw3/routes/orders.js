//Kawika Suzuki
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    //create an array object orders that has the new elements for the HTML side from the database
    const orders = [
        { topping: 'cherry', quantity: 2 },
        { topping: 'plain', quantity: 6 },
        { topping: 'chocolate', quantity: 3 }
    ];
    res.send(orders);
});

module.exports = router;

