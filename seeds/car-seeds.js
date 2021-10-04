const Car = require('../models/Car');

const carData = [
    {
        "year": "2018",
        "make": "McLaren",
        "model": "P1",
        "price": "1850",
        "color": "Yellow",
        "image": "/assets/inventory/mclaren-p1-2018.jpg",
        "overlay": "/assets/mclaren-logo.jpg"
    },
    {
        "year": "2017",
        "make": "Ferrari",
        "model": "485",
        "price": "1750",
        "color": "Red",
        "image": "/assets/inventory/ferrari-485-2017.jpg",
        "overlay": "/assets/ferrari-logo.jpg.png"
    },
    {
        "year": "2018",
        "make": "Porsche",
        "model": "Boxster",
        "price": "250",
        "color": "Blue",
        "image": "/assets/inventory/porsche-boxster-2018.jpg",
        "overlay": "/assets/porsche-logo.jpg"
    },
    {
        "year": "2020",
        "make": "Porsche",
        "model": "Cayman",
        "price": "250",
        "color": "Yellow",
        "image": "/assets/inventory/porsche-cayman-2020.jpg",
        "overlay": "/assets/porsche-logo.jpg"
    },
    {
        "year": "2021",
        "make": "BMW",
        "model": "M4",
        "price": "495",
        "color": "White",
        "image": "/assets/inventory/bmw-m4-2021.jpg",
        "overlay": "/assets/bmw-logo.jpg"
    },
    {
        "year": "2021",
        "make": "Bentley",
        "model": "Bentayga",
        "price": "1350",
        "color": "Silver",
        "image": "/assets/inventory/bently-bentayga-2021.JPG",
        "overlay": "/assets/bentley-logo.jpg"
    },
    {
        "year": "2020",
        "make": "Dodge",
        "model": "Challenger",
        "price": "250",
        "color": "Black",
        "image": "/assets/inventory/dodge-challenger-2020.jpg",
        "overlay": "/assets/dodge-logo.jpg"
    },
    {
        "year": "2022",
        "make": "Corvette",
        "model": "Stingray",
        "price": "600",
        "color": "Black",
        "image": "/assets/inventory/corvette-2022.jpg",
        "overlay": "/assets/vette-logo.jpg"

    },
    {
        "year": "2018",
        "make": "Chevrolet",
        "model": "Camaro",
        "price": "500",
        "color": "Yellow",
        "image": "/assets/inventory/chevrolet-camaro-bumblebee-2018.jpg",
        "overlay": "/assets/chevy-logo1.jpg"
    },
    {
        "year": "2020",
        "make": "Mercedes",
        "model": "G63",
        "price": "500",
        "color": "Black",
        "image": "/assets/inventory/mercedes-g63-2020.jpg",
        "overlay": "/assets/mercedes-logo.jpg"
    },
    {
        "year": "2020",
        "make": "Audi",
        "model": "R8",
        "price": "1000",
        "color": "White",
        "image": "/assets/inventory/audi-r8-2020.jpg",
        "overlay": "/assets/audi-logo.jpg"
    },
    {
        "year": "2016",
        "make": "Dodge",
        "model": "Viper",
        "price": "850",
        "color": "Black",
        "image": "/assets/inventory/dodge-viper-2016.jpg",
        "overlay": "/assets/dodge-logo.jpg"
    },
    {
        "year": "2020",
        "make": "Ford",
        "model": "Shelby GT350",
        "price": "250",
        "color": "Blue",
        "image": "/assets/inventory/shelby-gt350-2020.jpg",
        "overlay": "/assets/shelby-logo.jpg"

    },
    {
        "year": "2021",
        "make": "Mercedes",
        "model": "GLE63",
        "price": "450",
        "color": "Black",
        "image": "/assets/inventory/mercedes-gle63-2021.jpg",
        "overlay": "/assets/mercedes-logo.jpg"
    },
    {
        "year": "2018",
        "make": "Bugatti",
        "model": "Veyron",
        "price": "22000",
        "color": "Black",
        "image": "/assets/inventory/bugatti-veyron-2018.jpg",
        "overlay": "/assets/bugatti-logo.jpg"
    },
    {
        "year": "2018",
        "make": "Lamborghini",
        "model": "Aventador",
        "price": "2500",
        "color": "Orange",
        "image": "/assets/inventory/lamborghini-aventador-2018.jpg",
        "overlay": "/assets/lambo-logo.jpg"
    },
    {
        "year": "2019",
        "make": "Pagani",
        "model": "Huayra",
        "price": "25000",
        "color": "Blue",
        "image": "/assets/inventory/pagani-huayra-2019.jpg",
        "overlay": "/assets/pagani-logo.jpg"
    },
    {
        "year": "2015",
        "make": "Lamborghini",
        "model": "Huracan",
        "price": "900",
        "color": "White",
        "image": "/assets/inventory/lamborghini-huracan-2015.jpg",
        "overlay": "/assets/lambo-logo.jpg"
    },
    {
        "year": "2020",
        "make": "Audi",
        "model": "R8",
        "price": "1000",
        "color": "Red",
        "image": "/assets/extra-inventory/audi-r8-2020-red.jpg",
        "overlay": "/assets/audi-logo.jpg"
    },
    {
        "year": "2015",
        "make": "BMW",
        "model": "i8",
        "price": "600",
        "color": "Gray",
        "image": "/assets/extra-inventory/bmw-i8-2015-gray.jpg",
        "overlay": "/assets/bmw-logo.jpg"
    },
    {
        "year": "2016",
        "make": "Dodge",
        "model": "Challenger",
        "price": "250",
        "color": "Purple",
        "image": "/assets/extra-inventory/dodge-challenger-2016-purple.jpg",
        "overlay": "/assets/dodge-logo.jpg"
    },
    {
        "year": "2019",
        "make": "Ford",
        "model": "GT",
        "price": "2000",
        "color": "Black",
        "image": "/assets/extra-inventory/ford-gt-2019-black.jpg",
        "overlay": "/assets/ford-gt-logo.jpg"
    },
    {
        "year": "2015",
        "make": "Ford",
        "model": "Mustang",
        "price": "250",
        "color": "Yellow",
        "image": "/assets/extra-inventory/ford-mustang-2015-yellow.jpg",
        "overlay": "/assets/mustang-logo.jpg"

    },
    {
        "year": "2009",
        "make": "Hummer",
        "model": "H2",
        "price": "400",
        "color": "Orange",
        "image": "/assets/extra-inventory/hummer-h2-2009-orange.jpg",
        "overlay": "/assets/hummer-logo.jpg"
    },
    {
        "year": "2018",
        "make": "Lamborghini",
        "model": "Aventador",
        "price": "2600",
        "color": "Pink",
        "image": "/assets/extra-inventory/lamborghini-aventador-2018-pink.jpg",
        "overlay": "/assets/lambo-logo.jpg"
    },
    {
        "year": "2018",
        "make": "Lexus",
        "model": "LFA",
        "price": "300",
        "color": "Yellow",
        "image": "/assets/extra-inventory/lexus-lfa-2018-orange.jpg",
        "overlay": "/assets/lexus-logo.jpg"
    },
    {
        "year": "2020",
        "make": "McLaren",
        "model": "Spider",
        "price": "2100",
        "color": "Blue",
        "image": "/assets/extra-inventory/mclaren-spider-2020-blue.jpg",
        "overlay": "/assets/mclaren-logo.jpg"
    },
    {
        "year": "2020",
        "make": "Mercedes",
        "model": "GT",
        "price": "1245",
        "color": "Orange",
        "image": "/assets/extra-inventory/mercedes-gt-2020-orange.jpg",
        "overlay": "/assets/mercedes-logo.jpg"
    },
    {
        "year": "2021",
        "make": "Nissan",
        "model": "GTR",
        "price": "450",
        "color": "White",
        "image": "/assets/extra-inventory/2021-nissan-gtr.jpg",
        "overlay": "/assets/nissan-logo.jpg"
    },
    {
        "year": "2020",
        "make": "Aston Martin",
        "model": "SL",
        "price": "2000",
        "color": "Green",
        "image": "/assets/extra-inventory/aston-superleggera-2020.jpg",
        "overlay": "/assets/asm-logo.jpg"
    }
];

const seedCars = () => Car.bulkCreate(carData);

module.exports = seedCars;