const express = require('express')
const app = express()
const port = 5000

app.get('/',(req, res) =>{
    res.send('안녕하세요')
})

//mongoose DB 커넥트
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://aquabello:!rhdudtjr12@clustertoday25.svn6d.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => {
    console.log('Mongoose Connedted...')
}).catch(
    err => console.log(err)
)

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://aquabello:!rhdudtjr12@clustertoday25.svn6d.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


app.listen(port, () => {
    console.log(`Example app Listening at port ${port}`)
})