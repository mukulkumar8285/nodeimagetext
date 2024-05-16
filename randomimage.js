const express = require("express");
const axios = require('axios');

const app = express();
const PORT = 4000;

app.get('/', async (req, res) => {
    try {
        const response = await axios.get("https://dog.ceo/api/breeds/image/random");
        const imageUrl = response.data.message; 
        res.json({ imageUrl }); 
    } catch (error) {
        console.error('Error fetching image:', error);
        res.status(500).send('Error fetching image');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
