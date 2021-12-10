const columnService = require('../services/columnService')

const COLUMN_TABLE = 'kashliatskyi-columns'

const colValidation = (data, callback) => {
    // validation
    if (typeof data.title !== "string" || typeof data.index !== "number") {
        console.log(typeof data.index, typeof data.title)
        console.error("Validation Failed");
        callback(null, {
            statusCode: 400,
            headers: {"Content-Type": "text/plain"},
            body: "Couldn't create/update item."
        });
    }
}

module.exports.allColumn = async (event, context, callback) => {
    const params = {
        TableName: COLUMN_TABLE,
    };

    return await columnService.getAllColumnsService(params, callback);
};

module.exports.getColumn = async (event, context, callback) => {
    const params = {
        TableName: COLUMN_TABLE,
        Key: {
            id: +event.pathParameters.id,
        },
    };
    return await columnService.getColumnService(params, callback);
}

module.exports.createColumn = async (event, context, callback) => {
    const data = JSON.parse(event.body);
    colValidation(data, callback);
    const params = {
        TableName: COLUMN_TABLE,
        Item: {
            id: data.id,
            index: data.index,
            title: data.title,
        }
    };
    return await columnService.createColumnService(params, callback);
}

module.exports.deleteColumn = async (event, context, callback) => {
    const params = {
        TableName: COLUMN_TABLE,
        Key: {
            id: +event.pathParameters.id,
        }
    };
    return await columnService.deleteColumnService(params, callback);
}

module.exports.updateColumn = async (event, context, callback) => {
    const data = JSON.parse(event.body);
    colValidation(data, callback);
    const params = {
        TableName: COLUMN_TABLE,
        Key: {
            id: +event.pathParameters.id,
        },
        UpdateExpression:
            "SET  title = :title, " +
            "#i = :index",
        ExpressionAttributeNames: {
            "#i": "index",
        },
        ExpressionAttributeValues: {
            ":title": data.title,
            ":index": data.index,
        },
        ReturnValues: "ALL_NEW"
    };
    return await columnService.updateColumnService(params, callback);
}