import { UserBusiness } from "../src/business/UserBusiness"
import { LoginInput, UserInput } from "../src/model/User"
import { getUserByInfoMock, 
    getUserByInfoUndefinedMock, 
    validatorMockFalsy, 
    validatorMockTrue,
    compareTrue,
    compareFalse
} from "./globals"

describe("signup", () =>{
    const idGenerator = { generate: jest.fn() } as any
    const hashManager = { hash: jest.fn() } as any
    const authenticator = { generateToken: jest.fn() } as any
    const userDatabase = { signup: jest.fn() } as any

    test("Error when 'name' is empty", async () =>{
        expect.assertions(2)

        const userBusiness: UserBusiness = new UserBusiness(
            idGenerator,
            hashManager,
            authenticator,
            userDatabase
        )
        
        const validatorMock = validatorMockFalsy
        const input: UserInput = {
            name: "",
            email: "test@email.com",
            nick_name: "test",
            password: "123testing"
        }

        try {
            await userBusiness.signup(
                input,
                validatorMock,
            )

        } catch (error) {
            expect(error.message).toBe("Missing properties")
            expect(error.code).toBe(422)
        }
    })

    test("Error when 'email' is empty", async () =>{
        expect.assertions(2)

        const userBusiness: UserBusiness = new UserBusiness(
            idGenerator,
            hashManager,
            authenticator,
            userDatabase
        )
        
        const validatorMock = validatorMockFalsy
        const input: UserInput = {
            name: "Test",
            email: "",
            nick_name: "test",
            password: "123testing"
        }

        try {
            await userBusiness.signup(
                input,
                validatorMock,
            )

        } catch (error) {
            expect(error.message).toBe("Missing properties")
            expect(error.code).toBe(422)
        }
    })

    test("Error when 'nick name' is empty", async () =>{
        expect.assertions(2)

        const userBusiness: UserBusiness = new UserBusiness(
            idGenerator,
            hashManager,
            authenticator,
            userDatabase
        )
        
        const validatorMock = validatorMockFalsy
        const input: UserInput = {
            name: "Test",
            email: "test@email.com",
            nick_name: "",
            password: "123testing"
        }

        try {
            await userBusiness.signup(
                input,
                validatorMock,
            )

        } catch (error) {
            expect(error.message).toBe("Missing properties")
            expect(error.code).toBe(422)
        }
    })

    test("Error when 'password' is empty", async () =>{
        expect.assertions(2)

        const userBusiness: UserBusiness = new UserBusiness(
            idGenerator,
            hashManager,
            authenticator,
            userDatabase
        )
        
        const validatorMock = validatorMockFalsy
        const input: UserInput = {
            name: "Test",
            email: "test@email.com",
            nick_name: "test",
            password: ""
        }

        try {
            await userBusiness.signup(
                input,
                validatorMock,
            )

        } catch (error) {
            expect(error.message).toBe("Missing properties")
            expect(error.code).toBe(422)
        }
    })
    
    test("Error when email is invalid", async () =>{
        expect.assertions(2)

        const userBusiness: UserBusiness = new UserBusiness(
            idGenerator,
            hashManager,
            authenticator,
            userDatabase
        )
        
        const validatorMock = validatorMockTrue
        const input: UserInput = {
            name: "Test",
            email: "testemail.com",
            nick_name: "test",
            password: "123testing"
        }

        try {
            await userBusiness.signup(
                input,
                validatorMock,
            )

        } catch (error) {
            expect(error.message).toBe("Invalid email")
            expect(error.code).toBe(422)
        }
    })

    test("Error when password is invalid", async () =>{
        expect.assertions(2)

        const userBusiness: UserBusiness = new UserBusiness(
            idGenerator,
            hashManager,
            authenticator,
            userDatabase
        )
        
        const validatorMock = validatorMockTrue
        const input: UserInput = {
            name: "Test",
            email: "test@email.com",
            nick_name: "test",
            password: "123t"
        }

        try {
            await userBusiness.signup(
                input,
                validatorMock,
            )

        } catch (error) {
            expect(error.message).toBe("Invalid password")
            expect(error.code).toBe(422)
        }
    })

    test("Success case", async () =>{
        expect.assertions(2)

        const userBusiness: UserBusiness = new UserBusiness(
            idGenerator,
            hashManager,
            authenticator,
            userDatabase
        )
        
        const validatorMock = validatorMockTrue
        const input: UserInput = {
            name: "Test",
            email: "test@email.com",
            nick_name: "test",
            password: "123testing"
        }
        const inputSignup = {
            id: "id",
            name: "Test",
            email: "test@email.com",
            nick_name: "test",
            password: "123testing"        
        }

        try {
            await userBusiness.signup(input, validatorMock)

            expect(userDatabase.signup).toHaveBeenCalled()
            expect(userDatabase.signup).toHaveBeenCalledWith(inputSignup)
        } catch (error) {
            
        }
    })
})

describe("Login", () =>{
    const idGenerator = { generate: jest.fn() } as any
    const hashManagerTrue = { compare: compareTrue} as any
    const hahsManagerFalse = { compare: compareFalse } as any
    const authenticator = { generateToken: jest.fn() } as any
    const userDatabaseTrue = { getUserByInfo: getUserByInfoMock } as any
    const userDatabaseFalsy = { getUserByInfo: getUserByInfoUndefinedMock } as any

    test("Error when 'email' is empty", async () =>{
        expect.assertions(2)

        const userBusiness: UserBusiness = new UserBusiness(
            idGenerator,
            hashManagerTrue,
            authenticator,
            userDatabaseTrue
        )

        const validatorMock = validatorMockFalsy
        const input: LoginInput = {
            info: "",
            password: "123testing"
        }

        try {
            await userBusiness.login(input, validatorMock)

        } catch (error) {
            expect(error.message).toBe("Missing properties")
            expect(error.code).toBe(422)
        }
    })

    test("Error when 'password' is empty", async () =>{
        expect.assertions(2)

        const userBusiness: UserBusiness = new UserBusiness(
            idGenerator,
            hashManagerTrue,
            authenticator,
            userDatabaseTrue
        )

        const validatorMock = validatorMockFalsy
        const input: LoginInput = {
            info: "test@email.com",
            password: ""
        }

        try {
            await userBusiness.login(input, validatorMock)

        } catch (error) {
            expect(error.message).toBe("Missing properties");
            expect(error.code).toBe(422)
        }
    })

    test("Error when user not found", async () =>{
        expect.assertions(2)

        const userBusiness: UserBusiness = new UserBusiness(
            idGenerator,
            hashManagerTrue,
            authenticator,
            userDatabaseFalsy
        )

        const validatorMock = validatorMockTrue
        const input: LoginInput = {
            info: "test@email.com",
            password: "testando123"
        }

        try {
            await userBusiness.login(input, validatorMock)

        } catch (error) {
            expect(error.message).toBe("Not found")
            expect(error.code).toBe(404)
        }
    })

    test("Error when password is incorrect", async () =>{
        expect.assertions(2)

        const userBusiness: UserBusiness = new UserBusiness(
            idGenerator,
            hahsManagerFalse,
            authenticator,
            userDatabaseTrue
        )

        const validatorMock = validatorMockTrue
        const input: LoginInput = {
            info: "test@email.com",
            password: "123tes"
        }

        try {
            await userBusiness.login(input, validatorMock)

        } catch (error) {
            expect(error.message).toBe("Password is incorrect")
            expect(error.code).toBe(422)
        }
    })

    test("Success case", async () =>{
        expect.assertions(2)

        const userBusiness: UserBusiness = new UserBusiness(
            idGenerator,
            hashManagerTrue,
            authenticator,
            userDatabaseTrue
        )

        const validatorMock = validatorMockTrue
        const input: LoginInput = {
            info: "test@email.com",
            password: "testando123"
        }

        try {
            await userBusiness.login(input, validatorMock)

            expect(userDatabaseTrue.getUserByInfo).toHaveBeenCalled()
            expect(userDatabaseTrue.getUserByInfo).toHaveBeenCalledWith(input.info)
        } catch (error) {
        
        }
    })
})