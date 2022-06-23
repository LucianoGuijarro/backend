const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.get('/:id', (req, res) => {
    res.json("estas pegando como un campeon")
});
app.listen(port, ()=>{
    console.log(`estamos escuchando el puerto ${port}`)
});