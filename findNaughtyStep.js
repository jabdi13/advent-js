function findNaughtyStep(original, modified) {
  // Code here
  const differenceSet = new Set(original);
  modified
    .split('')
    .forEach(step => {
      differenceSet.delete(step) || differenceSet.add(step)
    })
  return [...differenceSet][0] ?? ''
}

findNaughtyStep('xxxx', 'xxoxx')
