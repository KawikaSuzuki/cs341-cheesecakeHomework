//Kawika Suzuki
const express = require('express');
const router = express.Router();
const dbms = require('./dbms');

router.post('/', (req, res) => { 
     // Define the SQL query to retrieve the orders for the given month
     const query = `INSERT INTO ORDERS (ORDERID, MONTH, DAY, QUANTITY, TOPPING, NOTES) VALUES 
     ('${req.body.orderID}', '${req.body.month}', '${req.body.day}', '${req.body.quantity}', '${req.body.topping}', '${req.body.notes}');`;

    console.log(req.body.orderID);

    // Call the dbquery function from the dbms module to execute the SQL query
    dbms.dbquery(query, (err, data) => {
        //if there is an error than send error message
        if (err) {
            console.log(err);
            res.status(500).send('Error retrieving orders data from database');
        } 
        else {
            console.log("successfully transferred");
            res.send("Order inserted successfully");
        }
    });
});

module.exports = router;

