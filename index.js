//Import modules
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

// Create an express app and set the port number.
// Set the API URL
const app = express();
const port = 3000;
const API_URL = "https://v2.jokeapi.dev/joke/Any?type=twopart";

// Use the public folder for static files and body-parser middleware.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL);
        res.render("index.ejs", {
            setup: result.data.setup,
            punchline: result.data.delivery
        });
    } catch (error) {
       res.status(500).send("Error");
    }
})

app.get("/random", async (req, res) => {
    try {
        const result = await axios.get(API_URL);
        res.render("index.ejs", {
            setup: result.data.setup,
            punchline: result.data.delivery
        });
    } catch (error) {
       res.status(500).send("Error");
    }
})

app.get("/programming", async (req, res) => {
    try {
        const API_URL = "https://v2.jokeapi.dev/joke/Programming?type=twopart";
        const result = await axios.get(API_URL);
        res.render("index.ejs", {
            setup: result.data.setup,
            punchline: result.data.delivery
        });
    } catch (error) {
       res.status(500).send("Error");
    }
})

app.get("/dark", async (req, res) => {
    try {
        const API_URL = "https://v2.jokeapi.dev/joke/Dark?type=twopart";
        const result = await axios.get(API_URL);
        res.render("index.ejs", {
            setup: result.data.setup,
            punchline: result.data.delivery
        });
    } catch (error) {
       res.status(500).send("Error");
    }
})

app.get("/pun", async (req, res) => {
    try {
        const API_URL = "https://v2.jokeapi.dev/joke/Pun?type=twopart";
        const result = await axios.get(API_URL);
        res.render("index.ejs", {
            setup: result.data.setup,
            punchline: result.data.delivery
        });
    } catch (error) {
       res.status(500).send("Error");
    }
})



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
