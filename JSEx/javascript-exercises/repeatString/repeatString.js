const repeatString = function(repeatedString, times) {
	if (times >= 0) {

		let result = "";

		for (let i = 0; i < times; i++) {
			
			result += repeatedString;

		}

		return result;

	} else {
		return "ERROR";
	}
}

module.exports = repeatString
