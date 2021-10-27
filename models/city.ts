import {DataTypes, Model} from 'sequelize';
import db from '../database/config';

class City extends Model {};

City.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    city: {
        type: DataTypes.STRING
    }
}, {
    sequelize: db,
    modelName: 'city',
    timestamps: false,
    freezeTableName: true
});

export default City;