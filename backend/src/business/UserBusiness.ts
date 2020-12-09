import { UserInput, LoginInput } from "../model/User";
import userDatabase, { UserDatabase } from "../data/UserDatabase";
import idGenerator, { IdGenerator } from "../services/IdGenerator";
import hashManager, { HashManager } from "../services/HashManager";
import authenticator, { Authenticator } from "../services/Authenticator";
import { ValidationOutput } from "../utils/validation";
import { ParameterError } from "../error/ParameterError";
import {User} from '../model/User'

export class UserBusiness {

    constructor (
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator,
        private userDatabase: UserDatabase
    ) {}

    public signup = async (
        user: UserInput, 
        validator: (input: any) => ValidationOutput,
        ): Promise<string> =>{

        try {
            const resultValidation = validator(user)
            
            if(!resultValidation.isValid){
                throw new ParameterError("Missing properties", 422);
            }

            if(user.email.indexOf("@") === -1){
                throw new ParameterError("Invalid email", 422);
            }

            if (user.password.length < 6) {
                throw new ParameterError("Invalid password", 422);
            }

            const id: string = this.idGenerator.generate()
            const hashPassword: string = await this.hashManager.hash(user.password)

            await this.userDatabase.signup(new User(
                id, 
                user.name, 
                user.email,
                user.nick_name,
                hashPassword, 
            ))
            const token: string = this.authenticator.generateToken({
                id: id, 
            })

            return token

        } catch (error) {
            throw new ParameterError(error.message, error.code);
        }
    }

    public login = async (
        inputLogin: LoginInput,
        validator: (input: any) => ValidationOutput
        ): Promise<string> =>{
        
        try {
            const resultValidation = validator(inputLogin)

            if(!resultValidation.isValid){
                throw new ParameterError("Missing properties", 422);
            }

            const user: User = await this.userDatabase.getUserByInfo(inputLogin.info)

            if(!user){
                throw new ParameterError("Not found", 404);
            }

            const hashPassword: string =  user.getPassword()

            const hashCompare: boolean = await this.hashManager.compare(
                inputLogin.password, 
                hashPassword
            )

            if(!hashCompare){
                throw new ParameterError("Password is incorrect", 422);
            }

            const token: string = this.authenticator.generateToken({
                id: user.getId()
            })

            return token

        } catch (error) {
            throw new ParameterError(error.message, error.code);
        }
    }
}

export default new UserBusiness(idGenerator, hashManager, authenticator, userDatabase)

