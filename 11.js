const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']

function averageWord(param) {
  let suma = param[0]
  for (let i = 1; i < param.length; i++) {
    if (typeof param[i] === 'number') {
      suma += param[i]
    } else {
      suma += param[i].length
    }
  }
  return suma
}

console.log(averageWord(mixedElements))
