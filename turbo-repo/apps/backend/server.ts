import express from "express";

const app = express();
app.get("/api/v1", (req, res) => {
  res.status(200).json({ message: "getting data!!" });
});

app.listen(3000, () => {
  console.log("server start running !!");
});
