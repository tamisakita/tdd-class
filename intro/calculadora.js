const somar = (...numeros) => numeros.reduce((total, elem) => total += elem);

module.exports = {
  somar
}