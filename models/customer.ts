import {DataTypes, Model} from 'sequelize';
import db from '../database/config';

class Customer extends Model {}

Customer.init({
    customer_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    first_name: {
        type: DataTypes.STRING(50)
    },
    last_name: {
        type: DataTypes.STRING(50)
    },
    email: {
        type: DataTypes.STRING(50)
    },
    gender: {
        type: DataTypes.STRING(50)
    },
    create_date: {
        type: DataTypes.DATE
    }
}, {
    sequelize: db,
    modelName: 'customer',
    timestamps: false,
    freezeTableName: true
});

export default Customer;