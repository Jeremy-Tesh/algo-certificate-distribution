const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users');
const optinRouter =require('./routes/optin')

require('dotenv').config();

const app = express();




app.use(express.json());
app.use(cors())




app.use('/users', usersRouter)
app.use('/optin',optinRouter)











const students =[
    {id:1,name:"ermi"},{id:2,name:"edi"},{id:3,name:"yab"}
]


const uri = process.env.ATLAS_URI;


mongoose.connect(uri)
const connection = mongoose.connection;
connection.once('open',() =>{
    console.log("mongo DB successfully established")
})



app.get('/',(req,res)=>{
    res.send('HELLO WORL');
})
app.get('/students',(req,res)=>{
    res.send(students)
})
app.get('/students/:id',(req,res)=>{
    const student= students.find(c=>c.id===parseInt(req.params.id))
    if(!student) res.status(404)
    res.send(student)

})

app.post('/students',(req,res)=>{
    const schema = Joi.object({
        name:Joi.string().min(3).required()
    })
    const result = schema.validate(req.body)
    console.log(result)
   
    if(result.error){
    res.status(400).send(result.error.details[0].message)
    return
    }
    const student = {
        id:students.length + 1,
        name: req.body.name
    }

    students.push(student);
    res.send(student)
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening to port:${port}`))

