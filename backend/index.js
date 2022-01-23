
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/route')
const DB_URI = process.env.MONGO_URI || "mongodb://localhost:27017/employeesdb";


const app = express();

app.use(express.json());
app.use('/',router);

const port = 5000;
mongoose.connect(DB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
   
})
.then(()=> app.listen(port,()=>{
    console.log(`Server listening ${port}`);
}))
.catch()


