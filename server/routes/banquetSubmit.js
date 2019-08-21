const express = require("express");
const router = express.Router();
const request = require("request");
const bodyParser = require("body-parser");



const jsonParser = bodyParser.json();

//POST for the inquiry form on banquets.
router.post("/", jsonParser, (req, res) => {

    console.log(req.body);

    try {
        console.log("sending request...");
        request.post("http://67.205.162.241:1984/inquiry", { json: req.body }, (err, response, body) => {
            //console.log(response);
            //send the response from the url above back.
            res.send(response.statusCode);
        });

    } catch (e) {
        res.send(e);
    }
});

module.exports = router;