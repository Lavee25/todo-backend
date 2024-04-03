const express=require ('express');
const cors=require('cors');
const dotenv = require('dotenv').config();
const port=process.env.PORT;
require('./startup/db')();
const corsOptions={
   origin:'http://localhost:3000',
   methods:['GET,POST,DELETE']
}

const app=express();
app.use(cors(corsOptions));

app.use(express.json());


require('./startup/router')(app);




app.listen(port,()=>{
    console.log( `aap started on port ${port}`)
})
