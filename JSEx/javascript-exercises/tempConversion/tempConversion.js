const ftoc = function(ft) {

	function round(value, precision) {
		var multiplier = Math.pow(10, precision || 0);
		return Math.round(value * multiplier) / multiplier;
	}

	let a = 5 / 9;

	let b = ft - 32;

	return round(b * a, 1);

}

const ctof = function(cs) {

	function round(value, precision) {
		var multiplier = Math.pow(10, precision || 0);
		return Math.round(value * multiplier) / multiplier;
	}

	let a = 9 / 5;

	let b = cs * a;

	return round(b + 32, 1);

}

module.exports = {
  ftoc,
  ctof
}
