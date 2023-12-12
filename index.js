const express = require("express");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 5000;
const API_URL = "";

// serve the public folder as static files
app.use(express.static("public"));

// render the ejs file
app.get ("/", async (req, res) => {
    try {
        const results = await axios.get("API_URL");
        res.render("index.ejs", {

        });
    }catch (error) {
        console.log(error.response.data);
        res.status(500)
    }
})

// starting the server and listen on port 5000
app.listen(port, () => {
    console.log("server running on port 5000");
});