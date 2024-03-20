const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
require('./config/db_mongo') 
const convertionRoutes = require('./routes/convertions.routes')


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res){
    res.send('API de gatitos');
});

app.use("/", convertionRoutes)

app.get("*", (req,res) => { 
    res.status(404).send("Gatito triste - 404 not found");
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

