function invertString(string) {
  let stringInvertida = "";
  for(let i = 1; i <= string.length; i++){
    stringInvertida+=string[string.length - i]
  }

  return stringInvertida;
}

module.exports = {
  invertString
}
