const {sequelize, DataTypes, Sequelize} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Cadastro = sequelize.define('Cadastro', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        nome: DataTypes.STRING,
        cpf: DataTypes.STRING,
        telefone: DataTypes.STRING},{timestamps: false, tableName: 'cadastros'})
    return Cadastro
}