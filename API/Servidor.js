const express = require('express');
const cors = require("cors");
const router = require("./router");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", router);

app.listen(8080, () => {
    console.log(`App listen on http://localhost:8080`);
})