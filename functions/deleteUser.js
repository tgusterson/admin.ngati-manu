const faunadb = require('faunadb'),
  q = faunadb.query

const client = require("./utils/faunaClient");

exports.handler = async event => {
  const eventBody = JSON.parse(event.body);
  if (event.httpMethod === 'DELETE' && eventBody.key === process.env.FAUNA_SERVER_SECRET) {
    try {
      const data = await client.query(
        q.Delete(
          q.Ref(q.Collection('Users'), eventBody.id)
        )
      )
      return {
        statusCode: 200,
        body: JSON.stringify(data.data)
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify(error)
      };
    }
  } else {
    return {
      statusCode: 500,
      body: "Invalid request"
    };
  }
};