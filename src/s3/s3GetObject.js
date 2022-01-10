const AWS = require('aws-sdk')

const s3 = new AWS.S3()
AWS.config.update({
    signatureVersion: 'v4',
    region: "us-east-2",
})

const myBucket = 'maks-trello-files'
const myKey = 'Screenshot from 2021-12-14 18-07-53.png'
const signedUrlExpireSeconds = 60 * 5 // your expiry time in seconds.

const url = s3.getSignedUrl('getObject', {
    Bucket: myBucket,
    Key: myKey,
    Expires: signedUrlExpireSeconds
})

console.log(url)