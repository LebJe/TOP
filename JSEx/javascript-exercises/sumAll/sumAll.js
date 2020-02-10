const sumAll = function(b, e) {
	
	const tb = typeof b;
	const te = typeof e;
	
	if (tb != "number" && te != "number") {
		return "ERROR";
	} else {

		if (b >= 0 && e >= 0) {

			if (b < e) {
				
				let sum = b;
	
				for (let i = b + 1; i <= e; i++) {
					sum = sum + i;
					
				}
	
				return sum;
	
			} else {
				
				let sum = e;
	
				for (let i = e + 1; i <= b; i++) {
					sum = sum + i;
					
				}
	
				return sum;
	
			}
	
		} else {
			return "ERROR";
		}

	}

}

module.exports = sumAll
