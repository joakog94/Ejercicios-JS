const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
function repeatCounter(param) {
  for (let i = 0; i < param.length; i++) {
    contador = 1
    const palabra = param[i]
    for (let j = i + 1; j < param.length; j++) {
      if (palabra === param[j]) {
        contador++
        param.splice(j, 1)
      }
    }
    console.log(contador)
  }
}

repeatCounter(counterWords)
