export interface Tag {
    id: string,
    author_id: string,
    tags: string
}

export interface InputImage {
    subtitle: string,
    file: string,
    tag: string,
    collection: string
}

export class OutputImage {

    constructor (
        private id: string,
        private subtitle: string,
        private author: string,
        private file: string,
        private tag: string[],
        private collection: string,
        private date: Date 
    ) {}

    public static toImageModel(image: any): OutputImage {
        return new OutputImage(
            image.id,
            image.subtitle,
            image.author,
            image.date,
            image.file,
            image.collection,
            image.tag
        );
    }

    public getId = (): string => this.id
    public getSubtitle = (): string => this.subtitle
    public getAuthor = (): string => this.author
    public getDate = (): Date => this.date
    public getFile = (): string => this.file
    public getTag = (): string[] => this.tag
    public getCollection = (): string => this.collection
};

export class Image {

    constructor (
        private id: string,
        private subtitle: string,
        private author: string,
        private file: string,
        private collection: string,
    ) {}

    public static toImageModel(image: any): Image {
        return new Image(
            image.id,
            image.subtitle,
            image.author,
            image.file,
            image.collection,
        );
    }

    public getId = (): string => this.id
    public getSubtitle = (): string => this.subtitle
    public getAuthor = (): string => this.author
    public getFile = (): string => this.file
    public getCollection = (): string => this.collection
}