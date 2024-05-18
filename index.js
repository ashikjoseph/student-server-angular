// import json-server
const jsonServer = require('json-server')

// create json server
const studentServer = jsonServer.create()

// define path to json file, where data need to be stored
const router = jsonServer.router('db.json')

const middleware = jsonServer.defaults();
studentServer.use(middleware)
studentServer.use(router)

const PORT = 3000;
studentServer.listen(PORT,()=>{
    console.log("Student Server is running in port: ", PORT)
})