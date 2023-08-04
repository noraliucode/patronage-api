import express, { Request, Response } from "express";
import fs from "fs";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import "dotenv/config";
import cors from "cors";

const SECRET_KEY = process.env.SECRET_KEY || "";

const app = express();
app.use(bodyParser.json());
app.use(cors());

function readJSONFile(): any[] {
  try {
    const data = fs.readFileSync("src/data.json", "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    return [];
  }
}

async function writeJSONFile(data: any[]): Promise<void> {
  try {
    fs.writeFileSync("src/data.json", JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
}

app.get("/data", (req: Request, res: Response) => {
  res.json(readJSONFile());
});

app.post("/data", async (req: Request, res: Response) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    try {
      jwt.verify(token, SECRET_KEY);

      // Write request body to the JSON file
      await writeJSONFile(req.body);

      res.status(200).send({ message: "Data written to file" });
    } catch (err) {
      // if the token has expired or has any other error, return 401
      res.status(401).send({ error: "Unauthorized" });
    }
  } else {
    // if no token present, return 401
    res.status(401).send({ error: "No token provided" });
  }
});

const port = 3000;
app.listen(process.env.PORT || port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
