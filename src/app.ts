import express, { Request, Response } from "express";
import fs from "fs";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

function readJSONFile(): any[] {
  try {
    const data = fs.readFileSync("src/data.json", "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    return [];
  }
}

function writeJSONFile(data: any[]): void {
  try {
    fs.writeFileSync("src/data.json", JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
}

app.get("/data", (req: Request, res: Response) => {
  res.json(readJSONFile());
});

app.post("/data", (req: Request, res: Response) => {
  const data = readJSONFile();
  data.push(req.body);
  writeJSONFile(data);
  res.status(201).send();
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
