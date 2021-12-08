'use strict';

module.exports.hello = async (event) => {
    return {
        statusCode: 200,//serverless invoke local --function hello
        body: JSON.stringify(
            {
                message: 'works',
                //input: event,
            },
            null,
            2
        ),
    };
};
