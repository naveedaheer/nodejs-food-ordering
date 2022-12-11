const express = require("express");
const router = express.Router();
const orderBookService = require("./services");

const foodItems = [
  {
    id: 1,
    name: "Sandwich",
    imageUrl: 'https://static.toiimg.com/photo/92494266.cms',
    price: 10,
    availableQty: 95,
    description: "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread."
  },
  {
    id: 2,
    name: "Burger King",
    imageUrl: "https://recipes.timesofindia.com/thumb/83565509.cms?width=1200&height=900",
    price: 50,
    availableQty: 35,
    description: "Now serving all your favourite burgers in soft-n-fresh potato bun. The buns are specially selected.",
  },
  {
    id: 3,
    name: "Chicken Tikka",
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Tandoori_chicken_laccha_piyaz1_%2836886283595%29.jpg/1200px-Tandoori_chicken_laccha_piyaz1_%2836886283595%29.jpg',
    price: 10,
    availableQty: 0,
    description: "How to make chicken tikka kebabs · Place the chicken pieces into a bowl with yogurt, garlic, ginger.",
  },
  {
    id: 4,
    name: "Pizza",
    imageUrl: 'https://static.toiimg.com/photo/msid-87930581/87930581.jpg',
    price: 10,
    availableQty: 33,
    description: "Pizza hut is going through a transition phase at the moment. we will be back soon with better quality and service.",
  },

  {
    id: 5,
    name: "Soup",
    imageUrl: 'https://www.eatthis.com/wp-content/uploads/sites/4/2022/01/hot-and-sour-soup.jpg?quality=82&strip=all',
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
