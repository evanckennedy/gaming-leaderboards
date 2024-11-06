import express from "express";
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});
