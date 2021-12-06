const dynamoDb = require("../repositories/connection");
const fetchDB = require("../сontrollers/callback");

module.exports.getAllCol = async (params, callback) => {
    const columns = await dynamoDb.scan(params, fetchDB(callback))
    return columns.promise();
}

module.exports.getCol = async (params, callback) => {
    const columns = await dynamoDb.get(params, fetchDB(callback))
    return columns.promise();
}

module.exports.createCol = async (params, callback) => {
    const columns = await dynamoDb.put(params, fetchDB(callback));
    return columns.promise();
}

module.exports.deleteCol = async (params, callback) => {
    const columns = await dynamoDb.delete(params, fetchDB(callback))
    return columns.promise();
}

module.exports.updateCol = async (params, callback) => {
    const columns = await dynamoDb.update(params, fetchDB(callback))
    return columns.promise();
}