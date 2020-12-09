import { ParameterError } from "../src/error/ParameterError"
import { Image, OutputImage } from "../src/model/Image"
import { User } from "../src/model/User"

export const validatorMockFalsy = jest.fn((input: any): any =>{
    return {isValid: false}
})

export const validatorMockTrue = jest.fn((input: any): any =>{
    return {isValid: true}
})

export const dataTokenMock = jest.fn((token: any): any =>{
    return {
        id:"id"
    }
})

export const getUserByInfoUndefinedMock = jest.fn((info: any): any =>{
    return undefined
})

export const getUserByInfoMock = jest.fn((info: any): any =>{
    return new User (
        "id",
        "test",
        "test@email.com",
        "test",
        "123testing",
    )
})

export const getImagesMockUndefined = jest.fn((info: any, id: any) =>{
    return undefined
})

export const getImagesMock = jest.fn((info: any, id: any) =>{
    return new OutputImage (
        "id",
        "subtitle",
        "author",
        "file",
        ["tag", "tag"],
        "collection",
        new Date(1/1/2000)
    )
})


export const compareTrue = jest.fn((password: any, hashPassowrd: any): any =>{
    return true
})

export const compareFalse = jest.fn((password: any, hashPassowrd: any): any =>{
    return false
})


