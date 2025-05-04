import Joi from 'joi';

export const productValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().allow(''),
    price: Joi.number().required(),
    inStock: Joi.boolean()
  });

  return schema.validate(data);
};
