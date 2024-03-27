const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(param) {
  let suma = param[0]

  for (let i = 1; i < param.length; i++) {
    suma += param[i]
  }
  let average = suma / param.length
  return average.toFixed(2)
}

console.log(average(numbers))
