const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Prediction extends Model {}

Prediction.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ticker: {
      type: DataTypes.STRING,
      allowNull: false
    },
    start_price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    start_time: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    predicted_price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    predicted_time: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
        unique: true
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "prediction",
  }
);
module.exports = Prediction;
