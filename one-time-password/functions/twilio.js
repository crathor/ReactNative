const twilio = require('twilio');
const sid = require('./keys/account_sid');
const authTwilio = require('./keys/auth_token_twilio');


const accountSid = sid;
const authToken = authTwilio;

module.exports = new twilio.Twilio(accountSid, authToken);