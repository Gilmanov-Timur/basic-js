const CustomError = require("../extensions/custom-error");

const chainMaker = {
	_chain: [],
	getLength() {
		return this._chain.length
	},
	addLink(value) {
		if (!arguments.length) {
			this._chain.push('( )')
		} else if (value === null) {
			this._chain.push('( null )')
		} else {
			this._chain.push('( ' + value.toString() + ' )')
		}
		return this
	},
	removeLink(position) {
		if (Number.isInteger(position) && position > 0 && position <= this.getLength()) {
			this._chain.splice(position - 1, 1)
			return this
		}
		this._chain = []
		throw new Error()
	},
	reverseChain() {
		this._chain.reverse()
		return this
	},
	finishChain() {
		const result = this._chain.join('~~')
		this._chain = []
		return result
	}
};

module.exports = chainMaker;
