import { Router } from 'express';
import { check } from 'express-validator';
import { createCity, getCities, getCity } from '../controllers/city';
import { cityExist } from '../helpers/dbValidators';
import validateFields from '../middlewares/validateFields';

const cityRouter = Router();

cityRouter.get('/', getCities);

cityRouter.get('/:id', [
    check('id').custom(cityExist),
    validateFields
],getCity)

cityRouter.post('/', [
    check('city', 'City is mandatory').notEmpty(),
    validateFields
], createCity)

export default cityRouter;