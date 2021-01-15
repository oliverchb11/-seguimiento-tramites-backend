/*
path: '/api/v1/seguimiento-tramites-autogestion/corantioquia';
*/
const { Router } = require('express');
const router = Router();
const controllerPrueba = require('../controllers/prueba.controller');
router.get('/', controllerPrueba.get);


module.exports = router;