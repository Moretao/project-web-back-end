const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');


class Client extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            password: DataTypes.STRING,
            email: DataTypes.STRING,
            islogged: DataTypes.BOOLEAN
        },
            {
                sequelize,
                hooks: {
                    beforeCreate: (client) => {
                        const salt = bcrypt.genSaltSync();
                        client.password = bcrypt.hashSync(client.password, salt);
                    },
                },
            })
    }

    static associate(models) {
        this.hasMany(models.Address, { foreignKey: 'client_id', as: 'address' });
        this.belongsToMany(models.Client, { foreignKey: 'client_id', through: 'client_haircourt', as: 'clients' });
    }

}



module.exports = Client;