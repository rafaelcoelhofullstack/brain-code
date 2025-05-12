function findMaximum(array) {
  let max = array[0]
  for(let i = 0; i < array.length; i++){
    if(array[i]>max){
      max = array[i]
    }
  }

  return max
}

const array = [5, 8, 2, 9, 3];
const maxNumber = findMaximum(array);
console.log(maxNumber);

module.exports = {
  findMaximum
}
