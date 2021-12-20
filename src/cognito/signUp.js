const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
const userPool = require('./userPool')

module.exports.signUp = async (email, password) => {

    const attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute({
        Name: 'email',
        Value: email// your email here
    });

    let attributeList = [];
    attributeList.push(attributeEmail);
    return new Promise((resolve) => {
        userPool.signUp(email, password, attributeList, null,
            function (err, result) {
                if (err) {
                    return resolve({statusCode: 422, body: JSON.stringify(err)});
                }
                return resolve({statusCode: 201, body: JSON.stringify(result)});
            })
    })
}
