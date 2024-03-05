const express = require('express');
const mysql = require('mysql');
const cors=require('cors');
const dotenv=require('dotenv');
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.listen(process.env.PORT,()=>console.log('app is running'));

//read
app.get('/get_info',(req,res)=>{
    console.log('test');
})