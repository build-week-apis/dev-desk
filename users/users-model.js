const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove,
  getUsernameAndPassword
};

function find() {
  return db('users').select('id', 'username', "authType");
}

function findBy(filter) {
  return db('users').where(filter);
}

function add(user) {
  return db('users').insert(user);
}

function findById(id) {
  return db('users')
    .select('id', 'username')
    .where({ id })
    .first();
}

function update(id, changes) {
  return db("users")
  .where({ id })
  .update(changes)
}

function remove(id) {
  return db("users")
  .where({ id })
  .del()
}

function getUsernameAndPassword(id) {
  return db('users')
    .select('username', "password")
    .where({ id })
    .first();
}