const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
	const turns = Math.pow(2, disksNumber) - 1
	const speed = 3600 / turnsSpeed

	return {
		turns,
		seconds: Math.floor(speed * turns)
	}
};
