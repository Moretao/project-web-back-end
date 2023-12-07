const User = require('../models/Client');

module.exports = {

    // metodo de busca
    async index(req, res) {
        const clients = await Client.findAll();

        if (clients == "" || clients == null) {
            return res.status(200).send({ message: "Nenhum cliente cadastrado" });

        }

        return res.status(200).send({ clients });

    },


    // metodo para salvar
    async store(req, res) {


    },

    async update(req, res) {


    },

    async delete(req, res) {


    },

};
