class Log {
  orders: number[]
  index: number
  size: number

  constructor(private N: number) {
    this.orders = []
    this.index = 0
    this.size = N
  }

  record(orderId: number): void {
    this.orders[this.index % this.size] = orderId
    this.index++
  }

  getLast(i: number): number {
    const realIndex = (this.index - i) % this.size
    return this.orders[realIndex]
  }

}

const log1 = new Log(5)
log1.record(1)
log1.record(2)
log1.record(3)
console.log(log1.getLast(1))
log1.record(4)
console.log(log1.getLast(1))
console.log(log1.getLast(2))
console.log(log1.getLast(3))
log1.record(5)
log1.record(6)
log1.record(7)
console.log(log1.getLast(1))
console.log(log1.getLast(2))
console.log(log1.getLast(3))
console.log(log1.getLast(4))