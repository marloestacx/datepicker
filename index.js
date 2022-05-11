const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));

var options = {
  weekday: "long",
  month: "long",
  day: "numeric",
};

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/train", (req, res) => {
  let days = [];
  let today = new Date();
  //add today to array
  days.push(today.toLocaleDateString("nl-NL", options));

  //add next 6 days to array
  for (let i = 0; i < 6; i++) {
    today.setDate(today.getDate() + 1);
    days.push(today.toLocaleDateString("nl-NL", options));
  }

  res.render("train", { data: days });
});

app.get("/trainwork", (req, res) => {
  let days = [];
  let today = new Date();
  //add today to array
  days.push(today.toLocaleDateString("nl-NL", options));

  //add next 6 days to array
  for (let i = 0; i < 6; i++) {
    today.setDate(today.getDate() + 1);
    days.push(today.toLocaleDateString("nl-NL", options));
  }

  res.render("trainwork", { data: days });
});

app.post("/", function (req, res) {
  res.redirect("/end");
});

app.get("/books", (req, res) => {
  fetch(
    `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=hHR4mCPrMJnc51g8FJCnHpZe6JDauoI9`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results.books);

      res.render("books", { books: data });
    });
});

// send page
app.get("/end", (req, res) => {
  res.render("end");
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
