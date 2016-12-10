import data from './data.json'
import { Base64 } from 'js-base64'

const columns = data.map(Object.keys).reduce((memo, keySet) => {
  keySet.forEach(key => {
    const encodedKey = Base64.encode(key)
    !memo.includes(encodedKey) && memo.push(encodedKey)
  })
  return memo
}, [])

const valueCountsForColumn = key => {
  const decodedKey = Base64.decode(key)
  const allValues = data.map(item => item[decodedKey])

  return allValues.reduce((memo, value) => {
    const encodedValue = Base64.encode(value)
    memo[encodedValue] = memo[encodedValue] ? memo[encodedValue] + 1 : 1
    return memo
  }, {})
}

export default () => {
  return columns.reduce((memo, column) => {
    memo[column] = valueCountsForColumn(column)
    return memo
  }, {})
}
