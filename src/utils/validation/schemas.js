import Joi from '@hapi/joi';
import joiObjectid from 'joi-objectid';
Joi.objectId = joiObjectid(Joi);

const schemas = {
  todoId: Joi.object({
    todoId: Joi.objectId(),
  }),
  todo: Joi.object()
    .options({ allowUnknown: false })
    .keys({
      title: Joi.string().max(100).required(),
      description: Joi.string().max(200).allow(null, ''),
    }),
};

export default schemas;
