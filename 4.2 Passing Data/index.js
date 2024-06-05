import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

var n1="";
var n2="";
app.post("/submit", (req, res) => {
  const firstName = req.body["fName"];
  const lastName = req.body["lName"];
  const fullName = firstName + lastName;
  const len = fullName.length;
  const t = "Your Name has length = " + len;

  res.render("index.ejs", {
    Top: t,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
 