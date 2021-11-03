class Nodo {
    private _val: string
    private _left: Nodo | null
    private _right: Nodo | null

    constructor (val: string, left: Nodo | null = null, right: Nodo | null = null) {
      this._val = val
      this._left = left
      this._right = right
    }

    get val () : string {
      return this._val
    }

    get left () : Nodo | null {
      return this._left
    }

    get right () : Nodo | null {
      return this._right
    }
}

function serialize (root: Nodo | null): string {
  return JSON.stringify(root)
}

function deserialize (data: string): Nodo | null {
  const json = JSON.parse(data)
  return deserializeJSON(json)
}

function deserializeJSON (json: any): Nodo | null {
  if (json === null) { return null }
  return new Nodo(json._val, deserializeJSON(json._left), deserializeJSON(json._right))
}

const nodo: Nodo = new Nodo('root', new Nodo('left', new Nodo('left.left')), new Nodo('right'))

console.log(deserialize(serialize(nodo))?.left?.left?.val === 'left.left')
