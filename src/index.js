const express = require('express');
const app = express()
require('dotenv').config()
const morgan = require('morgan');
const { Open } = require('../database/conexion')

//settings
app.set('port', process.env.PORT || 3000);

//database



//server
const port = app.get('port');
app.listen(port, () => {
    console.log(`Servidor en el puerto ${port}`);
})