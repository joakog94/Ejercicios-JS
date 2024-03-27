const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]

let sellTotal = 0
for (const product of products) {
  sellTotal += product.sellCount
}

console.log('La media de ventas es = ' + sellTotal / products.length)
