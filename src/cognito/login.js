const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
const userPool = require('./userPool')

module.exports.verify = async (email, password) => {

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
                    return resolve({ statusCode: 422, response: err });
                }
                return resolve({ statusCode: 400, response: result });
            })
    })
}

    await userPool.getCognitoUser(email).authenticateUser(userPool.getAuthDetails(email, password))

