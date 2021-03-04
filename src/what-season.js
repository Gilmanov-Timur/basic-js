const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
	if (!arguments.length) {
		return 'Unable to determine the time of year!'
	}

	if (!(date instanceof Date)) {
		throw new Error()
	}

	try {
		isNaN(date)
	} catch (e) {
		throw new Error()
	}

	const month = date.getMonth()
	const season = month > 1 && month < 5 ? 'spring' : month > 4 && month < 8 ? 'summer' :  month > 7 && month < 11 ? 'autumn' : 'winter'

	return season
};
