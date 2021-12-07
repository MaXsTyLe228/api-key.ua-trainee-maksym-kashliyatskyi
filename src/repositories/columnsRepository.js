const dynamoDb = require("../repositories/connection");
const fetchDB = require("../сontrollers/callback");

module.exports.getAllCol = (params, callback) => {
    return dynamoDb.scan(params, fetchDB(callback)).promise();
}

module.exports.getCol = (params, callback) => {
    return dynamoDb.get(params, fetchDB(callback)).promise();
}

module.exports.createCol = (params, callback) => {
    return dynamoDb.put(params, fetchDB(callback)).promise();
}

module.exports.deleteCol = (params, callback) => {
    return dynamoDb.delete(params, fetchDB(callback)).promise();
}

module.exports.updateCol = (params, callback) => {
    return dynamoDb.update(params, fetchDB(callback)).promise();
}