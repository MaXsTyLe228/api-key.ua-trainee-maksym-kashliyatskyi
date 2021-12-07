const cardsRepository = require("../repositories/cardsRepository");

module.exports.getAllCardsService = (params) => {
    return cardsRepository.getAllCards(params);
}

module.exports.getCardService = (params) => {
    return cardsRepository.getCard(params);
}

module.exports.createCardService = (params) => {
    return cardsRepository.createCard(params);
}

module.exports.deleteCardService = (params) => {
    return cardsRepository.deleteCard(params);
}

module.exports.updateCardService = (params) => {
    return cardsRepository.updateCard(params);
}