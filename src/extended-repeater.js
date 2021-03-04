const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	if (str === null) {
		str = 'null'
	} else {
		str = `${str}`
	}
	options = {
		repeatTimes: 1,
		separator: '+',
		additionSeparator: '|',
		additionRepeatTimes: 1,
		...options
	}
	if (options.addition === null) {
		options.addition = 'null'
	}

	const additionStr = typeof options.addition !== 'undefined' ? Array(options.additionRepeatTimes).fill(`${options.addition}`).join(options.additionSeparator) : ''
	const output = Array(options.repeatTimes).fill(str + additionStr)

	return output.join(options.separator)
};
  