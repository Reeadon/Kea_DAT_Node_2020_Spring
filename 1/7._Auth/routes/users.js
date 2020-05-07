const router = require('express').Router();

const User = require('../models/User.js');

router.get('/users/roles', async (req, res) => {
    const users = await User.query().select('username').withGraphFetched('role');
    return res.send({ response: users });
});


module.exports = router;