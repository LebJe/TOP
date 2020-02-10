const removeFromArray = function(items, ...toBeRemoved) {
	let array = items;

	for (let i = 0; i < items.length; i++) {

		for (let j = 0; j < toBeRemoved.length; j++) {
			
			if (items[i] === toBeRemoved[j]) {
				array.splice(i, 1);
			}
			
		}
		
	}

	return array;
}

module.exports = removeFromArray
