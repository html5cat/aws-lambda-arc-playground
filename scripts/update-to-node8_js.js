var aws = require('aws-sdk')
var parallel = require('run-parallel')
var series = require('run-series')
var lambda = new aws.Lambda

function filter(f) {
  return true
}

function list(NextMarker) {
  var params = {}
  if (NextMarker) params.Marker = NextMarker
  lambda.listFunctions(params, function _list(err, result) {
    if (result && result.NextMarker) {
      list(result.NextMarker)
    }

    var names = result.Functions.map(f=> f.FunctionName).filter(filter).filter(Boolean)
    var fns = names.map(FunctionName=> {
      return function dels(callback) {
        setTimeout(function delay() {
          lambda.updateFunctionConfiguration({
            FunctionName,
            Runtime: 'nodejs8.10'
          }, callback)
        }, 5000)
      }
    })
    series(fns, console.log)
  })
}

list()

