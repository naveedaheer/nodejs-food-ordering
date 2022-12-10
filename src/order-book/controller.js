const express = require("express");
const router = express.Router();
const orderBookService = require("./services");

const foodItems = [
  {
    id: '1',
    name: "Sandwich",
    imageUrl: 'https://hamariweb.com/recipes/images/recipeimages/483.jpg',
    price: 10,
    availableQty: 95,
    description: "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type.",

    id: '2',
    name: "Burger King",
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6zFRuYZrR7fObTrM7pRszE0D67CoF84YVnA&usqp=CAU',
    price: 50,
    availableQty: 35,
    description: "Now serving all your favourite burgers in soft-n-fresh potato bun. The buns are specially selected to enhance the flavour of each bite.",

    id: '3',
    name: "Chicken Tikka",
    imageUrl: 'https://www.charbroil.com/media/ctm//T/a/Tandoori-Style_Grilled_Chicken_Tikka_Masala.jpg.jpeg',
    price: 10,
    availableQty: 95,
    description: "How to make chicken tikka kebabs · Place the chicken pieces into a bowl with yogurt, garlic, ginger, lemon juice, coriander, turmeric, cumin.",

    id: '1',
    name: "sandwich",
    imageUrl: '',
    price: 10,
    availableQty: 95,
    description: "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type.",

    id: '1',
    name: "sandwich",
    imageUrl: '',
    price: 10,
    availableQty: 95,
    description: "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type.",

    id: '1',
    name: "sandwich",
    imageUrl: '',
    price: 10,
    availableQty: 95,
    description: "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type."
  }
]

router.get("/fetch-order-books", (req, res) => {
  orderBookService
    .getOrderBooks(req.query)
    .then(async (data) => {
      await res.status(200).send(data);
    })
    .catch((err) => res.status(400).send(err));
});

router.get("/get-currency-pairs", (req, res) => {
  orderBookService
    .currencyPairs()
    .then(async (data) => {
      await res.status(200).send(data);
    })
    .catch((err) => res.status(400).send(err));
});

router.get("/menu-items", (req, res) => {
  try {
    return res.status(200).send(foodItems)
  } catch (error) {
    return res.status(400).send(err)
  }
});

module.exports = router;
