const miURL = new URL(
  "https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1"
);

console.log("hostname:", miURL.hostname); //hostname: www.ejemplo.org
console.log("path:", miURL.pathname); //path: /cursos/programacion
console.log("queryString:", miURL.searchParams); //queryString: URLSearchParams { 'ordenar' => 'vistas', 'nivel' => '1' }
console.log(miURL.searchParams.get("nivel")); // 1
