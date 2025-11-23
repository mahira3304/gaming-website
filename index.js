const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set('view engine','ejs')
app.set('views','views')

const navbar=require('./routers/navbar')
app.use('/navbar',navbar)

const home=require('./routers/home')
app.use('/',home)

const about=require('./routers/about')
app.use('/',about)

const gameRoute = require('./routers/games') 
app.use('/games',gameRoute)

app.listen(3000,()=>{
    console.log('started..')
})

