function findFirstRepeated(gifts) {
 // Code here
  const getDuplicatedValues = new Set()
  for(let i = 0;i < gifts.length;i++) {
    if(getDuplicatedValues.has(gifts[i])) return gifts[i]
    getDuplicatedValues.add(gifts[i])
  }

  return -1
}

findFirstRepeated([1, 3, 4, 5, 0, 1, 3, 0, 7])
