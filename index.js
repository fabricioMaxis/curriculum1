const express = require ('express')
const app =express()

app.set('view engine','ejs')
app.use(express.static('public'))


app.get('/',(request,response) => {
        response.render('home')
})

app.listen(8000, (err) =>{
    if (err){
        console.log('Não foi possivel localizar o servidor')
    }else{
        console.log('Servidor rodando')
    }
})