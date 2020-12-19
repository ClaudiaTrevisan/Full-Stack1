import imageBusiness, { ImageBusiness } from "../business/ImageBusiness";
import { InputImage, OutputImage } from "../model/Image";
import { Request, Response } from "express";
import { validation } from "../utils/validation";
import { BaseDatabase } from "../data/BaseDatabase";

export class ImageController {
  constructor(private imageBusiness: ImageBusiness) {}

  public createImage = async (req: Request, res: Response): Promise<void> => {
    try {
      const input: InputImage = {
        subtitle: req.body.subtitle,
        file: req.body.file,
        tag: req.body.tag,
        collection: req.body.collection
      };

      const token: string = req.headers.authorization as string;

      await this.imageBusiness.createImage(input, token, validation);

      res.status(200).send("Image created with success");
    } catch (error) {
      const { code, message } = error;
      res.status(code || 400).send({ message });
    }
    await BaseDatabase.destroyConnection();
  };

  public getImages = async (req: Request, res: Response): Promise<void> =>{
    try {
      const info = req.query.id ? req.query.id : ""

      const token = req.headers.authorization as string

      const result: OutputImage = await this.imageBusiness.getImages(
        String(info), 
        token
        )

        res.status(200)
        .send(result)

    } catch (error) {
      const { code, message } = error;
      res.status(code || 400).send({ message });
    }
    await BaseDatabase.destroyConnection();
  }
}

export default new ImageController(imageBusiness);
