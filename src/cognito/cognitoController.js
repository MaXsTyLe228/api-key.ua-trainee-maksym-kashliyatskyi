const CognitoService = require('./signIn')

exports.handler = async (event, context, callback) => {
    const data = JSON.parse(event.body);
    /*const email = 'kashlyatsky@gmail.com' ;
    const password = '12345678'*/
    return await CognitoService.signIn(data.email, data.password)
};