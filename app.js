// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require("koa");
const bodyParser = require("koa-bodyparser"); //上下文解析
const static = require("koa-static"); //静态资源服务
const path = require("path");
const cors = require("koa-cors"); //跨域访问组件
const registerRouter = require("./routers/router");
const exception = require("./core/exception");
const koaLogger = require("koa-logger"); // 日志中间件
const moment = require("moment"); // 时间格式化
// 创建一个Koa对象表示web app本身:
const app = new Koa();
// 配置静态资源文件
const staticPath = "./static";
app.use(static(path.join(__dirname, staticPath)));

const logger = koaLogger(str => {
  // 使用日志中间件
  console.log(moment().format("YYYY-MM-DD HH:mm:ss") + str);
});
app.use(logger); // 输出日志
// app.use(cors()); // 允许跨域访问
app.use(bodyParser()); // body解析
app.use(exception); // 错误处理中间件
app.use(registerRouter());
app.on('error', (err, ctx) => {
  console.log('捕获到了!', err.message);
});

// 在端口3000监听:
app.listen(3000);
