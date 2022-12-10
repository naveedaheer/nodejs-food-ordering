const express = require("express");
const router = express.Router();
const orderBookService = require("./services");

const foodItems = [
  {
    id: 1,
    name: "Sandwich",
    imageUrl: 'https://hamariweb.com/recipes/images/recipeimages/483.jpg',
    price: 10,
    availableQty: 95,
    description: "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type."
  },
  {
    id: 2,
    name: "Burger King",
    imageUrl: "https://recipes.timesofindia.com/thumb/83565509.cms?width=1200&height=900",
    price: 50,
    availableQty: 35,
    description: "Now serving all your favourite burgers in soft-n-fresh potato bun. The buns are specially selected to enhance the flavour of each bite.",
  },
  {
    id: 3,
    name: "Chicken Tikka",
    imageUrl: 'https://www.charbroil.com/media/ctm//T/a/Tandoori-Style_Grilled_Chicken_Tikka_Masala.jpg.jpeg',
    price: 10,
    availableQty: 0,
    description: "How to make chicken tikka kebabs · Place the chicken pieces into a bowl with yogurt, garlic, ginger, lemon juice, coriander, turmeric, cumin.",
  },
  {
    id: 4,
    name: "Pizza",
    imageUrl: 'https://foodnerd.s3.eu-west-1.amazonaws.com/production/image/file/293/Jalal___sons_Lahore.png',
    price: 10,
    availableQty: 33,
    description: "Pizza hut is going through a transition phase at the moment. we will be back soon with better quality and service. We Apologize for the inconvenience.",
  },

  {
    id: 5,
    name: "Soup",
    imageUrl: 'https://www.allrecipes.com/thmb/pTGS0SZsSQK85sV_RQE_K6ZfoN4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/26460-quick-and-easy-chicken-noodle-soup-allrecipes-1x1-1-b88125437574471db3e114c40bc6928e.jpg',
    price: 10,
    availableQty: 102,
    description: "This easy chicken noodle soup recipe made with veggies and leftover chicken is warm, comforting.",
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
