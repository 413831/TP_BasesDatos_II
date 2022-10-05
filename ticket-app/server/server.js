const express = require("express");
const app = express();
mongodb = require("mongodb");
cliente = mongodb.MongoClient; //En cliente ya tenemos nuestro acceso a la BD.

const uri = "mongodb+srv://bddosutn:admin123@cluster0.bbrw0lt.mongodb.net/?retryWrites=true&w=majority"

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

    let tickets = client.db('base_datos_II').collection("usuarios");
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

        // data = getAll(tickets) 
        ,err => { if(err) console.log(err) }
    });
        //res.json(result); //No puedo tener 2 respuestas.

    app.get("/tickets/:id", (req, res) => {
        console.log(req);
        res.json(get(tickets, req.params.id))
        , err => {
            if(err){
                console.log(err);

            }
            res.json(datos);
    }})
        //res.json({rta: "Hola"}); //No puedo tener 2 respuestas.


    app.get("/usuarios/agregar", (req, res) => {
        //let usu = JSON.parse(req.params.usuario);
        let usu = usuarios.insert({usuario: "pepe", email: "pepe@pepe.com", clave: "123", foto: "miFoto.jpg"});
        res.json(usu);
    });

    app.get("/usuarios/listar/:nombre", (req, res) => {
        let arrayUsu = [];
        let nombre = req.params.nombre;
        usuarios.find({usuario: nombre}).forEach(item => {
            arrayUsu.push(item);
        }, err => {
            if(err){
                console.log(err);
            }
            res.json(arrayUsu);
        })
    });

    app.get("/listado/:persona/:apellido", (req, res) => {
        console.log(req.params.persona, req.params.apellido);
        res.json({rta: "Hola"});
    });

    /*app.post("/", (req, res) => {
        res.json({rta: "Hola"});
    });*/

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
