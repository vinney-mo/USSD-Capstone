const express = require('express');

const router = express.Router();


router.post('/', (req, res) => {
    // Read the variables sent via POST from our API
    const {
        sessionId,
        serviceCode,
        phoneNumber,
        text,
    } = req.body;

    let response = '';

    if (text == '') {
        // This is the first request. Note how we start the response with CON
        response = `CON How much do you wish to spend?`;
    } else if ( text == '100') {
        // This is the first request. Note how we start the response with CON
        response = `CON ?
        1. Offer 1 @100
        2. Offer 2 @100
        3. Offer 3 @100
        0:Back`;

    } else if ( text == '2') {
        // Business logic for first level response
        // This is a terminal request. Note how we start the response with END
        response = `END You have bought X Offer for amount X`;
    }
    // Send the response back to the API
    res.set('Content-Type: text/plain');
    res.send(response);
});

module.exports = router;