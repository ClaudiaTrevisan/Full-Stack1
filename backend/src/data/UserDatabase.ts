import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";
import Migrations from "./Migrations";

export class UserDatabase extends BaseDatabase {
  public signup = async (
    input: User
  ): Promise<void> =>{
    try {
      await this.getConnection()
        .insert({
          id: input.getId(),
          name: input.getName(),
          email: input.getEmail(),
          nick_name: input.getNickName(),
          password: input.getPassword()
        })
        .into(Migrations.getTableUser());
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public getUserByInfo = async (info: string): Promise<User> =>{
    try {
      const result = await this.getConnection().raw(`
      SELECT * FROM ${Migrations.getTableUser()}
      WHERE email = "${info}"
      OR nick_name = "${info}";
    `);

    return User.toUserModel(result[0][0]);

    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}

export default new UserDatabase()