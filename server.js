const express = require('express');
const mongoose = require('mongoose');
const app = express();

const url = "mongodb+srv://kelvins213:database@cluster0.aaknyyf.mongodb.net/?retryWrites=true&w=majority";

async function connectMongoDB(){
    try{
        mongoose.connect(url);
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.error(error);
    }
}
connectMongoDB();

app.listen(8000, () => {
    console.log("Server started on port 8000");
});

