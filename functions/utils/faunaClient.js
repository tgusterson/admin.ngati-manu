const faunadb = require('faunadb');
module.exports = new faunadb.Client({ secret: process.env.FAUNA_SERVER_SECRET });