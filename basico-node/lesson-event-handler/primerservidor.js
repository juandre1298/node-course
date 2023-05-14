const http = require("http");

const servidor = http.createServer((req, res) => {
  console.log("solicitud nueva");
  res.end("hola, mundo!!!");
});
const PUERTO = 3000;
servidor.listen(PUERTO, () => {
  console.log(
    "el servidor esta escuchando en el puerto http//:localhost:" + PUERTO
  );
});
