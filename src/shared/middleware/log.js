module.exports = function log(req, res, next) {
    console.log(JSON.stringify(req, null, 2))
    next()
}