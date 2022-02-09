import express, { Request, Response } from "express";
import { SupportedWorlds } from "./SupportedWorlds";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://wemeta-analytics-client-dev.herokuapp.com/welcome",
      "https://analytics.wemeta.world/welcome",
    ],
  })
);

app.use(express.static("public"));

app.get("/", (req: Request, res: Response) => {
  res.send(SupportedWorlds);
});

app.listen(process.env.PORT || 3010);
