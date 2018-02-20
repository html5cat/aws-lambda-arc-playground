var arc = require('@architect/functions')
var layout = require('@architect/shared/layout')
var log = require('@architect/shared/middleware/log')

function index(req, res) {
  var render = layout.bind({}, req)
  var body = `
    <h1>${req.session.count || 0}</h1>
    <form action=${req._url('/count')} method=post>
      <button>1 up</button>
    </form>
  `

  res({
    html: render(body)
  })
}

exports.handler = arc.html.get(log, index)
