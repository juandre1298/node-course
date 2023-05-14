const express = require("express");
const { matematicas } = require("../datos/cursos.js").infoCursos;

const routerMatematicas = express.Router();
// middleware
routerMatematicas.use(express.json());

routerMatematicas.get("/", (req, res) => {
  res.send(JSON.stringify(matematicas));
});

routerMatematicas.get("/:tema", (req, res) => {
  const tema = req.params.tema;

  const resultados = matematicas.filter((curso) => curso.tema === tema);
  if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${tema}`);
  }
  res.send(JSON.stringify(resultados));
});

// varios parametros
routerMatematicas.get("/:tema/:nivel", (req, res) => {
  const tema = req.params.tema;
  const nivel = req.params.nivel;

  const resultados = matematicas.filter(
    (curso) => curso.tema === tema && curso.nivel === nivel
  );
  if (resultados.length === 0) {
    return res
      .status(404)
      .send(`No se encontraron cursos de ${tema} y nivel ${nivel}`);
  }
  res.send(JSON.stringify(resultados));
});

// metodo post

routerMatematicas.post("/", (req, res) => {
  let nuevoCurso = req.body;
  matematicas.push(nuevoCurso);
  res.send(JSON.stringify(matematicas));
});

// metodo put

routerMatematicas.put("/:id", (req, res) => {
  const cursoActualizado = req.body;
  const id = req.params.id;

  const indice = matematicas.findIndex((curso) => curso.id == id);

  if (indice >= 0) {
    matematicas[indice] = cursoActualizado;
  }
  res.send(JSON.stringify(matematicas));
});

// metodo patch

routerMatematicas.patch("/:id", (req, res) => {
  const infoActualizada = req.body;
  const id = req.params.id;

  const indice = matematicas.findIndex((curso) => curso.id == id);

  if (indice >= 0) {
    const cursoAModificar = matematicas[indice];

    Object.assign(cursoAModificar, infoActualizada);
  }
  res.send(JSON.stringify(matematicas));
});
// Delete

routerMatematicas.delete("/:id", (req, res) => {
  const id = req.params.id;
  const indice = matematicas.findIndex((curso) => curso.id == id);

  if (indice >= 0) {
    matematicas.splice(indice, 1);
  }
  //res.send(JSON.stringify(programacion));
  // para enviar en json directamente
  res.json(matematicas);
});

module.exports = routerMatematicas;
