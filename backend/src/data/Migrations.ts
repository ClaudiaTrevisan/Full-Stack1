import { BaseDatabase } from "./BaseDatabase";

class Migrations extends BaseDatabase {
  private static tableUser: string = "imagetic_users";
  private static tableImage: string = "imagetic_images";
  private static tableTag: string = "imagetic_tags";
  private static tableRelational: string = "imagetic_relational"

  public getTableTag = (): string => Migrations.tableTag;
  public getTableImage = (): string => Migrations.tableImage;
  public getTableUser = (): string => Migrations.tableUser;
  public getTableRelational = (): string => Migrations.tableRelational

  public createTables = async (): Promise<void> => {
    try {
      await this.getConnection().raw(`
      CREATE TABLE ${Migrations.tableUser} (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        nick_name VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
      )`);

      await this.getConnection().raw(`
      CREATE TABLE ${Migrations.tableImage} (
        id VARCHAR(255) PRIMARY KEY,
        subtitle VARCHAR(255) NOT NULL,
        author VARCHAR(255) NOT NULL,
        date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        file VARCHAR(255) NOT NULL,
        collection VARCHAR(255) NOT NULL,
        FOREIGN KEY(author) REFERENCES ${Migrations.tableUser}(id)
      )`);

      await this.getConnection().raw(`
        CREATE TABLE ${Migrations.tableTag} (
        id VARCHAR(255) PRIMARY KEY,
        author_id VARCHAR(255) NOT NULL,
        tag TEXT NOT NULL,
        FOREIGN KEY(author_id) REFERENCES ${Migrations.tableUser}(id)
      )`);

      await this.getConnection().raw(`
      CREATE TABLE ${Migrations.tableRelational} (
      id_image VARCHAR(255),
      id_tag VARCHAR(255),
      PRIMARY KEY (id_image, id_tag),
      FOREIGN KEY (id_image) REFERENCES ${Migrations.tableImage}(id),
      FOREIGN KEY (id_tag) REFERENCES ${Migrations.tableTag}(id)
      )`);

    } catch (error) {
      console.log(error);
    }
  };
}

export default new Migrations();

// const setup = new Migrations();
// setup.createTables();
