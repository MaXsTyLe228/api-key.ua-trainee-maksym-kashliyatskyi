const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
const dotenv = require('dotenv')
dotenv.config()

const {
    USER_POOL_ID, CLIENT_ID
} = process.env

const userPool = new AmazonCognitoIdentity.CognitoUserPool({
    UserPoolId: USER_POOL_ID,
    ClientId: CLIENT_ID
})
// const sda = () => {
//     console.log(USER_POOL_ID)
//     console.log(CLIENT_ID)
// }
// sda();
module.exports = userPool;