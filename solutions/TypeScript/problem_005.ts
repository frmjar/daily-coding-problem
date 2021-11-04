type Pair = (f: (a: number, b: number) => any) => any

function cons (a: number, b:number): Pair {
  function pair (f: (arg0: number, arg1: number) => any): any {
    return f(a, b)
  }

  return pair
}

function car (pair: Pair): number {
  return pair(function (a: number, _b: number): number {
    return a
  })
}

function cdr (pair: Pair): number {
  return pair(function (_a: number, b: number): number {
    return b
  })
}

console.log(car(cons(3, 4))) // 3
console.log(cdr(cons(3, 4))) // 4
