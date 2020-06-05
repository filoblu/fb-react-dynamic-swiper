export default function spy (func = () => {}) {
  const fn = function(...args) {
    fn.called = true
    fn.callCount++
    fn._calledWith.push(args)
    func(...args)
  }

  fn.called = false
  fn.callCount = 0
  fn._calledWith = []
  fn.calledWith = (...args) => fn._calledWith.some(calledArgs => {
    return calledArgs.every((ca, i) => ca === args[i])
  })

  return fn
}
