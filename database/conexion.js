const objoracle = require('oracledb');



const db_conn = {
    user: "autogestion",
    password: "control1",
    connectString: "(DESCRIPTION =(LOAD_BALANCE = on)(ADDRESS = (PROTOCOL = TCP)(HOST = scan - corant.corantioquia.local)(PORT = 1521))(CONNECT_DATA =(SERVICE_NAME = bdpru)))",
}



async function Open(sql, builds, autoCommit) {

    try {
        let conn = await objoracle.getConnection(db_conn);
        let results = await conn.execute(sql, builds, { autoCommit });
        conn.release();
        console.log('Base de datos conectada', conn);
        return results

    } catch (error) {
        console.log('Error al conectar la base de datos');
    }
}


module.exports = Open;