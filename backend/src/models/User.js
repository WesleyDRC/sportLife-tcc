import { Sequelize, DataTypes  } from "sequelize";

import database from '../database/db.js'

const userSchema = database.define('usuarios', {
	idUSUARIOS: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
	Data_Nasc: {
		type: DataTypes.DATE,
		allowNull: true,
	},
	Nome: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	Sexo: {
		type: DataTypes.STRING(1),
		allowNull: false,
	},
	Email: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	Senha: {
		type: DataTypes.STRING(45),
		allowNull: false,
	},
	Telefone: {
		type: DataTypes.STRING(11),
	},
	Username: {
		type: DataTypes.STRING(25),
		allowNull: false,
		primaryKey: true
	},
	CPF: {
		type: DataTypes.STRING(11),
		allowNull: false,
	},
},
{
  timestamps: false,
})

export default userSchema;
