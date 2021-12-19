const rockets = [
  { country: 'Russia', launches: 32 },
  { country: 'US', launches: 23 },
  { country: 'China', launches: 16 },
  { country: 'Europe', launches: 7 },
  { country: 'India', launches: 4 },
  { country: 'Japan', launches: 3 }
]

const totalLaunches = rockets.reduce(
  (anterior, atual) => anterior + atual.launches,
  0
)

console.log(totalLaunches)
