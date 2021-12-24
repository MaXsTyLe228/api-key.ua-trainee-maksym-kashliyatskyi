const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
const jwt_decode = require('jwt-decode');
const userPool = require('./userPool')

function getCognitoUser(email) {
    const userData = {
        Username: email,
        Pool: userPool
    };
    return new AmazonCognitoIdentity.CognitoUser(userData);
}

function getAuthDetails(email, password) {
    const authenticationData = {
        Username: email,
        Password: password,
    };
    return new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
}

function decodeJWTToken(token) {
    const {email, exp, auth_time, token_use, sub} = jwt_decode(token.idToken);
    return {token, email, exp, uid: sub, auth_time, token_use};
}

module.exports.signIn = async (email, password) => {
    return new Promise((resolve) => {
        getCognitoUser(email).authenticateUser(getAuthDetails(email, password), {
            onSuccess: (result) => {
                const token = {
                    accessToken: result.getAccessToken().getJwtToken(),
                    idToken: result.getIdToken().getJwtToken(),
                    refreshToken: result.getRefreshToken().getToken(),
                }
                return resolve({
                    statusCode: 200,
                    headers: {
                        "Access-Control-Allow-Credentials": true,
                        "Access-Control-Allow-Origin" : "*",
                        "Access-Control-Allow-Methods" : "GET, POST",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(decodeJWTToken(token))
                });
            },

            onFailure: (err) => {
                return resolve({statusCode: 400, body: JSON.stringify(err)});
            },
        });
    });
}