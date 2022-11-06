var express = require("express");
app = express();

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html")
})
app.get("/style.css", function(req,res){
    res.sendFile(__dirname + "/style.css")
})
app.get("/script.js", function(req,res){
    res.sendFile(__dirname + "/script.js")
})

app.get("/classeToDo.js", function(req,res){
    res.sendFile(__dirname + "/classeToDo.js")
})

app.get("/img/onlyList_logo.png", function(req,res){
    res.sendFile(__dirname + "/img/onlyList_logo.png")
})


app.listen(3000, () => {
    console.log('executando...');
});

