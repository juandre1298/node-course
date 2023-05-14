const express = require("express");
const { programacion } = require("../datos/cursos.js").infoCursos;

const routerProgramacion = express.Router();
// middleware
routerProgramacion.use(express.json());

routerProgramacion.get("/", (req, res) => {
  res.send(JSON.stringify(programacion));
});
routerProgramacion.get("/:lenguaje", (req, res) => {
  const lenguaje = req.params.lenguaje;

  const resultados = programacion.filter(
    (curso) => curso.lenguaje === lenguaje
  );
  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }
  // parametros query
  if (req.query.ordenar === "vistas") {
    return res.send(
      JSON.stringify(resultados.sort((a, b) => a.vistas - b.vistas))
    );
  }
  res.send(JSON.stringify(resultados));
});

// aun mas heavy varios parametros
routerProgramacion.get("/:lenguaje/:nivel", (req, res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;

  const resultados = programacion.filter(
    (curso) => curso.lenguaje === lenguaje && curso.nivel === nivel
  );

  if (resultados.length === 0) {
    return res
      .status(404)
      .send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
  }
  res.send(JSON.stringify(resultados));
});

// metodo post

routerProgramacion.post("/", (req, res) => {
  let cursoNuevo = req.body;
  programacion.push(cursoNuevo);
  res.send(JSON.stringify(programacion));
});

// put
routerProgramacion.put("/:id", (req, res) => {
  const cursoActualizado = req.body;
  const id = req.params.id;

  const indice = programacion.findIndex((curso) => curso.id == id);

  if (indice >= 0) {
    programacion[indice] = cursoActualizado;
  }
  res.send(JSON.stringify(programacion));
});

// metodo patch

routerProgramacion.patch("/:id", (req, res) => {
  const infoActualizada = req.body;
  const id = req.params.id;

  const indice = programacion.findIndex((curso) => curso.id == id);

  if (indice >= 0) {
    const cursoAModificar = programacion[indice];

    Object.assign(cursoAModificar, infoActualizada);
  }
  res.send(JSON.stringify(programacion));
});

// Delete

routerProgramacion.delete("/:id", (req, res) => {
  const id = req.params.id;
  const indice = programacion.findIndex((curso) => curso.id == id);

  if (indice >= 0) {
    programacion.splice(indice, 1);
  }
  //res.send(JSON.stringify(programacion));
  // para enviar en json directamente
  res.json(programacion);
});

// metodo put: permite actualizar una entidad en la base de datos

module.exports = routerProgramacion;
