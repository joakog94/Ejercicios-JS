const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(param) {
  for (let i = 0; i < param.length; i++) {
    const comida = param[i]
    for (let j = i + 1; j < param.length; j++) {
      if (comida === param[j]) {
        param.splice(j, 1)
      }
    }
  }
  return param
}

console.log(removeDuplicates(duplicates))
