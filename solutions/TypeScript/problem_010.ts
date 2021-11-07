function jobScheduler (f: (...arg: any) => any, n: number): void {
  setTimeout(f, n)
}

jobScheduler(() => console.log('Hello'), 2000)
