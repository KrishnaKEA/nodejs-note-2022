
// importing express
const express = require("express");
// initializing express
const app = express();
// mentioning the static pages to express so that the server can accesss the files.
app.use(express.static("public"));
// importing file system module 
const fs = require("fs");

// reading the files from html pages and converting to the string 
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

// Get route for home page
app.get("/", (req, res) => {
	res.send(homePage);
});
// Get route for javascript page
app.get("/javascript", (req, res) => {
	res.send(javascriptPage);
});
// Get route to nodjspage
app.get("/node", (req, res) => {
	res.send(nodejsPage);
});
// get route to express page 
app.get("/express", (req, res) => {
	res.send(expressPage);
});

// assigning port and fall back port 3000
const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log("Server is running on", PORT));
