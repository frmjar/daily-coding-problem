const monteCarloPi = (n: number) => {
  const points = Array.from({ length: n }, () => ({
    x: Math.random(),
    y: Math.random()
  }))
  const inside = points.filter(point => point.x ** 2 + point.y ** 2 < 1)
  return inside.length / n * 4
}

console.log(monteCarloPi(1000))
