var express = require('express');
var router = express.Router();

router.get('/hello',function (req,res,next) {
   res.send("test.js/hello");
});
router.get('/', function(req, res, next) {

    const request = require('request')
    const crypto = require('crypto')

    const apiKey = 'N1iWv9cqnB0kM5gJKmBYu2NtmCC1HSLkmm8JByRSD4P'
    const apiSecret = '2CGCU3DvYvXxlUz4slvJfvPOQpDO0GtBkDw3aNzug7w'
    const baseUrl = 'https://api.bitfinex.com'

    const url = '/v1/account_infos'
    const nonce = Date.now().toString()
    const completeURL = baseUrl + url
    const body = {
        request: url,
        nonce
    }
    const payload = new Buffer(JSON.stringify(body))
        .toString('base64')

    const signature = crypto
        .createHmac('sha384', apiSecret)
        .update(payload)
        .digest('hex')

    const options = {
        url: completeURL,
        headers: {
            'X-BFX-APIKEY': apiKey,
            'X-BFX-PAYLOAD': payload,
            'X-BFX-SIGNATURE': signature
        },
        body: JSON.stringify(body)
    }

    request.post(
        options,
        function(error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body);
            //console.log('response:', JSON.stringify(body, 0, 2))
            res.send(JSON.stringify(body, 0, 2));
        }
    )

});

module.exports = router;