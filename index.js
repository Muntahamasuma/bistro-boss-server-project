const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 3000;
// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req ,res ) =>{
    res.send('boss is sitting')
})

app.listen(port, () =>{
    console.log(`bistro boss is sitting on port ${port}`)
})