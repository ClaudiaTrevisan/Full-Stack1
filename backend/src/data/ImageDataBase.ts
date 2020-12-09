import { Image, OutputImage, Tag } from "../model/Image";
import { BaseDatabase } from "./BaseDatabase";
import Migrations from "./Migrations";

export class ImageDataBase extends BaseDatabase {
  public createImage = async (image: Image, tags: Tag): Promise<void> => {
    try {
      await this.getConnection().raw(`
        INSERT INTO ${Migrations.getTableImage()}
          VALUES (
            "${image.getId()}",
            "${image.getSubtitle()}",
            "${image.getAuthor()}",
            "${image.getDate()}",
            "${image.getFile()}",
            "${image.getCollection()}"
          );
      `);

      await this.getConnection().raw(`
        INSERT INTO ${Migrations.getTableTag()}
          VALUES (
            "${tags.id}",
            "${tags.author_id}",
            "${tags.tags}"
          );
      `)

      await this.getConnection().raw(`
        INSERT INTO ${Migrations.getTableRelational()}
          VALUES (
            "${image.getId()}",
            "${tags.id}",
          );
      `)

    } catch (error) {
      throw new Error(error.sqlmessage || error.message);
    }
  };

  public getImages = async (
    info: string,
    id: string
    ): Promise<any> =>{
    try {
      const allImages: OutputImage[] = []
      
      // if(!info){
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
    // }

    if(info){
      const image = allImages.filter((item) =>{
        return item.getId() === info
      })
      return image
    }
    else{
      return allImages
    }
    // if(info){
    //   const result = await this.getConnection().raw(`
    //     SELECT 
    //     img.id, 
    //     img.subtitle,
    //     img.author, 
    //     img.date,
    //     img.file,
    //     img.collection,
    //     tag.tag FROM ${Migrations.getTableImage()} img
    //     RIGHT JOIN ${Migrations.getTableUser()} u
    //     ON img.author =  u.id
    //     LEFT JOIN ${Migrations.getTableTag()} tag
    //     ON tag.author_id = u.id
    //     JOIN imagetic_relational ir
    //     ON ir.id_image = img.id
    //     AND ir.id_tag = tag.id
    //     WHERE u.id = "${id}"
    //     AND img.id = "${info}"
    //     ORDER BY date DESC;
    //   `)

    //   return result[0]
    // }

    } catch (error) {
      throw new Error(error.sqlmessage || error.message);
    }
  }
}

export default new ImageDataBase();
