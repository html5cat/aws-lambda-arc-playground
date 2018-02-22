var arc = require('@architect/functions')
var auth = require('arc-middleware-github-oauth')

function login(req, res) {
  res({
    html:`if you see this you are logged in!`
  })
}

exports.handler = arc.html.get(auth, login)
