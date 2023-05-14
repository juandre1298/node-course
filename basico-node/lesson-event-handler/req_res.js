const http = require("http");

const servidor = http.createServer((req, res) => {
  console.log("===> req (solicitud)");
  //console.log(req);
  // las mas importantes
  //console.log(req.url);
  //console.log(req.method);
  //console.log(req.headers);
  console.log(res.statusCode);
  //res.statusCode=404;
  res.setHeader("content-type", "application/json");
  console.log(res.getHeaders());

  res.end("some bullshit");
});
const PUERTO = 3000;
servidor.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});
