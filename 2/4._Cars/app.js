const app = require("express")();
const PORT = 3000;

let cars = [
    { id: 1, brand: "Mercedes" }, 
    { id: 2, brand: "BMW" }
];

app.get("/", (req, res) => {
    return res.send({ about: "Car API version 0.0.1" });
});

app.get("/cars", (req, res) => {
    return res.send({ cars: cars })
});

// /cars/1
app.get("/cars/:id", (req, res) => {
    const car = cars.find(car => car.id === Number(req.params.id));
    return res.send({ car: car });
});

const server = app.listen(3000, (error) => {
    if (error) {
        console.log("Error starting the server");
    }
    console.log("This server is running on port", server.address().port);
});