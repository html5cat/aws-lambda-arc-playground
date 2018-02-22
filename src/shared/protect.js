module.exports = function protect(req, res, next) {
    if(req.session.isLoggedIn){
        next()
    }
    else {
        res({location: req._url('/')})
    }
}
