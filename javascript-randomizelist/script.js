var counter = 0;

function randomize(){
	//Refresh the counter description
	counter++;	
	document.getElementById("counterDescription").innerHTML = "Number of randomize attempts: " + counter + ".";

	//Standard shuffling the list
	var items = document.getElementById("randList").value;
	var split = items.split("\n");
	shuffle(split);
	//console.log(split);

	document.getElementById("randList").value = "";

	for(i = 0; i < split.length; i++){
		if(i === split.length - 1){
			document.getElementById("randList").value += split[i];
		} else {
			document.getElementById("randList").value += split[i] + "\n";
		}
	}
}

function randomizeAndEliminate(){
	//Refresh the counter description
	counter++;
	document.getElementById("counterDescription").innerHTML = "Number of randomize attempts: " + counter + ".";

	//Standard shuffling the list
	var items = document.getElementById("randList").value;
	var split = items.split("\n");
	shuffle(split);

	//Check for list length
	if(split.length > 1){
		//Print the removed element to inform the user on what was removed
		var removedElement = split.pop();
		document.getElementById("description").innerHTML = "Removed " + removedElement + " from list!";
		document.getElementById("randList").value = "";

		for(i = 0; i < split.length; i++){
			if(i === split.length - 1){
				document.getElementById("randList").value += split[i];
			} else {
				document.getElementById("randList").value += split[i] + "\n";
			}
		}
	} else {
		document.getElementById("description").innerHTML = "Cannot randomize the list anymore!";
	}
}

function randomizeToLast(){
	
}

function shuffle(array) {
    var j, x, i;
    for (i = array.length; i; i--) {
    	//console.log(i);
       j = Math.floor(Math.random() * i);
       x = array[i - 1];
       array[i - 1] = array[j];
       array[j] = x;
   }
}