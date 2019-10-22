/*
	File: mailer.js
	Auth: Jesse Parnell
	Desc: Handles mailing of inquiries.
*/

const nodemailer = require("nodemailer");
const Promise = require("promise");
const fs = require("fs");
const env = "./pass.env"; //path to the env file.

//load up the env password to link gmail.
const load = (path) => {
	console.log("loading password");
	let dfd = new Promise((resolve, reject) => {

		fs.readFile(path, {encoding: "utf-8"}, (err, pass) => {
			if(err) {
				throw err;
			}

			resolve(pass);
		});

	});
	

	return dfd;
};

//handles the actual mailing process...
const mailer = async (message) => {

	let pass = await load(env); //get the password...
	console.log("mailer pass:", pass);

	const transporter = nodemailer.createTransport({
		service: "Gmail",
		auth: {
			user: "bailys.ai.helper@gmail.com",
			pass: pass, //password from env.
		}
	});

	let mailOptions = {
		to: "jesse@baily.com",
		subject: "Baily.com Inquiry",
		text: message,
	};

	let result = undefined;
	await transporter.sendMail(mailOptions, (err, res) => {
		if(err) {
			result = err;
		} else {
			result = res.response;
			console.log("Message sent:", res.response);
		}
	});

	return result;
};

module.exports = mailer;