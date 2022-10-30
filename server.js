const express = require('express');
const {MongoClient} = require("mongodb");
const mongoose = require('mongoose');
const { config } = require('process');
const app = express();
const toDoListSchema = require('./schemas/schema');

const url = "mongodb+srv://kelvins213:database@cluster0.aaknyyf.mongodb.net/?retryWrites=true&w=majority";
const uri = "mongodb://localhost:27017";

async function connectMongoDB(){
    const client = new MongoClient(uri);
    console.log("i'm running bitch!");
    try{
        await mongoose.connect(url);
        //const db = mongoose.connection; //o atributo .connection do objeto mongoose retorna o banco de dados que você conectou
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.error(error);
    } finally {
        mongoose.connection.close();
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
    await connectMongoDB();
    await setToDoListTask();
}
configDatabase();









