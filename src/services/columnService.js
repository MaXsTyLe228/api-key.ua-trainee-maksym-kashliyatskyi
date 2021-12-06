const columnRepository = require("../repositories/columnsRepository");


module.exports.createColumnService = async (params, callback) => {
    const req = await columnRepository.createCol(params, callback)
    return req;
}

module.exports.getAllColumnsService = async (params, callback) => {
    const req = await columnRepository.getAllCol(params, callback)
    return req;
}

module.exports.getColumnService = async (params, callback) => {
    const req = await columnRepository.getCol(params, callback)
    return req;
}

module.exports.deleteColumnService = async (params, callback) => {
    const req = await columnRepository.deleteCol(params, callback)
    return req;
}

module.exports.updateColumnService = async (params, callback) => {
    const req = await columnRepository.updateCol(params, callback)
    return req;
}