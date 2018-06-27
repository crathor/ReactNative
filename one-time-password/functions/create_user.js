const admin = require('firebase-admin');

module.exports = (req, res) => {
    // verify user provided a phone
    if (!req.body.phone) {
        return res.status(422).send({ error: 'Bad Input'});
    }

    // format the phone number to remove - and ()
    const phone = String(req.body.phone).replace(/[^\d]/g, "");

    // create a new user
    admin.auth().createUser({ uid: phone })
        .then(user => res.send(user))
        .catch(err => res.status(422).send({ error: err }));

    //respond to user saying account made
}

// TWILIO : +17787714462