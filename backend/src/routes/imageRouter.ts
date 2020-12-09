import express from "express";
import  ImageController  from "../controller/ImageController";

export const imageRouter = express.Router();

imageRouter.post("/new", ImageController.createImage);
imageRouter.get("/", ImageController.getImages);
