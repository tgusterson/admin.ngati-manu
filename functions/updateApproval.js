const faunadb = require('faunadb'),
  q = faunadb.query

const client = require("./utils/faunaClient");

exports.handler = async event => {
  const eventBody = JSON.parse(event.body);
  if (event.httpMethod === 'PATCH' && eventBody.key === process.env.FAUNA_SERVER_SECRET) {
    try {
      const data = await client.query(
        q.Update(
          q.Ref(q.Collection('Users'), eventBody.id),
          {
            data: {
              APPROVED: eventBody.approved,
            }
          }
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