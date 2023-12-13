const express = require("express");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 5000;

app.set("view engine", "ejs");


// serve the public folder as static files
app.use(express.static("public"));

// render the ejs file
app.get ("/", async (req, res) => {

    const API_URL = "https://secrets-api.appbrewery.com/random";
    try {
        const result = await axios.get(API_URL);
        res.render("index.ejs", {
          secret: result.data.secret,
          user: result.data.username,
        });
    }catch (error) {
        console.log(error.message);
        res.status(500)
    }
})

// starting the server and listen on port 5000
app.listen(port, () => {
    console.log("server running on port 5000");
});