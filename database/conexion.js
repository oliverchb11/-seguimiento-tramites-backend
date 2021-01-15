// const oracledb = require('oracledb');
// oracledb.initOracleClient({ configDir: 'C:\ORACLE\instantclient_19_6' });


const cns = {
    user: "autogestion",
    password: "control1",
    connectString: "(DESCRIPTION=(LOAD_BALANCE=on)(ADDRESS=(PROTOCOL=TCP)(HOST=scan-corant.corantioquia.local) (PORT=1521))(CONNECT_DATA=(SERVICE_NAME=bdpru)))",
}



// async function open(sql, binds, autoCommit) {
//     let cnn = await oracledb.getConnection(cns);
//     let result = await cnn.execute(sql, binds, { autoCommit });
//     cnn.release();
//     return result;
// }

module.exports = cns;