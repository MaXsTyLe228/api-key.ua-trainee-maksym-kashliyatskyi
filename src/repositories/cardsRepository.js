const dynamoDb = require("../repositories/connection");

module.exports.getAllCards = (params) => {
    return dynamoDb.scan(params).promise();
}

module.exports.getCard = (params) => {
    return dynamoDb.get(params).promise();
}

module.exports.createCard = (params) => {
    return dynamoDb.put(params).promise();
}

module.exports.deleteCard = (params) => {
    return dynamoDb.delete(params).promise();
}

module.exports.updateCard = (params) => {
    return dynamoDb.update(params).promise();
}