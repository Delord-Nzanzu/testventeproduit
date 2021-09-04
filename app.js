require("dotenv").config();
require("./moddolware");
const express = require("express");
const cors = require("cors");
const router = require("./router");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/commande", router.commande);
app.use("/article", router.article);



app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
