import Sequelize from 'sequelize';
import sequelize from '../sequelize.js';

const { DataTypes } = Sequelize;

const User = sequelize.define('user', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

//create table if not exists...
const init = async () => {
  await User.sync();
};

init();

export default User;
