const getObject = require('./s3GetObject')
const putObject = require('./s3WriteObject')
const deleteObject = require('./s3DeleteObject')

exports.getObject = async (event) => {
    const data = JSON.parse(event.body);
    return await getObject.getS3(data.filename)
}

exports.putObject = async (event) => {
    const data = JSON.parse(event.body);
    return await putObject.uploadFile(data.filename, data.idCard)
}

exports.deleteFile = async (event) => {
    const data = JSON.parse(event.body);
    return await deleteObject.deleteFile(data.filename, data.idCard)
}