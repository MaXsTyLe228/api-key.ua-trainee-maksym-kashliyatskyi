const AmazonCognitoIdentity = require("amazon-cognito-identity-js");

module.exports.signIn = async (email, password) => {
    let attributeList = [];
    let cognitoUser;

    const dataEmail = {
        Name: 'email',
        Value: email// your email here
    };

    const attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);

    attributeList.push(attributeEmail);

    const userPool = new AmazonCognitoIdentity.CognitoUserPool({
        UserPoolId: 'us-east-2_HYPeBfIpZ',
        ClientId: '6kom8cbnmosu3ab5iorcdoglrl',
    })

    function getAuthDetails(email, password) {
        const authenticationData = {
            Username: email,
            Password: password,
        };
        return new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
    }

    await userPool.getCognitoUser(email).authenticateUser(userPool.getAuthDetails(email, password))
    await userPool.signUp(email, password, attributeList, null, function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        cognitoUser = result.user;
        return result.user;
        console.log(cognitoUser);
        console.log('user name is ' + cognitoUser.getUsername());
    });
}
