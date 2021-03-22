import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Permit from 'permit';

const { Bearer } = Permit;

import User from '../database/models/User.js';

const permit = new Bearer();

export default {
  login(req, res, next) {
    const { username, password } = req.body;

    User.findOne({
      where: {
        username: username,
      },
    }).then((user) => {
      if (!user) return res.status(401).json({ error: 'username not found' });

      if (!bcrypt.compareSync(password, user.password))
        return res.status(401).json({ error: 'invalid password' });

      const jwtPayload = { username: user.username };
      const token = jwt.sign(jwtPayload, process.env.JWT_SECRET);

      return res.status(200).json({ token });
    });
  },

  auth(req, res, next) {
    const token = permit.check(req);

    if (!token) {
      permit.fail(res);
      return res.status(401).json({ error: 'authentication required!' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        permit.fail(res);
        return res.status(401).json({ error: 'failed to authenticate token!' });
      }

      req.username = decoded.username;
      next();
    });
  },
};
