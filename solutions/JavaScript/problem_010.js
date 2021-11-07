function jobScheduler (f, n) {
  setTimeout(f, n)
}
jobScheduler(() => console.log('Hello'), 2000)
