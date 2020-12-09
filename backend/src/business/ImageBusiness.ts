import { ParameterError } from "../error/ParameterError";
import { Image, InputImage, OutputImage, Tag } from "../model/Image";
import { ValidationOutput } from "../utils/validation";
import authenticator, {
  Authenticator,
  AuthenticationData
} from "../services/Authenticator";
import imageDataBase, { ImageDataBase } from "../data/ImageDataBase";
import idGenerator, { IdGenerator } from "../services/IdGenerator";

export class ImageBusiness {
  constructor(
    private authenticator: Authenticator,
    private idGenerator: IdGenerator,
    private imageDataBase: ImageDataBase
  ) {}

  public createImage = async (
    input: InputImage,
    token: string,
    validator: (input: any) => ValidationOutput
  ): Promise<void> => {
    try {
      const resultValidation = validator(input);

      if (!resultValidation.isValid) {
        throw new ParameterError("Missing properties", 422);
      }

      if (!token) {
        throw new ParameterError("Missing properties", 422);
      }

      const tags: string[] = input.tag.split(" " || ",")

      const tokenData: AuthenticationData = this.authenticator.getData(token);

      if (!tokenData.id) {
        throw new ParameterError("Not authorized", 401);
      }

      const idImage: string = this.idGenerator.generate();

      const idTag: string = this.idGenerator.generate();

      const inputTags: Tag = {
        id: idTag,
        author_id: tokenData.id,
        tags: tags
      }

      const inputImage =  new Image(
        idImage, 
        input.subtitle, 
        tokenData.id, 
        input.file, 
        input.collection, 
        input.date
      )

      await this.imageDataBase.createImage(
        inputImage,
        inputTags
      );
    } catch (error) {
      throw new ParameterError(error.message, error.code);
    }
  };

  public getImages = async (
    info: string,
    token: string, 
    ): Promise<OutputImage> =>{
    try {
      const tokenData: AuthenticationData = this.authenticator.getData(token);

      if (!tokenData.id) {
        throw new ParameterError("Not authorized", 401);
      }

      const result = await this.imageDataBase.getImages(info, tokenData.id)

      if(!result){
        throw new ParameterError("Not Found", 404);
      }

      return result

    } catch (error) {
      throw new ParameterError(error.message, error.code);
    }
  }
}
export default new ImageBusiness(authenticator, idGenerator, imageDataBase);
