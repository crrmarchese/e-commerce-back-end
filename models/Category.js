const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, // setting allowNull to false will add NOT NULL to the column, which means an error will be thrown from the DB when the query is executed if the column is null
      primaryKey: true,
      autoIncrement: true,
      validate: {
        notNull: true  // won't allow null
      }
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true  // won't allow null
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
