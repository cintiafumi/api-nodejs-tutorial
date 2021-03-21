import Sequelize from 'sequelize';
import sequelize from '../sequelize.js';

const { DataTypes } = Sequelize;

const Car = sequelize.define('car', {
  model: DataTypes.STRING,
  brand: DataTypes.STRING,
  hp: DataTypes.INTEGER,
});

//create table if not exists...
const init = async () => {
  await Car.sync();
};

// init();

export default Car;
