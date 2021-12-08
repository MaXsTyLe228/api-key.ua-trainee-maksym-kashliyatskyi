const columnRepository = require("../repositories/columnsRepository");


module.exports.getAllColumnsService = (params, callback) => {
    return columnRepository.getAllCol(params, callback);
}

module.exports.getColumnService = (params, callback) => {
    return columnRepository.getCol(params, callback);
}

module.exports.createColumnService = (params, callback) => {
    return columnRepository.createCol(params, callback);
}

module.exports.deleteColumnService = (params, callback) => {
    return columnRepository.deleteCol(params, callback);
}

module.exports.updateColumnService = (params, callback) => {
    return columnRepository.updateCol(params, callback);
}