const config = require("../../config/config");
const fetch = require("node-fetch");

const getOrderBooks = (params) => {
  return fetch(
    `${config.baseURL}/depth?symbol=${params.pair}&limit=${params.limit}`,
    {
      method: "GET",
      headers: config.customHeaders,
    }
  )
    .then(async (response) => {
      return await response.json();
    })
    .catch((err) => {
      return err;
    });
};

const currencyPairs = () => {
  return fetch(
    `${config.baseURL}/ticker/price`,
    {
      method: "GET",
      headers: config.customHeaders,
    }
  )
    .then(async (response) => {
      return await response.json();
    })
    .catch((err) => {
      return err;
    });
};

module.exports = {
  getOrderBooks,
  currencyPairs
};
