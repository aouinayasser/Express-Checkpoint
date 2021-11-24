const express = require ('express')
const app = express()
const port = 4000
const path=require('path')
const date = new Date()


// middelware
const log =(req,res,next)=> {
    if (date.getDay() != 0 && date.getDay() != 6 && date.getHours() < 17 && date.getHours() >= 9) {
        next()
    }
    else {
        res.sendFile(path.join(__dirname,'Main/404.html'))
    }
}



app.use(log)
app.use(express.static('Main'))
app.listen(port,()=>console.log(`server running on port ${port}`))
