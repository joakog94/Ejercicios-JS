const numbers = [1, 2, 3, 5, 45, 37, 58]

function sumAll(param) {
  let suma = param[0]

  for (let i = 1; i < param.length; i++) {
    suma += param[i]
  }
  return suma
}

console.log(sumAll(numbers))
