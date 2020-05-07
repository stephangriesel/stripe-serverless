const products = require('./data/products.json');

// Load product JSON from data file, exports a handler function that returns status code of 200 and product data as JSON-encoded string

exports.handler = async () => {
    return {
        statusCode: 200,
        body: JSON.stringify(products),
    };
};