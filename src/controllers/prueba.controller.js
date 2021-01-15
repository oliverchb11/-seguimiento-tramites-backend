const { response, request } = require('express');
const BD = require('../../database/conexion');
const oracledb = require('oracledb');
const { outFormat } = require('oracledb');
const controllerPrueba = {};

controllerPrueba.get = async(req = request, res = response) => {
    // "use strict";

    oracledb.getConnection(BD, function(err, connection) {
        if (err) {
            res.set('Content-Type', 'application/json');
            res.status(500).send(JSON.stringify({
                status: 500,
                message: "Error connecting to db",
                detailed_message: err.message
            }));

            return;
        }

        connection.execute("SELECT * FROM sirena.TS_AUTOGESTION_SEGMTO", {}, {
            outFormat: oracledb.OBJECT
        }, function(err, result) {
            if (err) {
                res.set('Content-Type', 'application/json');
                res.status(500).send(JSON.stringify({
                    status: 500,
                    message: "Error getting the table",
                    detailed_message: err.message
                }));
            } else {
                res.header("Access-Control-Allow-Origin", '*');
                res.header('Access-Control-Allow-Headers', 'Content-Type');
                res.header('Access-Control-Allow-Methods', 'GET,PUT,DELETE,OPTIONS');
                res.contentType('application/json').status(200);
                res.send(JSON.stringify(result.rows));
            }

            connection.release(
                function(err) {
                    if (err) {
                        console.error(err.message);
                    } else {
                        console.log("GET /sendTablespace : Connection released")
                    }
                }
            )
        })
    })



}

module.exports = controllerPrueba;