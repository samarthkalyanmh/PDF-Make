var styles = require("../styles"),
  table = require("./table"),
  pricingFactTable = require("./pricingFact");

module.exports = function (data) {
  var dd = {
    content: [],
    styles: styles,
  };

  dd.content.push(table(data));
  dd.content.push(pricingFactTable(data));

  return dd;
};
