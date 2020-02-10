const reverseString = function(stringToReverse) {
	
	let split = stringToReverse.split("");

	split.reverse();

	let result = ""

	for (let i = 0; i < split.length; i++) {
		
		result += split[i];
	}

	return result;

}

module.exports = reverseString
