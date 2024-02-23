function decode(message) {
  // Code here
  const openParentesis = message.indexOf('(')
  if(openParentesis === -1) return message

  const result = decode(message.substring(openParentesis + 1))
  
  const closeParentesis = result.indexOf(')')

  const initialString = message.substring(0, openParentesis)
  const finalString = result.substring(closeParentesis + 1)
  const cleanResult = result.substring(0, closeParentesis)
    .split('')
    .reverse()
    .join('')
  
  return initialString + cleanResult + finalString
}

decode('sa(u(cla)atn)s')
