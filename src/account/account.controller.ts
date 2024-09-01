import { Request, Response } from "express";

export class AccountController {
  allAcounts(req: Request, res: Response) {
    //TODO: Get all accounts
    res.json({ msg: "Hola desde mi Controlador de mi cuenta bancaria" });
  }

  getAccountById(req: Request, res: Response) {
    //TODO: Get an account by Id
    res.json({ msg: "Get an account by Id" });
  }

  createAccount(req: Request, res: Response) {
    //TODO: Create a new Account
    res.json({
      msg: "Account create successfully",
    });
  }

  updateAccountById(req: Request, res: Response) {
    //TODO: Get an account by Id
    res.json({ msg: "Update an account by Id" });
  }

  deleteAccountById(req: Request, res: Response) {
    // TODO: Delete Account by Id
    res.json({ msg: "Delete an account by Id" });
  }
}
