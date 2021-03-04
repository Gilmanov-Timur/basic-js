const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
	_depth = 0
	_max = 0
	calculateDepth(arr, isRecursive) {
		let max

		if (Array.isArray(arr)) {
			this._depth++
			this._max = Math.max(this._depth, this._max);
			arr.forEach(item => {
				if (Array.isArray(item)) {
					this.calculateDepth(item, true)
				}
			})
			this._depth--
		}

		max = this._max

		if (!isRecursive) {
			this._depth = 0
			this._max = 0
		}

		return max
	}
};