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
            //console.log("banquetSubmit req:", req.body);
            return res.redirect(`/banquets/banquetSuccess?name=${req.body.name}`);
            //res.send(true);
            //res.status(200).end();
            /*res.send(`
            <html>
                <p> Thank you, we will be contacting you soon! Please click the link to continue. </p>
                <a href= "/banquets/booking"> Continue... </a>
            </html>
            `);*/
            //console.log(response);
        });

    } catch (e) {
        res.send(`
        <html>
        <p> Sorry, your request could not be processed at this time, please call us instead? </p>
        </html>
        `);
    }
});

module.exports = router;