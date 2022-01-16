const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
const jwt_decode = require("jwt-decode");
const CognitoRefreshToken = require('amazon-cognito-identity-js').CognitoRefreshToken;

const userPool = new AmazonCognitoIdentity.CognitoUserPool({
    UserPoolId: process.env.USER_POOL_ID,
    ClientId: process.env.CLIENT_ID
});

function decodeJWTToken(token) {
    const {email, exp, auth_time, token_use, sub} = jwt_decode(token.idToken);
    return {token, email, exp, uid: sub, auth_time, token_use};
}

module.exports.returnRes = (refreshToken) => {
    const cognitoUser = new AmazonCognitoIdentity.CognitoUser({
        Username: "",
        Pool: userPool
    });
    const token = new CognitoRefreshToken({RefreshToken: refreshToken})
    return new Promise((resolve) => {
        cognitoUser.refreshSession(token, (err, result) => {
            if (err) {
                return resolve({statusCode: 422, body: JSON.stringify(err)});
            }
            const token = {
                accessToken: result.getAccessToken().getJwtToken(),
                idToken: result.getIdToken().getJwtToken(),
                refreshToken: result.getRefreshToken().getToken(),
            }
            resolve({
                statusCode: 200,
                headers: {"Access-Control-Allow-Origin": "*"},
                body: JSON.stringify(decodeJWTToken(token))
            });
        })
    })
}
