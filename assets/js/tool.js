function typeOf (param) {
  const toString = Object.prototype.toString
  const map = {
    '[object String]': 'string',
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object RegExp]': 'regExp',
    '[object function]': 'function',
    '[object Null]': 'null',
    '[object Undefined]': 'undefined',
    '[object Object]': 'object',
    '[object Array]': 'array',
    '[object Date]': 'date'
  }
  return map[toString.call(param)]
}

function deepCopy (obj) {
    let type = typeOf(obj)
    let o;
    if (type === 'object'){
      o = {}
    } else if(type === 'array') {
      o = []
    } else {
      return obj;
    }

    if (type === 'object') {
      for (let key in obj) {
        o[key] = deepCopy(obj[key])
      }
    } else if (type === 'array'){
      for (let i = 0,len = obj.length;i < len;i++) {
        o.push(deepCopy(obj[i]))
      }
    }
    return o
}

module.exports.deepCopy = deepCopy