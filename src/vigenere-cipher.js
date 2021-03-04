const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
	_alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	constructor(isReverse) {
		this.isReverse = isReverse === false
	}
	encrypt(message, key) {
		if (arguments.length < 2) {
			throw new Error()
		}

		message = message.toUpperCase()
		key = key.toUpperCase()

		const maxlength = Math.max(message.length, key.length);
		const result = Array(maxlength).fill(null);
		const encryptableLetters = []
		const encryptedMessage = []

		message.split('').forEach((symbol, index) => {
			if (this._alphabet.indexOf(symbol) === -1) {
				result[index] = symbol
			} else {
				encryptableLetters.push(symbol)
			}
		})

		for (let i = 0; i < encryptableLetters.length; i++) {
			let messageIndex = this._alphabet.indexOf(encryptableLetters[i < encryptableLetters.length ? i : i % encryptableLetters.length]);
			let keyIndex = this._alphabet.indexOf( key[i < key.length ? i : i % key.length] );
			let symbol = messageIndex !== -1 ? this._alphabet[ ( this._alphabet.length +  messageIndex + keyIndex  ) % this._alphabet.length ] : encryptableLetters[i];
			encryptedMessage.push(symbol)
		}

		result.forEach((symbol, index) => {
			if (symbol === null) {
				result[index] = encryptedMessage.shift()
			}
		})

		return this.isReverse ? result.reverse().join('') : result.join('')
	}
	decrypt(message, key) {
		if (arguments.length < 2) {
			throw new Error()
		}

		message = message.toUpperCase()
		key = key.toUpperCase()

		const maxlength = Math.max(message.length, key.length);
		const result = Array(maxlength).fill(null);
		const decryptableLetters = []
		const encryptedMessage = []

		message.split('').forEach((symbol, index) => {
			if (this._alphabet.indexOf(symbol) === -1) {
				result[index] = symbol
			} else {
				decryptableLetters.push(symbol)
			}
		})

		for (let i = 0; i < decryptableLetters.length; i++) {
			let messageIndex = this._alphabet.indexOf( decryptableLetters[i < decryptableLetters.length ? i : i % decryptableLetters.length]);
			let keyIndex = this._alphabet.indexOf( key[i < key.length ? i : i % key.length] );
			let symbol = messageIndex !== -1 ? this._alphabet[ ( this._alphabet.length +  messageIndex + -keyIndex  ) % this._alphabet.length ] : decryptableLetters[i];
			encryptedMessage.push(symbol)
		}

		result.forEach((symbol, index) => {
			if (symbol === null) {
				result[index] = encryptedMessage.shift()
			}
		})

		return this.isReverse ? result.reverse().join('') : result.join('')
	}
}

module.exports = VigenereCipheringMachine;
