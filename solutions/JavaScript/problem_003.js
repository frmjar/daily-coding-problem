var _a, _b, _c
class Nodo {
  constructor (val, left = null, right = null) {
    this._val = val
    this._left = left
    this._right = right
  }
  get val () {
    return this._val
  }
  get left () {
    return this._left
  }
  get right () {
    return this._right
  }
}
function serialize (root) {
  return JSON.stringify(root)
}
function deserialize (data) {
  const json = JSON.parse(data)
  return deserializeJSON(json)
}
function deserializeJSON (json) {
  if (json === null) {
    return null
  }
  return new Nodo(json._val, deserializeJSON(json._left), deserializeJSON(json._right))
}
const nodo = new Nodo('root', new Nodo('left', new Nodo('left.left')), new Nodo('right'))
console.log(((_c = (_b = (_a = deserialize(serialize(nodo))) === null || _a === void 0 ? void 0 : _a.left) === null || _b === void 0 ? void 0 : _b.left) === null || _c === void 0 ? void 0 : _c.val) === 'left.left')
