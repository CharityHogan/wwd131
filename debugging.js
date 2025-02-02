const PI = 3.14; // Corrected capitalization of 'pi'
let radius = 3;  // Changed 'const' to 'let' to allow reassignment
let area = 0;

area = radius * radius * PI; // Using the correct variable name
console.log("Area1:", area); // Added console.log to check the output

radius = 4;
area = radius * radius * PI;
console.log("Area2:", area); // Logging the second area calculation

// Activity 2 - Refactored with a function
function circleArea(radius) {
  return radius * radius * PI; // Added return statement and corrected calculation
}

area = circleArea(3);
console.log("Area1:", area);

area = circleArea(4);
console.log("Area2:", area);
