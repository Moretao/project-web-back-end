const { Model, DataTypes } = require('sequelize');

class Haircourt extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING
        }, {
            sequelize,
            tableName: 'haircourt'
        })
    }

    static associate(models) {
        this.belongsToMany(models.Haircourt, { foreignKey: 'haircourt_id', through: 'client_haircourt', as: 'clients' });
    }
}

module.exports = Haircourt;