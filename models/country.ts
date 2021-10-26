import {DataTypes, Model} from 'sequelize';
import db from '../database/config';

class Country extends Model {};

Country.init({
    countryid: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    country: {
        type: DataTypes.STRING(100)
    }
}, {
    sequelize: db,
    modelName: 'country',
    timestamps: false,
    freezeTableName: true
});

export default Country;