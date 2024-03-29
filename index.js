const express = require ('express')
const app =express()
const path = require('path')
const port = process.env.Port || 8000

app.set("views", path.join(__dirname, "views"))
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))


app.get('/',(request,response) => {
        response.render('home')
})

app.listen(port, (err) =>{
    if (err){
        console.log('Não foi possivel localizar o servidor')
    }else{
        console.log('Servidor rodando')
    }
})