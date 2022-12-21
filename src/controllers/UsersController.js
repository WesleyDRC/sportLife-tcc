import User from "../models/User.js";
import database from "../database/db.js";
import { createPasswordHash } from "../services/auth.js";

import userConstants from "../constants/userConstants.js";

class UsersController {
  async index(req, res) {
    try {
      const users = await User.findAll();

      return res.json(users);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: userConstants.INTERNAL_SERVER });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ msg: userConstants.NOT_FOUND });
      }

      return res.json(user);
    } catch (error) {
      console.log(error);
      return res.status(404).json({ error: userConstants.INTERNAL_SERVER });
    }
  }

  async create(req, res) {
    try {
      await database.sync();

      const { Data_Nasc, Nome, Sexo, Email, Senha, Telefone, Username, CPF } =
        req.body;

      const userEmail = await User.findOne({ where: { Email: Email } });
      const userUsername = await User.findOne({
        where: { Username: Username },
      });

      if (userEmail) {
        return res
          .status(422)
          .json({ message: `${Email} ${userConstants.EMAIL_REGISTERED}` });
      }
      if (userUsername) {
        return res.status(422).json({
          message: `${Username} ${userConstants.USERNAME_REGISTERED}`,
        });
      }

      const encryptedPassword = await createPasswordHash(Senha);

      const newUser = await User.create({
        Data_Nasc,
        Nome,
        Sexo,
        Email,
        Senha: encryptedPassword,
        Telefone,
        Username,
        CPF,
      });

      return res.status(201).json(newUser);
    } catch (error) {
      console.log(error);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { Data_Nasc, Nome, Sexo, Email, Senha, Telefone, Username, CPF } =
        req.body;

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ msg: userConstants.NOT_FOUND });
      }

      const encryptedPassword = await createPasswordHash(Senha);

      user.update({
        Data_Nasc,
        Nome,
        Sexo,
        Email,
        Senha: encryptedPassword,
        Telefone,
        Username,
        CPF,
      });

      await user.save();

      return res.status(200).json({ msg: userConstants.UPDATE_SUCESS });
    } catch (error) {
      console.log(error);
      return res.status(404).json({ error: userConstants.INTERNAL_SERVER });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(404).json({ msg: userConstants.INVALID_ID });
      }

      await user.destroy();

      return res.status(200).json({ msg: userConstants.DELETE_SUCESS });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: userConstants.INTERNAL_SERVER });
    }
  }
}

export default new UsersController();
