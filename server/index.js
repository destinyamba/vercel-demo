import express from "express";
import cors from "cors";

const app = express();
console.log("Starting server application.");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello! Application running ..." });
});

app.listen(4040);
