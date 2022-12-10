const express = require("express");
const app = express();
const cors = require("cors");
const orderBookController = require("./src/order-book/controller");
app.use(express.static(__dirname + '/public'));

app.use(express.json());
app.use(cors());
app.use("/order-book", orderBookController);

const PORT = 3000;
app.listen(process.env.PORT || 3000, () => console.log(`Lisening on port ${PORT}`));
