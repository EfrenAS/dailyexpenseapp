import { BaseRouter } from "../config/base.router";
import { AccountController } from "./account.controller";

export class AccountRouter extends BaseRouter<AccountController> {
  constructor() {
    super(AccountController);
  }

  routes(): void {
    this.router.get("/account", (req, res) =>
      this.controller.allAcounts(req, res),
    );
  }
}
