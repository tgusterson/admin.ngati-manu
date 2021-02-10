const faunadb = require('faunadb'),
  q = faunadb.query

const client = require("./utils/faunaClient");

exports.handler = async event => {
  if (event.httpMethod === 'POST') {
    const eventBody = JSON.parse(event.body);
    try {
      const data = await client.query(
        q.Create(
          q.Collection('Users'),
          {
            data: {
              FNAME: eventBody.FNAME,
              LNAME: eventBody.LNAME,
              EMAIL: eventBody.EMAIL,
              APPROVED: "Pending"
            }
          },
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
}