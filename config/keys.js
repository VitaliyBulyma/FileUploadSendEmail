if (process.env.NODE_ENV === "production") {
  // return production set
  module.exports = require('./prod');
} else {
  // return development set
  module.exports = require('./dev'); 
}
