const promesaCumplida = false;

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (promesaCumplida) {
      resolve("promesa cumplida");
    } else {
      reject("promesa rechazada");
    }
  }, 3000);
});
const manejarPromesaCumplida = (valor) => {
  console.log(valor);
};

const manejarPromesaNoCumplida = (razonRechazado) => {
  console.log(razonRechazado);
};

miPromesa.then(manejarPromesaCumplida, manejarPromesaNoCumplida);
