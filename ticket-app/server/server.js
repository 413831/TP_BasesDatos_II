const express = require("express");
const app = express();
mongodb = require("mongodb");
cliente = mongodb.MongoClient; //En cliente ya tenemos nuestro acceso a la BD.

const uri = "mongodb+srv://bddosutn:-------@cluster0.bbrw0lt.mongodb.net/?retryWrites=true&w=majority"

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

cliente.connect(uri, (err, client) => 
{ 
    if(err) 
    {
        console.log("Error: ", err);
        return; 
    }
    // Instancia de Cliente de MongoDB
    //console.log(cliente); 
    
    app.use((req, res, next) => {
        console.log("middleware");
        next();
    }) 

    let tickets = client.db('TP_BD_II').collection("tickets");
    let clientes = client.db('TP_BD_II').collection("clientes");
    let empleados = client.db('TP_BD_II').collection("empleados");
    let equipos = client.db('TP_BD_II').collection("equipos");

    // TICKETS
    app.get("/tickets", (req, res) => { 
        tickets.find().toArray(function (err, result) {
            if (err) {
                res.send(err);
            } else {
    
                res.json(result);
            }
        })
        ,err => { if(err) console.log(err) }
    });
        //res.json(result); //No puedo tener 2 respuestas.

    app.get("/tickets/fix", (req, res) => {
        tickets.find({tags:{$in:["fix"]}}).toArray(function (err, result) {
            if (err) {
                res.send(err);
            } else {
    
                res.json(result);
            }
        })
        ,err => { if(err) console.log(err) }
    })

    app.get("/tickets/servicios", (req, res) => {
        tickets.find({area:{$eq:"Servicios"}}).toArray(function (err, result) {
            if (err) {
                res.send(err);
            } else {
    
                res.json(result);
            }
        })
        ,err => { if(err) console.log(err) }
    })

    app.get("/tickets/high_priority", (req, res) => {
        tickets.find({prority:{$lt:2}}).toArray(function (err, result) {
            if (err) {
                res.send(err);
            } else {
    
                res.json(result);
            }
        })
        ,err => { if(err) console.log(err) }
    })

    app.get("/tickets/high_priority_tech", (req, res) => {
        tickets.find({$and:[{prority:{$lt:2}},{current_area:"servicio_tecnico"}]}).toArray(function (err, result) {
            if (err) {
                res.send(err);
            } else {
    
                res.json(result);
            }
        })
        ,err => { if(err) console.log(err) }
    })

    app.get("/tickets/high_priority_views", (req, res) => {
        tickets.find({$and:[{prority:{$lt:2}},{view_counter:{$gt:10}}]}).toArray(function (err, result) {
            if (err) {
                res.send(err);
            } else {
    
                res.json(result);
            }
        })
        ,err => { if(err) console.log(err) }
    })

    app.get("/tickets/low_priority", (req, res) => {
        tickets.find({prority:{$gte:2}}).toArray(function (err, result) {
            if (err) {
                res.send(err);
            } else {
    
                res.json(result);
            }
        })
        ,err => { if(err) console.log(err) }
    })

    app.get("/usuarios/agregar", (req, res) => {
        //let usu = JSON.parse(req.params.usuario);
        let usu = usuarios.insert({usuario: "pepe", email: "pepe@pepe.com", clave: "123", foto: "miFoto.jpg"});
        res.json(usu);
    });

    app.listen(3000, () => {
        console.log("Servidor escuchando en puerto 3000");
    });
})

// Handler methods

function getAll(collection){
    let datos = [];

    collection.find().forEach( item => { datos.push(item) });
    console.log(datos);
    return datos;
}

function get(collection, filter){
    let datos = [];

    collection.find({filter}).forEach(item => { datos.push(item)});
    return datos;
}
