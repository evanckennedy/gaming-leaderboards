import express from "express";
const app = express();
const PORT = 8000;
const object = {
  test: "test",
  test2: "test",
};

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});
