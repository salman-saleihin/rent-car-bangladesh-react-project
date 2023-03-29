// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
  {
    id: 1,
    brand: "Tesla",
    rating: 112,
    carName: "Tesla Premium",
    imgUrl: img01,
    model: "Model 3",
    price: 8600,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Tesla Inc (Tesla) is an automotive and energy company. It designs, develops, manufactures, sells, and leases electric vehicles and energy generation and storage systems. The company produces and sells the Model Y, Model 3, Model X, Model S,Tesla Roadster vehicles.",
  },

  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota Deluxe",
    imgUrl: img02,
    model: "Model-2022",
    price: 5200,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Toyota Motor Corp (Toyota) is an automobile manufacturer. The company designs, manufactures and sells passenger cars, buses, minivans, trucks, specialty cars, recreational and sport-utility vehicles. It provides financing to dealers and customers for the purchase or lease of vehicles.",
  },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "BMW X3",
    imgUrl: img03,
    model: "Model-2022",
    price: 6500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The BMW X3 is a compact luxury crossover SUV manufactured by BMW since 2003, based on the BMW 3 Series platform. Now in its third generation, BMW markets",
  },

  {
    id: 4,
    brand: "Nissan",
    rating: 102,
    carName: "Nissan Superior",
    imgUrl: img04,
    model: "Model-2022",
    price: 5900,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Nissan Motor Co Ltd (Nissan) is an automobile manufacturer. It carries out the design, production and sale of automobile products. The company's product portfolio includes sedans, compact cars, SUVs, sports cars, mini vans, kei cars, light commercial vehicles, and related parts.",
  },

  {
    id: 5,
    brand: "Ferrari",
    rating: 94,
    carName: "Ferrari Premium",
    imgUrl: img05,
    model: "Model-2022",
    price: 7045,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Ferrari is an Italian luxury sports car manufacturer based in Maranello, Italy. Founded by Enzo Ferrari (1898–1988) in 1939 from the Alfa Romeo racing division as Auto Avio Costruzioni, the company built its first car in 1940, and produced its first Ferrari-badged car in 1947.",
  },

  {
    id: 6,
    brand: "Mercedes",
    rating: 119,
    carName: "Mercedes Benz XC90",
    imgUrl: img06,
    model: "Model-2022",
    price: 7585,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "It develops, manufactures and distributes premium and luxury cars and vans. The company also offers various services such as financing, leasing, car subscription, car rental, fleet management, insurance brokerage, digital services for charging and payment, besides innovative mobility services.",
  },

  {
    id: 7,
    brand: "Audi",
    rating: 82,
    carName: "Audi Fiesta",
    imgUrl: img07,
    model: "Model 3",
    price: 6500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The AUDI AG stands for sporty vehicles, high build quality and progressive design – for “Vorsprung durch Technik.” The Audi Group is among the world's leading producers of premium cars.",
  },

  {
    id: 8,
    brand: "Colorado",
    rating: 52,
    carName: "Rolls Royce Colorado",
    imgUrl: img08,
    model: "Model 3",
    price: 10500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Rolls-Royce was a British luxury car and later an aero-engine manufacturing business established in 1904 in Manchester by the partnership of Charles Rolls and Henry Royce.",
  },
];

export default carData;
