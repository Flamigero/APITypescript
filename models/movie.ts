import {DataTypes, Model} from 'sequelize';
import db from '../database/config';

class Movie extends Model {};

Movie.init({
    movie_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING
    },
    running_time: {
        type: DataTypes.STRING
    },
    release_year: {
        type: DataTypes.STRING
    },
    director_id: {
        type: DataTypes.INTEGER
    },
    genre_id: {
        type: DataTypes.INTEGER
    },
    rental_rate: {
        type: DataTypes.TEXT
    }
}, {
    sequelize: db,
    modelName: 'movie',
    timestamps: false,
    freezeTableName: true
});

export default Movie;