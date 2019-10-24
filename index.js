const express = require ('express')
const app =express()
const port = process.env.Port || 8000

app.set('view engine','ejs')
app.use(express.static('public'))


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