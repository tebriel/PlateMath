var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

function calculatePlates(desiredWeight) {
	var plates = [45, 35, 25, 10, 5, 2.5];
	var plateObjs = [];
	for (var i=0; i<plates.length; i++) {
		plateObjs.push(new PlateObject(plates[i],true));
	}
	
	
	var remainderWeight = desiredWeight / 2;
	var platePos = 0;
	while (remainderWeight != 0) {
		//Get our current plate we're working with
		var curPlate = plateObjs[platePos];
		
		//Figure out how many we can have
		var numPlates = remainderWeight / curPlate.getWeight();
		
		//If we can use at least one, let's set the int to the qty of the plate
		// and get the remainder for the next plate
		if (numPlates >= 1) {
			curPlate.setQuantity(Math.floor(numPlates) * 2);
			remainderWeight = remainderWeight % curPlate.getWeight();
		}
		platePos++;
		
		//If we run out of plates, break
		if (platePos >= plateObjs.length) {
			break;
		}
	}
	return plateObjs;
}
