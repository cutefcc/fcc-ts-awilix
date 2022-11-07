declare module "koa-swig" {
  function render<T>(value: T | renderer.DefaultSetings): any;
  namespace renderer {
    interface DefaultSetings {
      root: string;
      autoescape: boolean;
      cache: boolean;
      ext: string;
      writeBody: boolean;
    }
  }
  export default render;
}
