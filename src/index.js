const express = require('express');
const app = express()
require('dotenv').config()
const morgan = require('morgan');
const { Open } = require('../database/conexion')
const pruebaRouter = require('./routers/prueba.router');
//settings
app.set('port', process.env.PORT || 3000);


//middlewares

app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
//database


pathPrueba = "/api/v1/seguimiento-tramites-autogestion/corantioquia";

//routers
app.use(pathPrueba, pruebaRouter);

//server
const port = app.get('port');
app.listen(port, () => {
    console.log(`Servidor en el puerto ${port}`);
})