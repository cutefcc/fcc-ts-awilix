import { Context } from "./../interfaces/IKoa";
import { GET, route } from "awilix-koa";
import { IApi } from "../interfaces/IApi";

@route("/api")
class IndexController {
  private apiService: IApi;
  // aop
  constructor({ apiService }: { apiService: IApi }) {
    this.apiService = apiService;
  }
  @route("/list")
  @GET()
  async actionList(ctx: Context): Promise<void> {
    console.log("api/list");
    const data = await this.apiService.getInfo();
    ctx.body = {
      data: data,
    };
  }
}

export default IndexController;
