const express = require("express");
const app = express();

app.use(express.json());

const port = process.env.PORT || 9000;

// GET /chain
app.get(
  "/chain",
  (req, res, next) => {
    //   res.send("hello world");
    console.log("First Callback");
    next();
  },
  (req, res, next) => {
    console.log("Second Callback");
    next();
  },
  (req, res) => {
    console.log("Third Callback");
    res.send("hello world");
  }
);

// MIDDLEWARE

function myLogger(req, res, next) {
  console.log("Logged");
  next();
}

app.use(myLogger);

// app.use((req, res, next) => {
//   console.log("Middleware");
//   req.middleware = "Alemantrix";
//   console.log("Request Time", new Date());
//   next();
// });

// GET /
app.get("/", (req, res) => {
  res.send("something something " + req.middleware);
});

app.listen(port, () => {
  console.log("The Sever is up and runnon port", port);
});
