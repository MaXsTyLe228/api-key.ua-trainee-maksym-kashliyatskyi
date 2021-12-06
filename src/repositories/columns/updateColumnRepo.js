const dynamoDb = require('../connection')
const fetchDB = require("../../сontrollers/callback");
const colValidation = require("../../сontrollers/columnController");

module.exports.update = (event, context, callback) => {
    const data = JSON.parse(event.body);
    colValidation(data, callback);
    const params = {
        TableName: "kashliatskyi-columns",
        Key: {
            id: +event.pathParameters.id,
        },
        UpdateExpression:
            "SET  title = :title",
        ExpressionAttributeValues: {
            ":title": data.title + "",
        },
        ReturnValues: "ALL_NEW"
    };
    // update the column in the database
    dynamoDb.update(params, fetchDB(callback));
};