export const byType = (house, type) => (type ? house.type === type : true)

export const byCity = (house, city) => (city ? house.city === city : true)

export const filterBy = (house, city, type) =>
  [byCity(house, city), byType(house, type)].every(Boolean)
