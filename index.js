var symbols = [];

require("fs").readdirSync("./data").forEach(function(file) {
  symbols = symbols.concat(require("./data/" + file));
});

module.exports = symbols;
