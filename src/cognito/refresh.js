const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
const CognitoRefreshToken = require('amazon-cognito-identity-js').CognitoRefreshToken;

const userPool = new AmazonCognitoIdentity.CognitoUserPool({
    UserPoolId: process.env.USER_POOL_ID,
    ClientId: process.env.CLIENT_ID
});

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
            return resolve({statusCode: 200, body: JSON.stringify(result)})
        })
    })
}
