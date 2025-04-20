const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/api/*", async (req, res) => {
    const targetUrl = req.originalUrl.replace("/api/", "");

    try {
        const response = await axios.get(targetUrl);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error when retrieving the data." });
    }
});

app.listen(port, () => {
    console.log(`CORS Proxy runs on http://localhost:${port}`);
});