function volume_sphere() {
    //Write your code here
	 // Prevent form reload
    event.preventDefault();
    // Step 1: Get the radius value from input
	let radius = document.getElementById("radius").value;

	// Step 2: Convert it to a number
	radius = parseFloat(radius);

	// step 3:Validate input (must be a non-negative number)
	if(isNaN(radius) || radius < 0) {
		document.getElementById("volume").value = NaN;
		return false;
	}
	
   // Step 4: Calculate volume using formula (4/3) * π * r³
   let volume = (4/3) * Math.PI * Math.pow(radius, 3);

	// step 5: round to 4 decimal places
	volume = volume.toFixed(4);

	// step 6: display result in volume
	document.getElementById("volume").value = volume

	return false;
}
	
  // Attach function to form submit
 window.onload = function () {
  document.getElementById('MyForm').onsubmit = volume_sphere;
};
