var arc = require('@architect/functions')
var protect = require('@architect/shared/protect')

function route(req, res) {
  res({
    html:`secret stuff here`
  })
}

exports.handler = arc.html.get(protect, route)
