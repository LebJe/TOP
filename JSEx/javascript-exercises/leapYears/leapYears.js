const leapYears = function(year) {
	let db4 = year / 4;

	let db100 = year / 400;

	if (db4 % 1 === 0) {
		return true;
	} else if (db100 % 1 === 0) {
		return true;
	} else {
		return false;
	}
}

module.exports = leapYears
