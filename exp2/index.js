const express = require('express');
const app = express();
const PORT = 3500;
const test = require('./routes/products')

app.get("/",(req,res)=>{
    res.send("express running")
})

app.use('/test',test)
app.listen(PORT, console.log(`server is running in ${PORT}`))