const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
const dotenv = require('dotenv')
dotenv.config()

const userPool = new AmazonCognitoIdentity.CognitoUserPool({
    UserPoolId: process.env.USER_POOL_ID,
    ClientId: process.env.CLIENT_ID
})
module.exports = userPool;