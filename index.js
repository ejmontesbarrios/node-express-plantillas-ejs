const express = require("express");
const app = express();
const port = 3000;

//motor de plantillas

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index", { titulo: "Esta es la pagina principal" });
});
app.get("/servicios", (req, res) => {
  res.render("servicios", {
    MensajeDeServicios: "Esta es la pagina de servicios",
  });
});

app.use((req, res, next) => {
  res.status(404).render("404", {
  titulo: "404", 
  descripcion: "Pagina no encontrada" 
  })
})

app.listen(port, function () {
  console.log("servidor iniciando en el puerto" + port);
});

//https://bluuweb.github.io/node/03-vistas/
