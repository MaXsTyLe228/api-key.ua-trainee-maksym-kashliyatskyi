const columnService = require('../services/columnService')

const COLUMN_TABLE = 'kashliatskyi-columns'

const colValidation = (data, callback) => {
    // validation
    if (typeof data.title !== "string") {
        console.error("Validation Failed");
        callback(null, {
            statusCode: 400,
            headers: {"Content-Type": "text/plain"},
            body: "Couldn't create/update item."
        });
        return;
    }
}

module.exports.allColumn = async (event, context, callback) => {
    const params = {
        TableName: COLUMN_TABLE,
    };
    const res = await columnService.getAllColumnsService(params, callback);
    return res;
};

module.exports.getColumn = async (event, context, callback) => {
    const params = {
        TableName: "kashliatskyi-columns",
        Key: {
            id: +event.pathParameters.id,
        },
    };
    const res = await columnService.getColumnService(params, callback);
    return res;
}

module.exports.createColumn = async (event, context, callback) => {
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
    const res = await columnService.createColumnService(params, callback);
    return res;
}

module.exports.deleteColumn = async (event, context, callback) => {
    const params = {
        TableName: "kashliatskyi-columns",
        Key: {
            id: +event.pathParameters.id,
        }
    };
    const res = await columnService.deleteColumnService(params, callback);
    return res;
}

module.exports.updateColumn = async (event, context, callback) => {
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
    const res = await columnService.updateColumnService(params, callback);
    return res;
}