const http = require("http");
const cursos = require("./cursos.js");

const servidor = http.createServer((req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      return manejarSolicitudGET(req, res);
    case "POST":
      return manejarSolicitudPOST(req, res);
    default:
      res.statusCode = 501;
      res.end(`El metodo no puede ser manejado por el servidor: ${method}`);
      console.log(
        `El metood usado no puede ser manjeado por el servidor: ${method}`
      );
  }
});

function manejarSolicitudPOST(req, res) {
  const path = req.url;
  if (path === "/cursos/programacion") {
    let cuerpo = "";

    req.on("data", (contenido) => {
      cuerpo += contenido.toString();
    });

    req.on("end", () => {
      console.log(cuerpo);
      console.log(typeof cuerpo);
    });

    res.statusCode = 200;
    return res.end(
      "El servidor recibio una solicitud POST para /cursos/programacion"
    );
  }
}
function manejarSolicitudGET(req, res) {
  const path = req.url;

  if (path === "/") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.statusCode = 200;
    return res.end(
      "bienveniedos a mi  primer servidor y API creados con Node.js"
    );
  } else if (path === "/cursos") {
    res.statusCode = 200;
    return res.end(JSON.stringify(cursos.infoCursos));
  } else if (path === "/cursos/programacion") {
    res.statusCode = 200;
    res.end(JSON.stringify(cursos.infoCursos.programacion));
  } else {
    res.statusCode = 404;
    return res.end("El recurso solicitado no existe...");
  }
}

const PUERTO = 3000;
servidor.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}`);
});
