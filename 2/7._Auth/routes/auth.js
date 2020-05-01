const router = require('express').Router();

const User = require("../models/User.js");


router.post('/login', (req, res) => {
    return res.status(501).send({ response: "Not implemented yet" });
});

router.post('/signup', (req, res) => {
    /* User.query().select().then(users => {
        return res.status(501).send({ response: users });
    }); */
    const { username, password } = req.body;

    

    return res.send({ response: req.body });

});

router.get('/logout', (req, res) => {
    return res.status(501).send({ response: "Not implemented yet" });
});

module.exports = router;