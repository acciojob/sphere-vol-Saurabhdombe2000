function volume_sphere() {
    //Write your code here
	 // Prevent form reload
  event.preventDefault();

  // Get the radius input value
  let radius = document.getElementById('radius').value;

  // Convert radius to a number
  radius = parseFloat(radius);

  // Check if radius is valid (non-negative and numeric)
  if (isNaN(radius) || radius < 0) {
    document.getElementById('volume').value = NaN;
    return false;
  }

  // Calculate volume: (4/3) * π * r^3
  let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Round to 4 decimal places
  volume = volume.toFixed(4);

  // Display result in the "volume" field
  document.getElementById('volume').value = volume;

  return false;
}

// Attach function to form submit
window.onload = function () {
  document.getElementById('MyForm').onsubmit = volume_sphere;
};
