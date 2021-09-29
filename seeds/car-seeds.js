const Car = require('../models/Car');

const carData = [
    {
        "year": "2020",
        "make": "Audi",
        "model": "R8",
        "price": "1000",
        "color": "White",
        "image": "/assets/inventory/audi-r8-2020.jpg"
    },
    {
        "year": "2021",
        "make": "Bentley",
        "model": "Bentayga",
        "price": "1350",
        "color": "Silver",
        "image": "/assets/inventory/bently-bentayga-2021.JPG"
    },
    {
        "year": "2021",
        "make": "BMW",
        "model": "M4",
        "price": "495",
        "color": "White",
        "image": "/assets/inventory/bmw-m4-2021.jpg"
    },
    {
        "year": "2018",
        "make": "Bugatti",
        "model": "Veyron",
        "price": "22,000",
        "color": "Black",
        "image": "/assets/inventory/bugatti-veyron-2018.jpg"
    },
    {
        "year": "2018",
        "make": "Chevrolet",
        "model": "Camaro (Bumblebee Edition)",
        "price": "500",
        "color": "Yellow",
        "image": "/assets/inventory/chevrolet-camaro-bumblebee-2018.jpg"
    },
    {
        "year": "2022",
        "make": "Corvette",
        "model": "Stingray",
        "price": "600",
        "color": "Black",
        "image": "/assets/inventory/corvette-2022.jpg"
    },
    {
        "year": "2020",
        "make": "Dodge",
        "model": "Challenger",
        "price": "250",
        "color": "Black",
        "image": "/assets/inventory/dodge-challenger-2020.jpg"
    },
    {
        "year": "2016",
        "make": "Dodge",
        "model": "Viper",
        "price": "850",
        "color": "Black",
        "image": "/assets/inventory/dodge-viper-2016.jpg"
    },
    {
        "year": "2017",
        "make": "Ferrari",
        "model": "485",
        "price": "1750",
        "color": "Red",
        "image": "/assets/inventory/ferrari-485-2017.jpg"
    },
    {
        "year": "2018",
        "make": "Lamborghini",
        "model": "Aventador",
        "price": "2500",
        "color": "Orange",
        "image": "/assets/inventory/lamborghini-aventador-2018.jpg"
    },
    {
        "year": "2015",
        "make": "Lamborghini",
        "model": "Huracan",
        "price": "900",
        "color": "White",
        "image": "/assets/inventory/lamborghini-huracan-2015.jpg"
    },
    {
        "year": "2018",
        "make": "McLaren",
        "model": "P1",
        "price": "1850",
        "color": "Yellow",
        "image": "/assets/inventory/mclaren-p1-2018.jpg"
    },
    {
        "year": "2020",
        "make": "Mercedes",
        "model": "G63",
        "price": "500",
        "color": "Black",
        "image": "/assets/inventory/mercedes-g63-2020.jpg"
    },
    {
        "year": "2021",
        "make": "Mercedes",
        "model": "GLE63",
        "price": "450",
        "color": "Black",
        "image": "/assets/inventory/mercedes-gle63-2021.jpg"
    },
    {
        "year": "2019",
        "make": "Pagani",
        "model": "Huayra",
        "price": "25,000",
        "color": "Blue",
        "image": "/assets/inventory/pagani-huayra-2019.jpg",
        "locationIds": ["3"]
    },
    {
        "year": "2018",
        "make": "Porsche",
        "model": "Boxster",
        "price": "250",
        "color": "Blue",
        "image": "/assets/inventory/porsche-boxster-2018.jpg"
    },
    {
        "year": "2020",
        "make": "Porsche",
        "model": "Cayman",
        "price": "250",
        "color": "Yellow",
        "image": "/assets/inventory/porsche-cayman-2020.jpg"
    },
    {
        "year": "2020",
        "make": "Ford",
        "model": "Shelby GT350",
        "price": "250",
        "color": "Blue",
        "image": "/assets/inventory/shelby-gt350-2020.jpg"
    }
];

const seedCars = () => Car.bulkCreate(carData);

module.exports = seedCars;