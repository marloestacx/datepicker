const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));

var options = {
  weekday: "long",
  month: "long",
  day: "numeric",
};

app.get("/", (req, res) => {
  let days = [];
  let today = new Date();
  //add today to array
  days.push(today.toLocaleDateString("nl-NL", options));

  //add next 6 days to array
  for (let i = 0; i < 6; i++) {
    today.setDate(today.getDate() + 1);
    days.push(today.toLocaleDateString("nl-NL", options));
  }

  res.render("index", { data: days });
});

app.post("/", function (req, res) {
  res.redirect("/end");
});

// send page
app.get("/end", (req, res) => {
  res.render("end");
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
