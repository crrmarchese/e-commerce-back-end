// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
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
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true  // won't allow null
      }
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true // will only allow numbers
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
