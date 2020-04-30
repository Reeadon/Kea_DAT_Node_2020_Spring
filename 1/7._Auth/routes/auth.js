const route = require('express').Router();

route.post("/login", (req, res) => {
    return res.send({ response: "OKOK" });
});

route.post("/signup", (req, res) => {
    return res.send({ response: "OKOK" });
});

route.get("/logout", (req, res) => {
    return res.send({ response: "OKOK" });
});

module.exports = route;