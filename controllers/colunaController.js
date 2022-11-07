const ObjectId = require('mongoose').Types.ObjectId;
const Coluna = require('../models/coluna');

exports.list = async (req, res) => {
    await Coluna.find({}).exec(function(err, docs) {
        res.render("PATH_DO_INDEX_QUE_FICA_DENTRO_DO_VIEW/index", { animais : docs, msg : res.msg});
      //o último parâmetro se refere as variaveis que serão mandadas para o PATH/index na hora de renderiza-lo
    });
}

exports.show = (req, res) => {
    res.send(`NÃO IMPLEMENTADO: ${req.params.id}`);
}

exports.create = (req, res) => {
    if (req.method == "POST") {
        const colDocument = new Coluna({
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            columnName: req.body.columnName,
            id: req.body.id,
        });
        colDocument
            .save()
            .then(result => {
                res.render("animais/create", { msg: 'Animal cadastrado com sucesso.' });
              //atualizar string de path "animais/create"
            })
            .catch(err => {
                res.status(500).json({ error: err });
            });
    } else {
        res.render('animais/create');
        //atualizar string de path "animais/create"
    }
}

exports.update = async (req, res) => {
    if(req.method == "POST"){
        const filter = { _id: new ObjectId(req.body.id) };
        console.log(filter);
        const update = {
          titulo: { type: String, required: true },
          descricao: { type: String, required: true },
          columnName: { type: String, required: true },
          id: { type: String, required: true }
        };
        console.log(update);
        await Coluna.findOneAndUpdate(filter, update).then(function (err, result) {
            console.log(req.body.nome);
            msg = "Coluna atualizada com sucesso!";
            res.msg = msg;
            exports.list(req, res);
        });
    } else {
        await Coluna.findOne({ _id : new ObjectId(req.params.animalId)}).then(function (result) {
            //console.log(result);
            res.render(`animais/update`, { doc : result });
            //atualizar PATH "animais/update"
        })
        
    }

}

exports.delete = async (req, res) => {
    var msg;
    await Coluna.findOneAndDelete({ _id: new ObjectId(req.params.animalId) }).then(function (err, data) {
        msg = "Coluna excluído com sucesso!";
        res.msg = msg;
        exports.list(req, res);
    });
}