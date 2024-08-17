const express = require("express");
require("dotenv").config();
const app = express();
const port = 8080;

app.use(express.json());

app.use("/", (req, res) => {
    res.send({ status: 200, message: "Module-10 Exercise 2 complete" });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
