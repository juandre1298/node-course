const estatusPedido = () => {
  return Math.random() < 0.8;
};
const miPedidoDePizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (estatusPedido()) {
      resolve("pedido exitoso");
    } else {
      reject("ocurrio un error");
    }
  }, 500);
});
/* 
const manejarPedido = (mensajeDeConfirmacion) => {
  console.log(mensajeDeConfirmacion);
};
const rechazoPedido = (mensajeDeError) => {
  console.log(mensajeDeError);
};
miPedidoDePizza.then(manejarPedido, rechazoPedido); */
// metodo alternativo
/* 
miPedidoDePizza
  .then((mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
  })
  .then(null, (mensajeDeError) => {
    console.log(mensajeDeError);
  }); */
// metodo catch

miPedidoDePizza
  .then((mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
  })
  .catch((mensajeDeError) => {
    console.log(mensajeDeError);
  });
