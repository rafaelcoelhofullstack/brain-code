function printInnerElements(array) {
  for(i=0; i < array.length; i++){
    if(array.length > 2){
      
    }else{
      console.log("Tamanho do array inválido")
    }
  } 
  
  return array
}
/*
let arrayTeste = [1,2]
let arrayA = [1,2,3,4,5]
let arrayB = ['cao', 'gato', 'vaca', 'boi']
printInnerElements(arrayA);
printInnerElements(arrayB);
printInnerElements(arrayTeste);
*/
module.exports = {
  printInnerElements
}