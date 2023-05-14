function saludar(nombre) {
  return `hola, ${nombre}`;
}

module.exports.saludar = saludar;
console.log(module.exports.saludar);
