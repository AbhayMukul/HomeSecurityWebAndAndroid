var express = require('express');
var mysql = require('mysql');
var cors = require('cors');
var bodyparser = require('body-parser');
var app = express();

app.use(cors());
app.use(bodyparser.json());
app.listen('5000', () => {
    console.log('server running at port 5000');
});

var db = mysql.createConnection({
    host: "database-1.cyc2ywmoxfol.ap-south-1.rds.amazonaws.com",
    user: "admin",
    password: "admin1234",
    database: "myDB"
});

// check db connection
db.connect((err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("database conected");
    }
})

app.get('/api', (req, res) => {
    // console.log(req.query);

    res.send("API working")
})

//GET API
app.get('/get/Craftsman', (req, res) => {
    // sql query
    let sql = ` SELECT * FROM craftsman 
                `;

    // run query
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

app.get('/get/Craftsman/Review', (req, res) => {
    // sql query
    let sql = ` SELECT * FROM review
                WHERE id = '${req.body.id}'
                `;

    // run query
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

app.get('/get/Craftsman/Star' , (req,res) => {
     // sql query
     let sql = ` SELECT SUM(star) FROM review
                 WHERE id = '${req.body.id}'
                 `;

                  // run query
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

app.get('/get/Craftsman/BookingsRequest', (req,res) => {
    // sql query
    let sql = ` SELECT * FROM booking_request
                WHERE id = '${req.body.id}'
                `;

                 // run query
   db.query(sql, (err, result) => {
       if (err) throw err;
       res.send(result);
   })
})

app.get('/get/Craftsman/Bookings' , (req,res) => {
    // sql query
    let sql = ` SELECT * FROM booking
                WHERE id = '${req.body.id}'
                `;

    // run query
    db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
    })
})