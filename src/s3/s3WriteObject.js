const AWS = require("aws-sdk");
const cardsService = require("../services/cardsService");

const CARDS_TABLE = 'kashliatskyi-card'

module.exports.uploadFile = async (myKey, idCard) => {
    const s3 = new AWS.S3({
        endpoint: 's3-us-east-2.amazonaws.com',
        signatureVersion: 'v4',
        region: 'us-east-2'
    });
    const signedUrlExpireSeconds = 60 * 5
    const myBucket = 'maks-trello-files'

    const params = {
        TableName: CARDS_TABLE,
        Key: {
            id: +idCard,
        },
        UpdateExpression:
            "set #file = :file",
        ExpressionAttributeNames: {
            "#file": "file"
        },
        ExpressionAttributeValues: {
            ":file": myKey + ""
        },
        ReturnValues: "ALL_NEW"
    }
    const res = await cardsService.updateCardService(params);

    return new Promise(resolve => {
        const url = s3.getSignedUrl('putObject', {
            Bucket: myBucket,
            Key: myKey,
            Expires: signedUrlExpireSeconds
        })
        return resolve({
            statusCode: 200,
            headers: {"Access-Control-Allow-Origin": "*"},
            body: JSON.stringify({
                url: url,
                card: res
            })
        })
    })
}