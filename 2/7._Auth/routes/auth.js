const router = require('express').Router();

router.post('/login', (req, res) => {
    return res.status(501).send({ response: "Not implemented yet" });
});

router.post('/signup', (req, res) => {
    return res.status(501).send({ response: "Not implemented yet" });
});

router.get('/logout', (req, res) => {
    return res.status(501).send({ response: "Not implemented yet" });
});

module.exports = router;