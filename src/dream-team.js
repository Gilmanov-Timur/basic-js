const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	if (!Array.isArray(members)) {
		return false
	}

	members = members.filter(member => typeof member === 'string').map(member => member.trim().charAt(0).toUpperCase()).sort()

	if (!members.length) {
		return false
	}

	return members.join('')
};
