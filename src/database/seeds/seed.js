import {} from 'dotenv/config.js';
import bcrypt from 'bcrypt';
import User from '../models/User.js';

User.create({
  username: 'admin',
  password: bcrypt.hashSync('123', 10),
});

User.findAll()
  .then((result) => console.log(result))
  .catch((err) => console.error(err));
