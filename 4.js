//* 4.1

const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']

console.log(avengers[0])

//* 4.2  Cambia el primer elemento de avengers a "IRONMAN"

avengers[0] = 'IRONMAN'

console.log(avengers)

//* 4.3

console.log(avengers.length)

//* 4.4 Añade 2 elementos al array: "Morty" y "Summer".
//* Muestra en consola el último personaje del array

const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry']
rickAndMortyCharacters.push('Morty', 'Summer')
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1])

//*4.5 Elimina el último elemento del array y muestra el primero y el último por consola.

const rickAndMortyCharacters2 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyCharacters2.pop()
console.log(rickAndMortyCharacters2[0])
console.log(rickAndMortyCharacters2[4])

//* 4.6 Elimina el segundo elemento del array y muestra el array por consola.
rickAndMortyCharacters2.splice(1, 1)
console.log(rickAndMortyCharacters2)
