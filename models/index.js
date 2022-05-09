const User = require("./User");
const Prediction = require("./Prediction");

User.hasMany(Prediction, {
  foreignKey: "user_id",
});

Prediction.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Prediction };
