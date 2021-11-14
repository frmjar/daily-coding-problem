const monteCarloPi = (n) => {
  const points = Array.from({ length: n }, () => ({
    x: Math.random(),
    y: Math.random()
  }))
  const inside = points.filter(point => Math.pow(point.x, 2) + Math.pow(point.y, 2) < 1)
  return inside.length / n * 4
}
console.log(monteCarloPi(1000))
