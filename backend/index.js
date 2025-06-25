const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
app.use(cors());
app.use(express.json())
app.get("/", (req, res) => {
    res.send("Bizpilot")
})
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})