const cardsService = require('../services/cardsService')
const fetchDB = require('./callback')

const CARDS_TABLE = 'kashliatskyi-card'

const colValidation = (data, callback) => {
    // validation
    if (typeof data.title !== "string" ||
        typeof data.index !== "string" ||
        typeof data.description !== "string" ||
        typeof data.idCol !== "number") {
        console.error("Validation Failed");
        callback(null, {
            statusCode: 400,
            headers: {"Content-Type": "text/plain"},
            body: "Couldn't create/update item."
        });
    }
}

module.exports.allCards = async (event, context, callback) => {
    const params = {
        TableName: CARDS_TABLE,
    };
    const fetch = fetchDB(callback);
    try {
        const res = await cardsService.getAllCardsService(params);
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
};

module.exports.getCard = async (event, context, callback) => {
    const params = {
        TableName: CARDS_TABLE,
        Key: {
            id: +event.pathParameters.id,
        },
    };
    const fetch = fetchDB(callback);
    try {
        const res = await cardsService.getCardService(params);
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
}

module.exports.createCard = async (event, context, callback) => {
    const data = JSON.parse(event.body);
    colValidation(data, callback);
    const params = {
        TableName: CARDS_TABLE,
        Item: {
            id: data.id,
            index: data.index,
            title: data.title,
            description: data.description,
            idCol: data.idCol,
        }
    };
    const fetch = fetchDB(callback);
    try {
        const res = await cardsService.createCardService(params);
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
}

module.exports.deleteCard = async (event, context, callback) => {
    const params = {
        TableName: CARDS_TABLE,
        Key: {
            id: +event.pathParameters.id,
        }
    };
    const fetch = fetchDB(callback);
    try {
        const res = await cardsService.deleteCardService(params);
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
}

module.exports.updateCard = async (event, context, callback) => {
    const data = JSON.parse(event.body);
    colValidation(data, callback);
    const params = {
        TableName: CARDS_TABLE,
        Key: {
            id: +event.pathParameters.id,
        },
        UpdateExpression:
            "set   title = :title, " +
            "#i = :index, " +
            "description = :description, " +
            "#Column_id = :idCol",
        ExpressionAttributeNames: {
            "#Column_id": "idCol",
            "#i": "index",
        },
        ExpressionAttributeValues: {
            ":title": data.title,
            ":index": data.index,
            ":description": data.description,
            ":idCol": data.idCol,
        },
        ReturnValues: "ALL_NEW"
    };
    const fetch = fetchDB(callback);
    try {
        const res = await cardsService.updateCardService(params);
        return fetch(null, res);
    } catch (e) {
        return fetch(e, null);
    }
}