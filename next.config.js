// next.config.js
require('dotenv').config();

module.exports = {
  env: {
    GOOGLE_MAP_KEY: process.env.GoogleMapKey,
  },
};