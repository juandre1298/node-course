function ordenarProducto(producto) {
  return new Promise((resolve, reject) => {
    console.log(`Ordenar: ${producto} de freeCodeCamp.`);
    setTimeout(() => {
      if (producto === "taza") {
        resolve("ordenando una taza con el logo de su empresa...");
      } else {
        reject("Este producto no está disponible actualmente.");
      }
    }, 2000);
  });
}

function procesarPedido(respuesta) {
  return new Promise((resolve) => {
    console.log("Procesando respuesta...");
    console.log(`La respuesta fue: "${respuesta}`);
    setTimeout(() => {
      resolve("Gracias por tu compra. Disfruta tu producto de freeCodeCamp.");
    }, 4000);
  });
}
/*   
  ordenarProducto("taza")
    .then((respuesta) => {
      console.log("respuesta recibida");
      console.log(respuesta);
      return procesarPedido(respuesta);
    })
    .then((respuestaProcesada) => {
      console.log(respuestaProcesada);
    })
    .catch((err) => {
      console.log(err);
    });
   */
async function realizarPedido(producto) {
  try {
    const respuesta = await ordenarProducto(producto);
    console.log("Respuesta recibida");
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
  } catch (err) {
    console.log(err);
  }
}
realizarPedido("taza");
