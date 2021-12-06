const dynamoDb = require('../connection')
const fetchDB = require("../../сontrollers/callback");
const colValidation = require("../../сontrollers/columnController");

module.exports.create = (event, context, callback) => {
    const data = JSON.parse(event.body);
    colValidation(data, callback);
    const params = {
        TableName: "kashliatskyi-columns",
        Item: {
            id: +Date.now(),
            index: +data.index,
            title: data.title + "",
        }
    };
    // write the column to the database
    dynamoDb.put(params, fetchDB(callback));
};