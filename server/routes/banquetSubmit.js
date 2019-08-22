const express = require("express");
const router = express.Router();
const request = require("request");
//const bodyParser = require("body-parser");
//const mailer = require("../utils/mailer");



//const jsonParser = bodyParser.json();

router.get("/", (req, res) => {
    res.send("We will contact you soon!");
});

//POST for the inquiry form on banquets.
router.post("/", async (req, res) => {

    try {
        console.log("sending request...");
        let msg = {
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phone,
            message: `
                Inquiry Date: ${req.body.date}
                Inquiry Time: ${req.body.time}
                Message: ${req.body.details}
            `,
        }
        request.post("http://67.205.162.241:1984/inquiry", { json: msg }, (err, response, body) => {
            //console.log(response);
            res.send(`
            <html>
                <p> We will be contacting you soon! </p>
            </html>
            `);
        });

    } catch (e) {
        res.send(`
        <html>
            <p> Sorry, we could not process your request, maybe contact us by phone? </p>
        </html>
        `);
    }
});

module.exports = router;