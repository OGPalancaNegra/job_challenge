const express = require("express")
const app = express()

const { default: helmet } = require("helmet");
const cookieParser = require("cookie-parser");
const compression = require("compression")
require("dotenv").config()
const mySQL = require("mysql");
const cors = require("cors");
const db2 = require("./db")



app.use(express.json())
app.use(express.urlencoded({ extended: true }));
//app.use(helmet())
app.use(cookieParser())
app.use(cors())


app.get("/api/lista", async (req,res)=> {
    
    const sql = `select * from escola`

    try {
        db2.query(sql, (err,row)=>{
            if (err){
                console.log(`error in finding every ${tableName}`, err)
            } else {
                res.send(row)
            }
        })
    } catch (error){
        res.json({error:error})
    }  
})

app.put("/api/lista", async (req,res)=>{
        try {
    
            console.log(`recived request to update school`) 
    
            const anArray = req.body

           

    
            for (let i =0; i < anArray.length; i++){
                let el = anArray[i]
                    let sql = `update escola set funcionais=${el.funcionais}, disfuncionais=${el.disfuncionais} where id = ${el.id}`
                    db2.query(sql, (err,row)=>{
                        if (err) console.log(err)
                        if (anArray.length === i+1) {
                            res.json({success:`successfully update escola`})
                            console.log(`updated school data`)
                        } 
                    })
            }    
        } catch (error) {
            console.log("couldnt update user", error)
            res.json({error:"couldnt update user"})
        }
    })



app.use((err, req, res, next) => {
    console.log("running error middleware")
    const { statusCode = 500 } = err;
    
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.json({error:err})
    console.log(err)
})

app.listen(process.env.PORT, (err)=>{
    if (err){
        res.send(err)
        console.log(err)
    }
    console.log(`listening to requests on ${process.env.PORT}`)
})
