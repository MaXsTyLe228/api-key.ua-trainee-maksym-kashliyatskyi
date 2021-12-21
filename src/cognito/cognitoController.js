const Login = require('./signUp')
const Auth = require('./signIn')
const LogOut = require('./logout')

exports.signUp = async (event, context, callback) => {
    const data = JSON.parse(event.body);
    return await Login.signUp(data.email, data.password)
};

exports.signIn = async (event, context, callback) => {
    const data = JSON.parse(event.body);
    //console.log(process.env.CLIENT_ID)
    //console.log(process.env.USER_POOL_ID)
    return await Auth.signIn(data.email, data.password)
};

exports.logout = async (event, context, callback) => {
    const data = JSON.parse(event.body);
    return await LogOut.logout(data.refreshToken, data.username)
};