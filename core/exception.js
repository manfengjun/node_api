class HttpExteption extends Error {
  constructor(status = 400, msg = "server wrong") {
    super(msg);
    this.status = status;
    this.msg = msg;
  }
}
class ParameterExt extends Error {
  constructor(status, msg) {
    super(msg);
    this.status = status;
    this.msg = msg || "parameter wrong";
  }
}
class AuthFailedExt extends Error {
  constructor(status, msg) {
    super(msg);
    this.status = status;
    this.msg = msg || "auth failed";
  }
}
class NotFoundExt extends Error {
  constructor(status, msg) {
    super(msg);
    this.status = status;
    this.msg = msg || "method not find";
  }
}
class NotFoundExt extends Error {
  constructor(status, msg) {
    super(msg);
    this.status = status;
    this.msg = msg || "method not find";
  }
}
module.exports = {
  HttpExteption,
  ParameterExt,
  AuthFailedExt,
  NotFoundExt
};
