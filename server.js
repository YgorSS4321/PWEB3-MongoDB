//estudar toas router.post | router.get

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://kelvins213:database@cluster0.aaknyyf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const toDoListSchema = require('./schemas/schema');

client.connect( async (err) => {
  //const collection = client.db("todolist").collection("tasks");
  const collection = client.db("todolist");
  await insertData();
  console.log("Connected to Database!");
  client.close();
});

/*
recuperando os dados do banco
exports.list = async (req, res) => {
    await toDoListSchema.find({}).exec( function (err, docs){
        res.render();
    });
}
*/

async function insertData(){
    const taskInformation = {
        columnTitle: task,
        task: "oi",
        description: "oi",
    };
    await new toDoListSchema(taskInformation).save();
}

/*
const mongoClient = require("mongodb").MongoClient;
const url = "mongodb://kelvins213:database@cluster0localhost:27017";
mongoClient.connect(url,
    (error, connection) => {
        if(error) return console.log(error);
        global.connection = connection.db("todolist");
        console.log("Connected to MongoDB");
    });

*/

/*
const express = require('express');
const {MongoClient} = require("mongodb");
const mongoose = require('mongoose');
const app = express();
const toDoListSchema = require('./schemas/schema');

const url = "mongodb+srv://kelvins213:database@cluster0.aaknyyf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

async function connectMongoDB(task){
    try{
        await client.connect();
        const taskInformation = {
            columnTitle: task,
            task: task,
            description: task,
        };
        await new toDoListSchema(taskInformation).save();
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.error(error);
    } finally { //pay attencion here
        client.close();
    }
}

async function setToDoListTask(task){
    //error: must be connected to a client
    //you must do the part of MongoClient stuff
    console.log("i'm running too, asshole!");
    const taskInformation = {
        columnTitle: task,
        task: task,
        description: task,
    };
    await new toDoListSchema(taskInformation).save();
}

app.listen(8000, () => {
    console.log("Server started on port 8000");
});

async function configDatabase(){
    await connectMongoDB("Choose my president");
    //await setToDoListTask("Choose my president");
}
configDatabase();
*/
