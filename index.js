const express=require('express')
const app=express()
require('dotenv').config()
// const bodyparser=require('body-parser')

require('./Databases/db')
app.use(express.json())
app.use('',require('./routes/router'))

const Port=process.env.db_port||2021
app.listen(Port,()=>{
    console.log(`SERVER IS RUNNING AT PORT ${Port}`);
})
