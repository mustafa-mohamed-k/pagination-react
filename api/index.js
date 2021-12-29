const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
const port = 5001;

const personRoutes = require('./routes/personRoutes');

app.use('/', personRoutes);

//start the server
app.listen(port, ()=>{
    console.log(`Persons app listening on port ${port}.`)
});