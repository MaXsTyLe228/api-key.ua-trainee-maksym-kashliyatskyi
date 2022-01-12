const AWS = require("aws-sdk");
const cardsService = require("../services/cardsService");
const {DeleteObjectCommand} = require("@aws-sdk/client-s3");

const CARDS_TABLE = 'kashliatskyi-card'
const myBucket = 'maks-trello-files'

module.exports.deleteFile = async (key, idCard) => {
    let s3 = new AWS.S3({
        endpoint: 's3-us-east-2.amazonaws.com',
        signatureVersion: 'v4',
        region: 'us-east-2'
    });

    const params = {
        TableName: CARDS_TABLE,
        Key: {
            id: +idCard,
        },
        UpdateExpression:
            "REMOVE #file",
        ExpressionAttributeNames: {
            "#file": "file"
        },
        ReturnValues: "ALL_NEW"
    }
    const res = await cardsService.updateCardService(params);

    return new Promise(async resolve => {
        s3.deleteObject({
            Bucket: myBucket,
            Key: key
        }, function (err, data) {
            if (err) console.log(err, err.stack);  // error
            else console.log('deleted');                 // deleted
        });
        return resolve({
            statusCode: 200, body: JSON.stringify({
                card: res,
            })
        })
    })
}