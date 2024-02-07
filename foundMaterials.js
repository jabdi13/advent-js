function manufacture(gifts: string[], materials: string) {
  // Code here
  const giftsMade = []
  const materialsSet = new Set(materials)
  gifts.forEach(gift => {
    const giftLetters = new Set(gift)
    
    for(const item of giftLetters){
      if(!materialsSet.has(item)) return
    }
    giftsMade.push(gift)
  })
  return giftsMade
}
