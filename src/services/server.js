import axios from "axios";
import colors from "colors";

class Server {
  constructor() {}

  async getData() {
    try {
      const endpointDatabase =
        "https://github.com/DoCaoLong/Json-Airdrops/blob/master/tomarket.json";
      const { data } = await axios.get(endpointDatabase);
      return data;
    } catch (error) {
      console.log(colors.red("Lấy dữ liệu server ldc thất bại"));
      return null;
    }
  }

  async showNoti() {
    const database = await this.getData();
    if (database && database.noti) {
      console.log(colors.blue("📢 Thông báo từ hệ thống"));
      console.log(database.noti);
      console.log("");
    }
  }

  async checkVersion(curentVersion, database = null) {
    if (!database) {
      database = await this.getData();
    }

    if (database && database.ver && curentVersion !== database.ver) {
      console.log(
        colors.yellow(
          `🚀 Đã có phiên bản mới ${colors.blue(
            database.ver
          )}, tải ngay tại đây 👉 ${colors.blue(
            "https://github.com/DoCaoLong/Tools-Tomarket/archive/refs/heads/master.zip"
          )}`
        )
      );
      console.log("");
    }
  }
}

const server = new Server();
export default server;