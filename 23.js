const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]

const peliculaPequeña = []
const peliculaMediana = []
const peliculaGrande = []

for (const movie of movies) {
  if (movie.durationInMinutes < 100) {
    peliculaPequeña.push(movie)
  } else if (movie.durationInMinutes > 100 && movie.durationInMinutes < 200) {
    peliculaMediana.push(movie)
  } else {
    peliculaGrande.push(movie)
  }
}

console.log(peliculaPequeña)

console.log(peliculaMediana)

console.log(peliculaGrande)
