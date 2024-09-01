import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Routes
import { AccountRouter } from "./account/account.router";
import { BillRouter } from "./bill/bill.router";

dotenv.config();

class ServerBootstap {
  public app: express.Application = express();
  private port: number = Number(process.env.SERVER_PORT) || 8000;

  constructor() {
    this.app.disable("x-powered-by");
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use("/api", this.getRoutes());
    this.runServer();
  }

  private getRoutes(): Array<express.Router> {
    return [new AccountRouter().router, new BillRouter().router];
  }

  public runServer(): void {
    this.app.listen(this.port, () =>
      console.log(`Server is running on port: ${this.port}`),
    );
  }
}

new ServerBootstap();
