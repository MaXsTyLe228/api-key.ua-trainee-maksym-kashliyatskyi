const AWS = require("aws-sdk");

const cognitoISP = new AWS.CognitoIdentityServiceProvider({
    region: 'us-east-2'
});

const ClientId = process.env.CLIENT_ID;

module.exports.logout = async (refreshToken, userName) => {

    const token = {
        ClientId: ClientId,
        Token: refreshToken,
    };

    return new Promise((resolve) => {
        cognitoISP.revokeToken(token,
            (err, data) => {
                if (err) {
                    resolve({
                        statusCode: 422,
                        body: JSON.stringify(err),
                    });
                } else {
                    resolve({
                        statusCode: 200,
                        headers: {"Access-Control-Allow-Origin": "*"},
                        body: JSON.stringify(data)
                    });
                }
            });

    });
}