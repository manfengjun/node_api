// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require("koa");
const bodyParser = require("koa-bodyparser"); //上下文解析
const static = require("koa-static"); //静态资源服务
const path = require("path");
const cors = require("koa-cors"); //跨域访问组件
const registerRouter = require("./routers/router");
const jwt = require("./utils/jwt");
const { Success, Failure } = require("./core/response");
// 创建一个Koa对象表示web app本身:
const app = new Koa();
// 配置静态资源文件
const staticPath = "./static";
app.use(static(path.join(__dirname, staticPath)));
// app.use(cors()); // 允许跨域访问
app.use(bodyParser()); // body解析

// uses async arrow functions
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.response.status = 200;
    Failure(err.status, err.msg);
  }
});
app.use(registerRouter());
// app.use(async (ctx, next) => {
//   console.log("cer");
//   try {
//     await next();
//   } catch (err) {
//     console.log("234");
//     ctx.response.status = err.statusCode || err.status || 500;
//     ctx.response.body = {
//       message: err.message
//     };
//   }
// });
// 在端口3000监听:
app.listen(3000);
