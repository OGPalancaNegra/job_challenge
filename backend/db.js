const mySQL = require("mysql")


const db2 = mySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MySQL_PASS,
    database: "lbc",
    multipleStatements: true
})

db2.connect((err)=>{
    if (err){
        console.log(err)
/*         throw err
 */    } else {
        console.log("connected to db")
    }
})

module.exports = db2