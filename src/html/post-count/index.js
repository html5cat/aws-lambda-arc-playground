var arc = require('@architect/functions')

function counter(req, res) {
  // console.log(JSON.stringify(req, null, 2))
  var count = req.session.count || 0
  res({
    session: {count: count + 1},
    location:`/`
  })
}

exports.handler = arc.html.post(counter)
