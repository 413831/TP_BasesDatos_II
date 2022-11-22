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

    let tickets = client.db('TP_BD_II').collection("tickets");
    let customers = client.db('TP_BD_II').collection("customers");
    let centers = client.db('TP_BD_II').collection("centers");
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
        tickets.find({current_area:{$eq:"servicio_tecnico"}}).toArray(function (err, result) {
            if (err) {
                res.send(err);
            } else {
    
                res.json(result);
            }
        })
        ,err => { if(err) console.log(err) }
    })

    app.get("/tickets/high_priority", (req, res) => {
        tickets.find({priority:{$lt:2}}).toArray(function (err, result) {
            if (err) {
                res.send(err);
            } else {
    
                res.json(result);
            }
        })
        ,err => { if(err) console.log(err) }
    })

    app.get("/tickets/high_priority_tech", (req, res) => {
        tickets.find({$and:[{priority:{$lt:2}},{current_area:"servicio_tecnico"}]}).toArray(function (err, result) {
            if (err) {
                res.send(err);
            } else {
    
                res.json(result);
            }
        })
        ,err => { if(err) console.log(err) }
    })

    app.get("/tickets/high_priority_views", (req, res) => {
        tickets.find({$and:[{priority:{$lt:2}},{view_counter:{$gt:10}}]}).toArray(function (err, result) {
            if (err) {
                res.send(err);
            } else {
    
                res.json(result);
            }
        })
        ,err => { if(err) console.log(err) }
    })

    app.get("/tickets/low_priority", (req, res) => {
        tickets.find({priority:{$gte:2}}).toArray(function (err, result) {
            if (err) {
                res.send(err);
            } else {
    
                res.json(result);
            }
        })
        ,err => { if(err) console.log(err) }
    })

    app.get("/tickets/valid_tickets", (req, res) => {
        tickets.find({state:{$ne:"discarded"}}).toArray(function (err, result) {
            if (err) {
                res.send(err);
            } else {
    
                res.json(result);
            }
        })
        ,err => { if(err) console.log(err) }
    })

    app.get("/tickets/closed_tickets", (req, res) => {
        tickets.find({$or:[{state:{$eq:"resolved"}},{state:{$eq:"discarded"}}]}).toArray(function (err, result) {
            if (err) {
                res.send(err);
            } else {
    
                res.json(result);
            }
        })
        ,err => { if(err) console.log(err) }
    })

    app.get("/tickets/active_tickets", (req, res) => {
        tickets.find({$nor:[{state:{$eq:"resolved"}},{state:{$eq:"discarded"}}]}).toArray(function (err, result) {
            if (err) {
                res.send(err);
            } else {
    
                res.json(result);
            }
        })
        ,err => { if(err) console.log(err) }
    })

    app.get("/tickets/non_tech_valid_tickets", (req, res) => {
        tickets.find({$and:[{current_area:{$not:{$eq:"servicio_tecnico"}}},{state:{$not:{$eq:"discarded"}}}]}).toArray(function (err, result) {
            if (err) {
                res.send(err);
            } else {
    
                res.json(result);
            }
        })
        ,err => { if(err) console.log(err) }
    })

    app.get("/tickets/tickets_by_customer", async (req, res) => {
        resp = []
        result = customers.aggregate([
            {
                $match:{ 
                    "selected_plan": "normal"
                }
            },
            {
                $lookup:
                {
                    from:"tickets",
                    localField:"personal_id",
                    foreignField:"customer.personal_id",
                    as:"ticket_list"
                }
            },
            {
                $project:
                {
                    name:1,
                    surname:1,
                    personal_id:1,
                    selected_plan:1,
                    "ticket_list.state":1,
                    "ticket_list.title":1,
                    "ticket_list.description":1
                }
            }
        ])         
        await result.forEach(ticket => {
            console.log(`${ticket}`);
            resp.push(ticket)
        })
        console.log(resp)
        res.json(resp)       
        ,err => { if(err) console.log(err) }
    })

    app.get("/tickets/tickets_equipo", (req, res) => {
        tickets.find({$text:{$search:"equipo"}}).toArray(function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        })
        ,err => { if(err) console.log(err) }
    })

    app.get("/customers/pack_normal", (req, res) => {
        result = customers.count({selected_plan:"normal"})
        res.json(result)
        ,err => { if(err) console.log(err) }
    });

    app.get("/customers/pack_superpack_avellaneda", async (req, res) => {
        resp = []
        result = customers.aggregate([ { $match: { "selected_plan": "super_pack", "contact_info.city_id": "AVELL" } }, 
                                    { $project: { "_id": 1, "name": 1, "surname": 1, "personal_id": 1, correo_electronico: "$contact_info.email" } }])         
        await result.forEach(customer => {
            console.log(`${customer._id}, ${customer.name}, ${customer.surname}, ${customer.personal_id}, ${customer.correo_electronico}`);
            resp.push({
                "_id": customer._id, 
                "name": customer.name, 
                "surname": customer.surname, 
                "personal_id": customer.personal_id, 
                "correo_electronico": customer.correo_electronico
            })
        });       
        console.log(resp)
        res.json(resp)
        ,err => { if(err) console.log(err) }
    });

    app.get("/customers/clientes_centro_pasteur", async (req, res) => {
        resp = []
        centerData = centers.aggregate([{ $match: {name:"Pasteur"}},{ $project:{"coverage_area":1}}])
        let type;
        let coordinates;
        let newCoordinates= [];

        await centerData.forEach(attribute => {
            console.log(`${attribute.coverage_area.type} : ${attribute.coverage_area.coordinates} `);
            type = attribute.coverage_area.type
            coordinates = attribute.coverage_area.coordinates
            console.log(coordinates)
        });   
        

        result = customers.find({ location: { $geoWithin: { $geometry: { type: "Polygon", coordinates: coordinates } } } }).toArray(function (err, result) {
            if (err) {
                res.send(err);
            } else {
                console.log(result)
                res.json(result);
            }
        })

        ,err => { if(err) console.log(err) }
    });

    app.get("/customers/on_demand", (req, res) => {
        result = customers.find({servicio_on_demand:{$exists:true}}).toArray(function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        })
        ,err => { if(err) console.log(err) }
    });


    app.get("/centers/more_than_40", (req, res) => {
        result = centers.find({staff_counter:{$gt:40}}).toArray(function (err, result) {
            if (err) {
                res.send(err);
            } else {
    
                res.json(result);
            }
        })
        ,err => { if(err) console.log(err) }
    });

    app.get("/centers/less_equal_than_30", (req, res) => {
        result = centers.find({staff_counter:{$lte:30}}).toArray(function (err, result) {
            if (err) {
                res.send(err);
            } else {
    
                res.json(result);
            }
        })
        ,err => { if(err) console.log(err) }
    });

    app.listen(3000, () => {
        console.log("Servidor escuchando en puerto 3000");
    });
})

