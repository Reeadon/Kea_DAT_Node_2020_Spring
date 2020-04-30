const express = require('express');
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    return res.send({ response: "OKOK" });
});

/* Setup Objection + Knex */

const { Model } = require('objection');
const Knex = require('knex');
const knexFile = require('./knexfile.js');

const knex = Knex(knexFile.development);

Model.knex(knex);

/* Add routes */

const authRoute = require('./routes/auth.js');

app.use(authRoute);

/* Start server */

const PORT = 3000;

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", PORT);
})