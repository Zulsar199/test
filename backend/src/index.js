import express from "express";
import cors from "cors";

const app = express();
app.use(express());
app.use(cors());
const port = 9000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
