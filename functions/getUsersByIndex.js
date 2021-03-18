const faunadb = require('faunadb'),
  q = faunadb.query

const client = require("./utils/faunaClient");

exports.handler = async event => {
  const eventBody = JSON.parse(event.body);
  if (event.httpMethod === 'POST' && eventBody.key === process.env.FAUNA_SERVER_SECRET) {
    try {
      const data = await client.query(
        q.Map(
          q.Paginate(
            q.Match(q.Index(eventBody.index), eventBody.query),
            { size: 100000 }
          ),
          q.Lambda("USER", q.Get(q.Var("USER")))
        )
      )
      const responseObjArr = data.data.map((responseObj) => {
        return {
          id: responseObj.ref.toString().substring(26, 44),
          data: responseObj.data
        }
      });
      console.log(responseObjArr)
      return {
        statusCode: 200,
        body: JSON.stringify(responseObjArr)
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