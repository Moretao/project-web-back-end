const Client = require('../models/Client');

module.exports = {

    // método de busca
    async index(req, res) {
        const clients = await Client.findAll();

        if (clients == "" || clients == null) {
            return res.status(200).send({ message: "Nenhum cliente cadastrado" });
        }

        return res.status(200).send({ clients });
    },


    // método para salvar
    async store(req, res) {
        const { name, password, email } = req.body;

        try {
            const client = await Client.create({ name, password, email });

            return res.status(200).send({
                status: 1,
                message: 'Cliente cadastrado com sucesso.',
                client
            });
        } catch (error) {
            console.error('Erro ao cadastrar cliente:', error);
            return res.status(500).send({
                status: 0,
                message: 'Erro ao cadastrar cliente.'
            });
        }

    },

    async update(req, res) {

        const { name, password, email } = req.body;

        const { client_id } = req.params;

        await Client.update({
            name, password, email
        }, {
            where: {
                id: client_id
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Cliente atualizado com sucesso.",
        });

    },

    async delete(req, res) {

        const { client_id } = req.params;

        await Client.destroy({
            where: {
                id: client_id
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Cliente deletado com sucesso.",
        });

    }

};