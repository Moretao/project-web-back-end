const Client = require('../models/Client');
const Haircourt = require('../models/Haircourt');


module.exports = {
    async index(req, res) {
        const { client_id } = req.params;

        const client = await Client.findByPk(client_id, {
            include: { association: 'haircourt', through: { attributes: ['client_id'] } }
        });

        if (!client) {
            return res.status(400).send({
                status: 0,
                message: 'Corte de cabelo não encontrado!'
            });
        }

        return res.status(200).send(client.haircourt);
    },

    async store(req, res) {

        try {

            const { client_id } = req.params;
            const { name } = req.body;

            const client = await Client.findByPk(client_id);

            if (!client) {
                return res.status(400).json({
                    status: 0,
                    message: 'Cliente não encontrado!'
                });
            }

            const [haircourt] = await Haircourt.findOrCreate({
                where: { name }
            });

            await client.addCourse(haircourt);

            return res.status(200).json({
                status: 1,
                message: "Corte cadastrado com sucesso!",
                haircourt
            });

        } catch (err) {
            return res.status(400).json({ error: err });
        }
    },

    async delete(req, res) {
        try {

            const { client_id } = req.params;
            const { name } = req.body;

            const client = await Client.findByPk(client_id);

            if (!client) {
                return res.status(400).json({
                    status: 0,
                    message: 'Cliente não encontrado!'
                });
            }

            const haircourt = await Haircourt.findOrCreate({
                where: { name }
            });

            await client.removeCourse(haircourt);

            return res.status(200).json({
                status: 1,
                message: "Relacionamento deletado com sucesso!"
            });

        } catch (err) {
            return res.status(400).json({ error: err });
        }
    }
};