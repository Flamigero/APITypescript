import {DataTypes, Model} from 'sequelize';
import db from '../database/config';

class Genre extends Model {};

Genre.init({
    genderid: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    description: {
        type: DataTypes.STRING
    }
}, {
    sequelize: db,
    modelName: 'genre',
    timestamps: false,
    freezeTableName: true
});

export default Genre;