const AWS = require('aws-sdk')

module.exports.getS3 = async (myKey) => {
    const s3 = new AWS.S3({
        endpoint: 's3-us-east-2.amazonaws.com',
        signatureVersion: 'v4',
        region: 'us-east-2'
    });
    const signedUrlExpireSeconds = 60 * 5
    const myBucket = 'maks-trello-files'

    return new Promise(resolve => {
        const url = s3.getSignedUrl('getObject', {
            Bucket: myBucket,
            Key: myKey,
            Expires: signedUrlExpireSeconds
        })
        return resolve({statusCode: 200, body: JSON.stringify(url)})
    })
}