import { IApi } from "../interfaces/IApi";
import { IData } from "../interfaces/IData";

class ApiServide implements IApi {
  getInfo(): Promise<IData> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          item: "hello",
          result: [1, 2, 3, 4, 5],
        });
      }, 1000);
    });
  }
}
export default ApiServide;
