import { ImageBusiness } from "../src/business/ImageBusiness"
import { Image, InputImage, Tag } from "../src/model/Image"
import { 
    getImagesMock,
    getImagesMockUndefined,
    validatorMockFalsy, 
    validatorMockTrue 
} from "./globals"

describe("Create Image", () =>{
    const authenticator = { getData: jest.fn(()=> ({id: "id"})) } as any
    const idGenerator = { generate: jest.fn() } as any
    const imageDataBase = { createImage: jest.fn() } as any


    test("Error when 'subtitle' is empty", async () =>{
        expect.assertions(2)

        const imageBusiness: ImageBusiness = new ImageBusiness(
            authenticator,
            idGenerator,
            imageDataBase
        )

        const input: InputImage = {
            subtitle: "",
            file: "https://teste",
            tag: "#teste, #test",
            collection: "Testing"
        }
        const mockValidator = validatorMockFalsy

        try {
            await imageBusiness.createImage(
                input, 
                "tokenTest", 
                mockValidator as any,
                )

        } catch (error) {
            expect(error.message).toBe("Missing properties")  
            expect(error.code).toBe(422)
        }
    })

    test("Error when 'file' is empty", async () =>{
        expect.assertions(2)

        const imageBusiness: ImageBusiness = new ImageBusiness(
            authenticator,
            idGenerator,
            imageDataBase
        )

        const input: InputImage = {
            subtitle: "Test",
            file: "",
            tag: "#teste, #test",
            collection: "Testing"
        }
        const mockValidator = validatorMockFalsy

        try {
            await imageBusiness.createImage(
                input, 
                "tokenTest", 
                mockValidator as any,
                )

        } catch (error) {
            expect(error.message).toBe("Missing properties")  
            expect(error.code).toBe(422)
        }
    })

    test("Error when 'tag' is empty", async () =>{
        expect.assertions(2)

        const imageBusiness: ImageBusiness = new ImageBusiness(
            authenticator,
            idGenerator,
            imageDataBase
        )

        const input: InputImage = {
            subtitle: "Test",
            file: "https://teste",
            tag: "",
            collection: "Testing"
        }
        const mockValidator = validatorMockFalsy

        try {
            await imageBusiness.createImage(
                input, 
                "tokenTest", 
                mockValidator as any,
                )

        } catch (error) {
            expect(error.message).toBe("Missing properties")  
            expect(error.code).toBe(422)
        }
    })

    test("Error when 'collection' is empty", async () =>{
        expect.assertions(2)

        const imageBusiness: ImageBusiness = new ImageBusiness(
            authenticator,
            idGenerator,
            imageDataBase
        )

        const input: InputImage = {
            subtitle: "Test",
            file: "https://teste",
            tag: "#teste, #test",
            collection: ""
        }
        const mockValidator = validatorMockFalsy

        try {
            await imageBusiness.createImage(
                input, 
                "tokenTest", 
                mockValidator as any,
                )

        } catch (error) {
            expect(error.message).toBe("Missing properties")  
            expect(error.code).toBe(422)
        }
    })

    test("Success case", async () =>{
        expect.assertions(2)

        const imageBusiness: ImageBusiness = new ImageBusiness(
            authenticator,
            idGenerator,
            imageDataBase
        )

        const input: InputImage = {
            subtitle: "Test",
            file: "https://teste",
            tag: "#teste, #test",
            collection: "Testing"
        }

        const mockValidator = validatorMockTrue

        const inputImage = new Image(
            idGenerator, 
            input.subtitle, 
            idGenerator, 
            input.file, 
            input.collection, 
            input.date
        )

        const inputTags: Tag = {
            id: idGenerator,
            author_id: authenticator,
            tags: input.tag.split(" " || ",")
        }
    
        try {
            await imageBusiness.createImage(
                input, 
                "tokenTest", 
                mockValidator as any,
                )

            expect(imageDataBase.createImage).toHaveBeenCalled()
            expect(imageDataBase.createImage).toHaveBeenCalledWith(
                inputImage,
                inputTags
            )

        } catch (error) {
            
        }
    })
})

describe("Get images", () =>{
    const authenticatorUndefined = { getData: jest.fn(()=> ({id: undefined})) } as any
    const authenticatorTrue = { getData: jest.fn(() => ({id: "id"})) } as any
    const idGenerator = { generate: jest.fn() } as any
    const imageDataBaseTrue = { getImages: getImagesMock } as any
    const imageDataBaseFalsy = { getImages: getImagesMockUndefined} as any

    test("Error when id is undefined", async () =>{
        expect.assertions(2)

        const imageBusiness: ImageBusiness = new ImageBusiness(
            authenticatorUndefined,
            idGenerator,
            imageDataBaseFalsy
        )

        try {
            await imageBusiness.getImages(
                "",
                "token"
            )

        } catch (error) {
            expect(error.message).toBe("Not authorized")  
            expect(error.code).toBe(401)
        }
    })

    test("Error when result is not found", async () =>{
        expect.assertions(2)
        const imageBusiness: ImageBusiness = new ImageBusiness(
            authenticatorTrue,
            idGenerator,
            imageDataBaseFalsy
        )
        
        try {
            await imageBusiness.getImages(
                "",
                "token"
            )

        } catch (error) {
            expect(error.message).toBe("Not Found")  
            expect(error.code).toBe(404)
        }
    })

    test("Succes case", async () =>{
        expect.assertions(2)

        const imageBusiness: ImageBusiness = new ImageBusiness (
            authenticatorTrue,
            idGenerator,
            imageDataBaseTrue
        )

        try {
            await imageBusiness.getImages(
                "",
                "token"
            )

            expect(imageDataBaseTrue.getImages).toHaveBeenCalled()
            expect(imageDataBaseTrue.getImages).toHaveBeenCalledWith(
                "",
                "id"
            )
            
        } catch (error) {
            
        }
    })
})