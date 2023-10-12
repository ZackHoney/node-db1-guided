const db = require('../../data/db-config')


module.exports = {
  get,
  getById,
  create,
  update,
  remove,
}

async function get() {
  // const result = await db.raw('select * from shippers') --works but isn't the right way
  const result = await db('shippers');
  return result;
}

async function getById(shipperid) {
  const result = await db('shippers').where('shipperid', shipperid).first();
  return result;
}

async function create(shipper) {
  const [shipperid] = await db('shippers').insert(shipper)
  const result = await getById(shipperid)
  return result;
}

async function update(shipperid, changes) {
  await db('shippers').update(changes).where('shipperid', shipperid)
  const result = await getById(shipperid)
  return result;
}

async function remove(shipperid) {
  const toBeDeleted = await getById(shipperid)
  await db('shippers').delete().where('shipperid', shipperid)
  return toBeDeleted;
}
