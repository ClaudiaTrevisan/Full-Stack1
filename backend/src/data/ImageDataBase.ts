import { Image, OutputImage, Tag } from "../model/Image";
import { BaseDatabase } from "./BaseDatabase";
import Migrations from "./Migrations";

export class ImageDataBase extends BaseDatabase {
  public createImage = async (image: Image, tags: Tag): Promise<void> => {
    try {
      await this.getConnection().insert({
        id: image.getId(),
        subtitle: image.getSubtitle(),
        author: image.getAuthor(),
        file: image.getFile(),
        collection: image.getCollection()
      }).into(`${Migrations.getTableImage()}`)

      await this.getConnection().insert({
        id: tags.id,
        author_id: tags.author_id,
        tag: tags.tags
      }).into(`${Migrations.getTableTag()}`)

      await this.getConnection().insert({
        id_image: image.getId(),
        id_tag: tags.id
      }).into(`${Migrations.getTableRelational()}`)

    } catch (error) {
      console.log(error)
      throw new Error(error.sqlmessage || error.message);
    }
  };

  public getImages = async (
    info: string,
    id: string
    ): Promise<any> =>{
    try {
      const allImages: OutputImage[] = []
      
      const result = await this.getConnection().raw(`
      SELECT 
      img.id, 
      img.subtitle,
      img.author, 
      img.date,
      img.file,
      img.collection,
      tag.tag FROM ${Migrations.getTableImage()} img
      RIGHT JOIN ${Migrations.getTableUser()} u
      ON img.author =  u.id
      LEFT JOIN ${Migrations.getTableTag()} tag
      ON tag.author_id = u.id
      JOIN imagetic_relational ir
      ON ir.id_image = img.id
      AND ir.id_tag = tag.id
      WHERE u.id = "${id}"
      ORDER BY date DESC;
      `)
      
      for(let item of result[0]){
        allImages.push(OutputImage.toImageModel(item))
      }

    if(info){
      const image = allImages.filter((item) =>{
        return item.getId() === info
      })
      return image
    }

    return allImages
 
    } catch (error) {
      throw new Error(error.sqlmessage || error.message);
    }
  }
}

export default new ImageDataBase();
