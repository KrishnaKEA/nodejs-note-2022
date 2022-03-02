const express = require("express");
const app = express();

app.use(express.static("public"));

const fs = require("fs");

//const nav = fs.readFileSync("./public/components/nav.html").toString();
//const footer = fs.readFileSync("./public/components/footer.html").toString();

const javascript = fs
	.readFileSync("./public/pages/javascript/javascript.html")
	.toString();
const node = fs.readFileSync("./public/pages/node/node.html").toString();

//const frontpagePage = nav.replace("%%DOCUMENT_TITLE%%", "Welcome to the cheese zone") + frontpage + footer;
//const cheesegalleryPage = nav.replace("%%DOCUMENT_TITLE%%", "You are in the cheese zone") + cheesegallery + footer;

app.get("/javascript", (req, res) => {
	res.send(javascript);
});

app.get("/node", (req, res) => {
	res.send(node);
});

app.listen(3000, () => console.log("Server is running on", 3000));
