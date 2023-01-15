//https://youtu.be/N-HYF8-51tc?t=115

const express = require("express");
const path    = require("path");

const app     = express();

//setting static folder
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));


//routing
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

//running
app.listen(process.env.PORT || 8000, () => console.log("Server on port 8000"));


