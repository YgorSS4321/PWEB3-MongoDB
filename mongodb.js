
var express = require('express');
var app = express(); //atribuindo o construtor do objeto express à variável app

var mongoClient = require('mongodb').MongoClient;
mongoClient.connect('mongodb+srv://kelvins213:3578951lord@cluster0.aaknyyf.mongodb.net/?retryWrites=true&w=majority', {useUnifiedTopology: true}).then(
    (error, client) => {
        let db = client.db('pweb');
        db.collection('animals').find().toArray( (error, result) => {console.log(result)} );
    }
);
//npm é op gerenciador de pacotes do node 
//npm i express => naixa o pacote express no diretório atual

// a '/' pega o localhost e a porta correspondente, nesse caso, 3000
app.get('/', 
    function(req, res){
        res.send('Hello bitches');
    }
);

app.listen(3000,
    function(){
        console.log('Node express running')
    }
);