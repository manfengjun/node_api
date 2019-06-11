class ApiError extends Error {
  constructor(status, msg) {
    super(msg);
    this.status = status;
    this.msg = msg;
    this.name = "ApiError";
  }
}
module.exports = ApiError;
