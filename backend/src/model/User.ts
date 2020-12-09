
export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private nick_name: string,
    private password: string
  ) {}

  static toUserModel(user: any): User {
    return new User(
      user.id,
      user.name,
      user.email,
      user.nick_name,
      user.password
    );
  }

  public getId = (): string => this.id;
  public getName = (): string => this.name;
  public getEmail = (): string => this.email;
  public getNickName = (): string => this.nick_name;
  public getPassword = (): string => this.password;
}

export interface UserInput {
  name: string;
  email: string;
  nick_name: string;
  password: string;
}

export interface LoginInput {
  info: string;
  password: string;
}


