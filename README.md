- 使用 koa + awilix + awilix-koa 实现依赖注入
- 写 node 简单，node 主要在性能和错误监控上

- 问题
  - "experimentalDecorators": true, 解决装饰器报错
  - "esModuleInterop": true 解决 import \* as xxx from 'xxx' 报错： import Koa from "koa";
