/* const express = require("express");
const app = express();
 */
const app = require("express")();

            // callback function 
app.get("/", (req, res) => {
    const response = {
        message: "hi there"
    }
    res.send(response);
});

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", 
                "Thursday", "Friday", "Saturday"];

app.get("/time", (req, res) => {
    const date = new Date();
    res.send({ 
        unformatedTime: date,
        time: date.toString(),
        day: date.getDay(),
        weekDay: days[date.getDay()]
    });
});

// days of the week assignment


app.listen(3000, error => {
    if (error) {
        console.log("Error running the server", error);
    }
    console.log("Server is running on port", 3000);
});
