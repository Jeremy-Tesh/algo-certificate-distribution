const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('HELLO WORL');
})
app.listen(3000, () => console.log("listening.."))

