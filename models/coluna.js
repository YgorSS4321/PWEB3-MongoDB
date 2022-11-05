const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } };
const ColunasSchema = new Schema({
        titulo: { type: String, required: true },
        descricao: { type: String, required: true },
        columnName: { type: String, required: true },
        id: { type: String, required: true }
    },
    opts
);

//necessita descobrir a "url"
ColunasSchema.virtual("url").get(function () {
    return `/PATH_DO_ARQUIVO_PUB/${this._id}`;
    
});

//Forçando que o nome da coleção seja utilizado em português (ao invés de inglês no plural)
module.exports = mongoose.model("tabelaToDo", ColunasSchema, "tabelaToDo");