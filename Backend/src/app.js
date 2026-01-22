const express = require("express");
const aiRoutes = require("./routes/ai.routes")
const cors = require('cors');

const app = express();

app.use(express.json());
// Middleware me use karna
app.use(cors());

app.get("/", (req, res)=>{
    res.send("hello dosto")
})

app.use("/ai", aiRoutes)


module.exports = app;



//AIzaSyAwLdo0fTZXyx1bvfbc_4fQ3duJvyIbIYU