const AWS = require("aws-sdk");

const cognitoISP = new AWS.CognitoIdentityServiceProvider({
    region: 'us-east-2'
});

module.exports.logout = async (refreshToken, userName) => {

    const token = {
        ClientId: '6kom8cbnmosu3ab5iorcdoglrl',
        Token: refreshToken,
    };

    return new Promise((resolve) => {
        cognitoISP.revokeToken(token,
            (err, data) => {
                if (err) {
                    return resolve({
                        statusCode: 422,
                        loggedIn: true,
                        pageTitle: 'Authenticated',
                        body: JSON.stringify(err),
                        token: '',
                        accessToken: '',
                        refreshToken: refreshToken,
                        userName: userName
                    });
                } else {
                    return resolve({
                        statusCode: 200,
                        loggedIn: false,
                        pageTitle: 'Login',
                        body: JSON.stringify(data)
                    });
                }
            });

    });
}