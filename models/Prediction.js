class Prediction extends Model {
    checkPassword(loginPw) {
        return bcrypt.compare(loginPw, this.password);
      }
}

Prediction.init({
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
    predicted_price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "user",
            key: "id",
            unique: true
        }
    }
})
module.exports= Prediction;