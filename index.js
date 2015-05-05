var cssjss = require("cssjss");

module.exports = function(source) {
	return cssjss.parse(source);
};
