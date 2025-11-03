import Joi from 'joi';

export const userValidationSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    idRole: Joi.number().required(),
});