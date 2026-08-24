import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello word");
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
