const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next)
    } catch (error) {
      res.json({msg:1})
    }
  }
}

module.exports = asyncWrapper
