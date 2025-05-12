function invertElements(array) {
  let arrayInvertido = []
  for(let i = 1; i <= array.length; i++){
    arrayInvertido.push(array[array.length - i])
  }
  return arrayInvertido;
}

module.exports = {
  invertElements
}