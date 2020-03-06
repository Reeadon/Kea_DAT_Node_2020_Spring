const express = require("express");
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
 
// parse application/json
app.use(express.json());


let cars = [
    { id: 1, brand: "Mercedes" }, 
    { id: 2, brand: "BMW" }
];
let currentId = 2;


app.get("/", (req, res) => {
    return res.send({ response: "Car API version 0.0.1" });
});

app.get("/cars", (req, res) => {
    return res.send({ response: cars })
});

app.get("/cars/:id", (req, res) => {
    const car = cars.find(car => car.id === Number(req.params.id));
    return res.send({ response: car });
});

app.post("/cars", (req, res) => {
    let newCar = req.body;
    newCar.id = ++currentId;
    cars.push(newCar);

    return res.send({ response: {} });
});




const port = process.env.PORT ? process.env.PORT : 3000;

const server = app.listen(port, (error) => {
    if (error) {
        console.log("Error starting the server");
    }
    console.log("This server is running on port", server.address().port);
});
