import express, { json } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
const app = express();
import 'dotenv/config'
const User = require('./models/User')



app.use(express.json())

app.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
}))


mongoose.connect(process.env.CONNECTION_MONGO)

app.get('/test',(req,res)=>{
    res.json("test linking here")
})

app.post('/register',(req,res)=>{
    const {name, email, password} = req.body;
    User.create({
        name,
        email,
        password:password,
    })
    res.json({name,email,password})
})

app.listen(4000)