import { GET, route } from "awilix-koa";
import { Context } from "../interfaces/IKoa";

@route("/")
class IndexController {
  //   @route("/1")
  @GET()
  async actionIndex(ctx: Context): Promise<void> {
    console.log("actionIndexactionIndexactionIndex");
    ctx.body = await ctx.render("index");
  }
}

export default IndexController;
