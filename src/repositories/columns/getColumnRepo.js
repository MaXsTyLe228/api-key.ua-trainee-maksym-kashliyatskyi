const dynamoDb = require('../connection')
const fetchDB = require("../../сontrollers/callback");

module.exports.get = (event, context, callback) => {
    const params = {
        TableName: "kashliatskyi-columns",
        Key: {
            id: +event.pathParameters.id,
        },
    };
    // fetch the column from the database
    dynamoDb.get(params, fetchDB(callback));
};