import express from "express";
import { renderFile } from "ejs";
import * as path from "path";

const HOST = "127.0.0.1";
const PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const pathOfViews = path.resolve("./src/views");
app.use(express.static(pathOfViews));
app.set("views", pathOfViews);
app.set("view engine", "html");
app.engine("html", renderFile);

app.get("/registration", function (req, res) {
  res.render("./registration.html");
});

app.post("/registration", function (req, res) {
  res.json({
    message: "Cadastro efetuado com sucesso!",
    data: req.body,
  });
});

app.listen(PORT, HOST, () => {
  console.log(`Server started on: ${HOST}:${PORT}`);
});
