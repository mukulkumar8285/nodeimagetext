//flipcart
// console.log("mukul");
const cheerio = require("cheerio");
const axios = require("axios");
const xlsx = require("xlsx");
const fs = require("fs");
const express = require("express");

const url = "https://api.api-ninjas.com/v1/dadjokes";
// const headers={
//     "content-type":"text/html",
// }
const ExpressData = express();
const PORT = 4000;

ExpressData.get("/Jokeimage", async (req, res) => {
  try {
    const response = await axios.get(url, {
      headers: {
        "X-Api-Key": "iaWr4QmLKGqWL16AscLLcg==8rCWmO3xTnMBRpMz",
      },
    });
    console.log(response);
    res.status(200).send(response.data);
  } catch (err) {
    console.log("ERROR_OCCURED" + err);
   res.status(500).send("Internal Server Error");
  }
});

ExpressData.get('/' , (req , res)=>{
    res.send("The Data Is available {/Jokeimage}")
})
ExpressData.listen(PORT, () => {
  console.log(`the server is runing in this ${PORT}`);
});
// ExpressData(url);
