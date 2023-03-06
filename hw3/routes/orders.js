//Kawika Suzuki
const express = require('express');
const router = express.Router();
const dbms = require('./dbms');

router.post('/', (req, res) => { 
    //create an array object orders that has the new elements for the HTML side from the database
    const orders = [
        //{ topping: 'cherry', quantity: 2 },
        //{ topping: 'plain', quantity: 6 },
        //{ topping: 'chocolate', quantity: 3 }
    ];

    console.log(req.body.month);
    // Define the SQL query to retrieve the orders for the given month
    const query = `SELECT TOPPING, SUM(QUANTITY) AS QUANTITY FROM ORDERS WHERE MONTH = '${req.body.month}' GROUP BY TOPPING;`;

    // Call the dbquery function from the dbms module to execute the SQL query
    dbms.dbquery(query, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error retrieving orders data from database');
        } 
        else {
            //iterate through the results and construct the array of objects
            let plain = 0;
            let cherry = 0;
            let chocolate = 0;
            console.log(data);
            data.forEach(function(row) {
                if(row.TOPPING == "Plain") {
                    plain += row.QUANTITY;
                }
                else if (row.TOPPING == "Cherry") {
                    cherry += row.QUANTITY;
                }
                else {
                    chocolate += row.QUANTITY;
                }
            });
            
            orders.push({quantity:cherry, topping:"cherry" });
            orders.push({quantity:chocolate, topping:"chocolate" });
            orders.push({quantity:plain, topping:"plain" });
            
            
            //Send the JSON response
            res.setHeader('Content-Type','application/json');
            res.send(orders);
        }
    });
});

module.exports = router;

