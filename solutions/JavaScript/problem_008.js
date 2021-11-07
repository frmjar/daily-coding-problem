class UnivalTree {
  constructor (value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
  isUnivalTree () {
    if (this.left === null && this.right === null) {
      return true
    }
    if (this.left !== null && this.left.value !== this.value) {
      return false
    }
    if (this.right !== null && this.right.value !== this.value) {
      return false
    }
    const isUnivalLeft = this.left === null ? true : this.left.isUnivalTree()
    const isUnivalRight = this.right === null ? true : this.right.isUnivalTree()
    return isUnivalLeft && isUnivalRight
  }
  countUnivalSubtrees () {
    if (this.left === null && this.right === null) {
      return 1
    }
    const countLeft = this.left === null ? 0 : this.left.countUnivalSubtrees()
    const countRight = this.right === null ? 0 : this.right.countUnivalSubtrees()
    return countLeft + countRight + (this.isUnivalTree() ? 1 : 0)
  }
}
const tree = new UnivalTree(0, new UnivalTree(1), new UnivalTree(0, new UnivalTree(1, new UnivalTree(1), new UnivalTree(1)), new UnivalTree(0)))
const tree2 = new UnivalTree(1, new UnivalTree(1), new UnivalTree(1, new UnivalTree(1, new UnivalTree(1), new UnivalTree(1)), new UnivalTree(1)))
console.log(tree.countUnivalSubtrees())
console.log(tree2.countUnivalSubtrees())
