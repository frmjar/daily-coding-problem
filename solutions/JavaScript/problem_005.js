function cons (a, b) {
  function pair (f) {
    return f(a, b)
  }
  return pair
}
function car (pair) {
  return pair(function (a, _b) {
    return a
  })
}
function cdr (pair) {
  return pair(function (_a, b) {
    return b
  })
}
console.log(car(cons(3, 4))) // 3
console.log(cdr(cons(3, 4))) // 4
