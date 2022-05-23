const express = require("express");

const app = express();
const PORT = 900;

app.set("view engine", "hbs");

app.use("/public", express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/project", (req, res) => {
  res.render("project");
});

app.post("/contact", (req, res) => {
  const data = req.body;
  console.log(data);

  res.redirect("/contact");
});

app.post("/project", (req, res) => {
  const data = req.body;
  console.log(data);

  res.redirect("/project");
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});