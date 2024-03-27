const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function finderName(param, param2) {
  let encontrado = false

  for (let i = 0; i < param.length; i++) {
    if (param[i] === param2) {
      encontrado = true
      posicion = i
    }
  }

  console.log(encontrado)
  console.log('En posicion ' + posicion)
}

finderName(nameFinder, 'Tony')
