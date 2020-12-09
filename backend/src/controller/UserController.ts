import { Request, Response } from "express";
import { UserInput, LoginInput } from "../model/User";
import  userBusiness, { UserBusiness }  from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { validation } from "../utils/validation";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}
  
  public signup = async (req: Request, res: Response) =>{
    try {
      const input: UserInput = {
        name: req.body.name,
        email: req.body.email,
        nick_name: req.body.nick_name,
        password: req.body.password
      };

      const token = await this.userBusiness.signup(input, validation);

      res.status(200).send({ token });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }

  public login = async (req: Request, res: Response) =>{
    try {
      const loginData: LoginInput = {
        info: req.body.info,
        password: req.body.password
      };

      const token = await this.userBusiness.login(loginData, validation);

      res.status(200).send({ token });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }

    await BaseDatabase.destroyConnection();
  }
}
export default new UserController(userBusiness)
