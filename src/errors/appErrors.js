import { StatusCodes } from "http-status-codes";

class AppError extends Error {
  constructor(message) {
    super(message);
  }
}

export class NotFoundError extends AppError {
  constructor(entity, params, message) {
    super(
      message || `Couldn't find a(an) ${entity} with: ${JSON.stringify(params)}`
    );
    this.status = StatusCodes.NOT_FOUND;
  }
}

export class BadRequestError extends AppError {
  constructor(message) {
    super(message);
    this.status = StatusCodes.BAD_REQUEST;
  }
}

export class EntityExistsError extends AppError {
  constructor(message) {
    super(message);
    this.status = StatusCodes.EXPECTATION_FAILED;
  }
}
/* 
export class AuthorizationError extends AppError {
  constructor(message) {
    super(message || getStatusText(UNAUTHORIZED));
    this.status = StatusCodes.UNAUTHORIZED;
  }
}

export class AuthenticationError extends AppError {
  constructor(message) {
    super(message || getStatusText(FORBIDDEN));
    this.status = StatusCodes.FORBIDDEN;
  }
}
 */
