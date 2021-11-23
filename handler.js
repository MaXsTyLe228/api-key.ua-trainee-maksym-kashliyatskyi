'use strict';

module.exports.hello = async (event) => {
    return {
        statusCode: 200,//serverless invoke local --function hello
        body: JSON.stringify(
            {
                message: 'Go Serverless v2.0! Your function executed successfully!',
                //input: event,
            },
            null,
            2
        ),
    };
};
