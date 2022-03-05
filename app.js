const express = require("express");
const app = express();

app.use(express.static("public"));

const fs = require("fs");
const nav = fs.readFileSync("./public/components/navbar.html").toString();

const home = fs.readFileSync("./public/pages/home/home.html").toString();
const javascript = fs
	.readFileSync("./public/pages/javascript/javascript.html")
	.toString();
const node = fs.readFileSync("./public/pages/node/node.html").toString();
const exp = fs.readFileSync("./public/pages/express/express.html").toString();

const homePage =
	nav
		.replace("%%DOCUMENT_TITLE%%", "Home page")
		.replace("%%CSS_LINK%%", "style") + home;

const javascriptPage =
	nav
		.replace("%%DOCUMENT_TITLE%%", "Javascript")
		.replace("%%CSS_LINK%%", "style") + javascript;
const nodejsPage =
	nav
		.replace("%%DOCUMENT_TITLE%%", "Node js")
		.replace("%%CSS_LINK%%", "style") + node;

const expressPage =
	nav
		.replace("%%DOCUMENT_TITLE%%", "Express js")
		.replace("%%CSS_LINK%%", "style") + exp;

//const nodejsPage = nav.replace("%%DOCUMENT_TITLE%%", "Node js") + node;

app.get("/", (req, res) => {
	res.send(homePage);
});

app.get("/javascript", (req, res) => {
	res.send(javascriptPage);
});

app.get("/node", (req, res) => {
	res.send(nodejsPage);
});

app.get("/express", (req, res) => {
	res.send(expressPage);
});

app.listen(3000, () => console.log("Server is running on", 3000));
