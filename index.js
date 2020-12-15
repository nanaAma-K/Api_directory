const express = require ('express')
const app = express()
const port = 3005
const adminRouter = require ('./controllers/admin')
const authorRouter = require ('./controllers/author')
const bookRouter = require ('./controllers/book')


app.use(express.json())


app.use('/admin', adminRouter)
app.use('/author', authorRouter)
app.use('/books', bookRouter)

app.listen(port, ()=>{
    console.log(`server is listening at ${port}`)
})