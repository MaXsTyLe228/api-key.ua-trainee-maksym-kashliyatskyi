const AmazonCognitoIdentity = require("amazon-cognito-identity-js");

const userPool = new AmazonCognitoIdentity.CognitoUserPool({
    UserPoolId: 'us-east-2_HYPeBfIpZ',
    ClientId: '6kom8cbnmosu3ab5iorcdoglrl',
})

module.exports = userPool;