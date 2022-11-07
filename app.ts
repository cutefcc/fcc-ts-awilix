import co from "co";
import Koa from "koa";
const app = new Koa();
import { createContainer, Lifetime } from "awilix";
import { scopePerRequest, loadControllers } from "awilix-koa";
import render from "koa-swig";

// 创建一个容器，用来管理所有 services 的
const container = createContainer();
// 把所有的 service 注册到 container
container.loadModules([`${__dirname}/services/*.ts`], {
  formatName: "camelCase", // 转为驼峰的形式 比如：ApiService -> apiService
  resolverOptions: {
    lifetime: Lifetime.SCOPED,
  },
});

app.use(scopePerRequest(container)); // 每一次产生一个新的实例
// 配置完上面的我们就可以到 controllers 里面去注入 service 了  每一个 controller 把需要的service注入进去

// 注入路由 以后我们就不需要去操心 去维护我们的路由了
app.use(loadControllers(`${__dirname}/routers/*.ts`));

app.context.render = co.wrap(
  render({
    root: "./views",
    autoescape: true,
    cache: false, // memory disable, set to false
    ext: "html",
    writeBody: false,
  })
);

// 监听端口🍎🍌✈️
app.listen(3000, () => {
  console.log(`已经监听 3000 端口，Koa 起飞🛫️，🍎`);
});
