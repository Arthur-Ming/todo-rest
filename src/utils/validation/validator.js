import { getStatusCode } from "http-status-codes";
import mongoose from "mongoose";
import { BadRequestError } from "../../errors/appErrors.js";
/* 
const errorResponse = errors => {
  return {
    status: 'failed',
    errors: errors.map(err => {
      const { path, message } = err;
      return { path, message };
    })
  };
};
 */
/* const validator = (schema, property) => {
  return (req, res, next) => {
    const { error } = schema.validate(req[property]);
    if (error) {
      res
        .status(property === 'body' ? UNPROCESSABLE_ENTITY : BAD_REQUEST)
        .json({ error: errorResponse(error.details) });
    } else {
      return next();
    }
  };
}; */

/* const userIdValidator = (req, res, next) => {
  if (req.userId !== req.params.id) {
    res.sendStatus(FORBIDDEN);
  } else {
    return next();
  }
};

export default { validator, userIdValidator }; */

const errorResponse = (errors) => {
  return {
    status: "failed",
    errors: errors.map((err) => {
      const { path, message } = err;
      return { path, message };
    }),
  };
};

export const validator = (schema, property) => {
  return (req, res, next) => {
    // console.log(schema);
    //  console.log(req[property]);
    const { error } = schema.validate(req[property]);
    console.log(errorResponse(error.details));
    if (error) {
      /*  throw new BadRequestError(error.details[0].message); */
      /*  res
        .status(
          property === "body"
            ? getStatusCode.UNPROCESSABLE_ENTITY
            : getStatusCode.BAD_REQUEST
        )
        .json({ error: errorResponse(error.details) }); */
    } else {
      return next();
    }
  };
};

export const idValidator = (req, res, next) => {
  const isValidId = mongoose.Types.ObjectId.isValid(req.params.todoId);
  if (!isValidId) {
    throw new BadRequestError("is not Valid");
  }
  return next();
};
