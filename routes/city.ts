import { Router } from 'express';
import { check } from 'express-validator';
import { createCity, deleteCity, getCities, getCity, updateCity } from '../controllers/city';
import { cityExist } from '../helpers/dbValidators';
import validateFields from '../middlewares/validateFields';

const cityRouter = Router();

cityRouter.get('/', getCities);

cityRouter.get('/:id', [
    check('id').custom(cityExist),
    validateFields
],getCity);

cityRouter.post('/', [
    check('city', 'City is mandatory').notEmpty(),
    validateFields
], createCity);

cityRouter.put('/:id', [
    check('city', 'City is mandatory').notEmpty(),
    check('id').custom(cityExist),
    validateFields
], updateCity);

cityRouter.delete('/:id', [
    check('id').custom(cityExist),
    validateFields
], deleteCity)

export default cityRouter;