const Login = require('./signUp')
const Auth = require('./signIn')
const LogOut = require('./logout')
const Refresh = require('./refresh')
const {CognitoRefreshToken} = require("amazon-cognito-identity-js");

exports.signIn = async (event, context, callback) => {
    const data = JSON.parse(event.body);
    return await Auth.signIn(data.email, data.password)
};

exports.signUp = async (event, context, callback) => {
    const data = JSON.parse(event.body);
    return await Login.signUp(data.email, data.password)
};

exports.logout = async (event, context, callback) => {
    const data = JSON.parse(event.body);
    return await LogOut.logout(data.refreshToken, data.username)
};

exports.refresh = async (event, context, callback) => {
    const data = JSON.parse(event.body);
    return await Refresh.returnRes(data.refreshToken);
}