//const Login = require('./signUp')
const Auth = require('./signIn')
const LogOut = require('./logout')

exports.signIn = async (event, context, callback) => {
    const data = JSON.parse(event.body);
    return await Auth.signIn(data.email, data.password)
};

exports.logout = async (event, context, callback) => {
    const data = JSON.parse(event.body);
    return await LogOut.logout(data.refreshToken, data.username)
};