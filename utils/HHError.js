class HHError extends Error {
  constructor(code, msg) {
    super(msg);
    this.code = code;
    this.msg = msg;
    this.name = "HHError";
  }
}
module.exports = HHError;
