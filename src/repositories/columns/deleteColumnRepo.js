const dynamoDb = require('../connection')
const fetchDB = require("../../сontrollers/callback");

module.exports.delete = (event, context, callback) => {
    const params = {
        TableName: "kashliatskyi-columns",
        Key: {
            id: +event.pathParameters.id,
        }
    };
    // delete the column from the database
    dynamoDb.delete(params, fetchDB(callback));
};