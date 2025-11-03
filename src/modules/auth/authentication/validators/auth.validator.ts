import Joi from "joi";


export const authValidationSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});