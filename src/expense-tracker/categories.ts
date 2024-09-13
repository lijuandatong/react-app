// 不写as const. 虽然不能categories = []，但categories依然可以增加元素（.push()）
// as const保证了真正意义上的常量
const categories = [
    "Food",
    "Utilities",
    "Entertainment"
  ] as const

export default categories