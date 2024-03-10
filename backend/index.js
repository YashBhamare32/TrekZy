const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/restaurants/list',
    params: {
      query: 'eiffel tower',
      lang: 'en_US',
      units: 'km'
    },
    headers: {
      'X-RapidAPI-Key': '7d061289a7msh20b950ecefa532bp1a0884jsn33af8ba4bb44',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };
app.get("/" , async(req,res)=>{
    try {
        const response = await axios.request(options);
        console.log(response.data);
        return res.json({
            location:"Done"
        })
    } catch (error) {
        console.error(error);
        return res.json({
            error:"Internal server Error"
        })
    }
})

app.listen(3000 , ()=>{
    console.log("Expample app listening on port 3000");
})