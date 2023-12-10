const Client = require('../models/Client');
const Address = require('../models/Address');

module.exports = {
    async index(req, res) {
        const { client_id } = req.params;

        const client = await Client.findByPk(client_id, {
            include: { association: 'address' }
        });

        if (!client) {
            return res.status(400).send({
                status: 0,
                message: 'Produtos não encontrado!'
            });
        }

        return res.status(200).send(client);
    },

    async store(req, res) {

        try {

            const { client_id } = req.params;
            const { street, number, district, city } = req.body;

            const client = await Client.findByPk(client_id);

            if (!client) {
                return res.status(400).json({
                    status: 0,
                    message: 'Usuário não encontrado!'
                });
            }

            const address = await Address.create({
                street,
                number,
                district,
                city,
                client_id,
            });

            return res.status(200).json({
                status: 1,
                message: "Address cadastrado com sucesso!",
                address
            });

        } catch (err) {
            return res.status(400).json({ error: err });
        }
    },

    async delete(req, res) {
        const id = req.params.id;

        try {
            const address = await Address.findByPk(id);

            if (address) {
                await Address.destroy({ where: { id } });

                return res.status(200).json({
                    status: 1,
                    message: "Address apagado com sucesso!",
                });

            } else {
                return res.status(400).json({
                    status: 0,
                    message: 'Address não encontrado!'
                });
            }


        } catch (err) {
            return res.status(400).json({ error: err });
        }
    },

    async update(req, res) {
        const id = req.params.id;
        const { street, number, district, city } = req.body;

        try {
            const address = await Address.findByPk(id);

            if (address) {
                await Address.update({ street, number, district, city }, { where: { id } });

                return res.status(200).json({
                    status: 1,
                    message: "Address atualizado com sucesso!",
                });

            } else {
                return res.status(400).json({
                    status: 0,
                    message: 'Address não encontrado!'
                });
            }


        } catch (err) {
            return res.status(400).json({
                status: 0,
                message: 'Erro ao atualizar Address!'
            });
        }
    }
};