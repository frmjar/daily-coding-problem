const getRandomNumber = (lengthStream: number): number => {
  const stream = Array.from({ length: lengthStream }, () => Math.floor(Math.random() * 100))
  let streamLength = 0
  let number: number = 0

  const getRandomNumber = (x : number) : void => {
    streamLength++
    const random = 1 / streamLength
    
    if (Math.random() <= random) {
      number = x
    }
    
  }

  stream.forEach(value => getRandomNumber(value))

  return number
}

console.log(getRandomNumber(10000))
