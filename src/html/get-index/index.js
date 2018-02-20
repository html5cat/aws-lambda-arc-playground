var arc = require('@architect/functions')
var layout = require('@architect/shared/layout')

function index(req, res) {
  var render = layout.bind({}, req)
  res({
    html: layout(`hello world from IndexConf`)
  })
}

exports.handler = arc.html.get(index)
