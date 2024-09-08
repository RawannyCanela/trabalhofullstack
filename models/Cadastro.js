const { sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Cadastro = sequelize.define('Cadastro', 
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            cpf: {
                type: DataTypes.STRING,
                allowNull: false
            },
            telefone: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    is: /^\(\d{2}\)\s?\d{4,5}\-\d{4}$/  
                }
            }
        },
        { 
            tableName: 'Cadastro',
            timestamps: false  
        }
    );

    return Cadastro;
};
