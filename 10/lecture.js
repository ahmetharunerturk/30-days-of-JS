countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
  const map = new Map(countries)
  console.log(map)
  console.log(map.size)

  map.set('Germany','Berlin')

  console.log(map)
  console.log(map.size)

  console.log(map.get('Germany'))

  for(const country of map){
    console.log(country)
  }