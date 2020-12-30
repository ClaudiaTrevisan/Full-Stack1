import { AddressInfo } from "net";
import express from "express";
import { userRouter } from "./routes/userRouter";
import { imageRouter } from "./routes/imageRouter";
import cors from 'cors';

const app = express();


app.use(express.json({limit: '50mb'}));
app.use(cors());

app.use("/user", userRouter);
app.use("/image", imageRouter);

const server = app.listen(3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});
