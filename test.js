var express = require('express');
var router = express.Router();

router.get('/hello',function (req,res,next) {
   res.send("test.js/hello");
});
router.get('/', function(req, res, next) {

    const request = require('request')
    const crypto = require('crypto')

    const apiKey = 'N1iWv9cqnB0kM5gJKmBYu2NtmCC1HSLkmm8JByRSD4E'
    const apiSecret = '2CGCU3DvYvXxlUz4slvJfvPOQpDO0GtBkDw3aNzug7s'
    const baseUrl = 'https://api.bitfinex.com'

    const url = '/v1/account_infos'
    //const nonce="1511318188781";
    const nonce=Date.now().toString();
    const completeURL = baseUrl + url
    const body = {
        request: url,
        nonce
    }
    console.log(body);
    const payload = new Buffer(JSON.stringify(body))
        .toString('base64')
    console.log("payload:"+payload);
    const signature = crypto
        .createHmac('sha384', apiSecret)
        .update(payload)
        .digest('hex')
    console.log("signature:"+signature);

    const options = {
        url: completeURL,
        headers: {
            'X-BFX-APIKEY': apiKey,
            'X-BFX-PAYLOAD': payload,
            'X-BFX-SIGNATURE': signature
        },
        body: JSON.stringify(body)
    }
    console.log("body:"+options.body);

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