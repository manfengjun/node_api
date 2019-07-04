class MethodError extends Error {
  constructor(msg = "method wrong", status = -1) {
    super(msg);
    this.status = status;
    this.msg = msg;
  }
}
class ParameterError extends Error {
  constructor(msg = "parameter wrong", status = 40001) {
    super(msg);
    this.status = status;
    this.msg = msg;
  }
}
class AuthFailedError extends Error {
  constructor(msg = "auth failed", status = 40002) {
    super(msg);
    this.status = status;
    this.msg = msg;
  }
}
class NotFoundError extends Error {
  constructor(msg = "method not find", status = 404) {
    super(msg);
    this.status = status;
    this.msg = msg;
  }
}
module.exports = {
  MethodError,
  ParameterError,
  AuthFailedError,
  NotFoundError
};
