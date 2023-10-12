const db = require = require('../../data/db-config')

async function checkId(req, res, next) {
  const shipper = await db('shippers').where('shipperid', req.params.id)
  if(!shipper) {
    next({ status: 404, message: 'There is no shipper with the inputed id'})
  } else {
  next()
  }
}

function checkPayload(req, res, next) {
  if(!req.body.Phone || !req.body.ShipperName) {
    next({ status: 422, message: 'ShipperName and Phone are required'})
  } else {
  next()
  }
}

module.exports = {
  checkId,
  checkPayload,
}
