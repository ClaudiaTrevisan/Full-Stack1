import { AddressInfo } from "net";
import express from "express";
import { userRouter } from "./routes/userRouter";
import { imageRouter } from "./routes/imageRouter";
import cors from 'cors';

const app = express();

// const corsOptions = {
//   origin: '*',
//   optionsSuccessStatus: 200 
// }

app.use(express.json());
app.use(cors());

// cors(corsOptions)

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
