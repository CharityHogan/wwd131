// Activity 1 - Map: Convert steps array to list items and display in HTML
const steps = ["one", "two", "three"];
const listTemplate = (step) => `<li>${step}</li>`;
document.querySelector("#myList").innerHTML = steps.map(listTemplate).join("");

// Activity 2 - Map: Convert letter grades to GPA points
const grades = ["A", "B", "A"];
const convertGradeToPoints = (grade) => {
    if (grade === "A") return 4;
    if (grade === "B") return 3;
    return 0; // Default for other grades
};
const gpaPoints = grades.map(convertGradeToPoints);

// Activity 3 - Reduce: Calculate and display GPA
const gpa = gpaPoints.reduce((total, item) => total + item, 0) / gpaPoints.length;
document.querySelector("#gpaDisplay").textContent = `Calculated GPA: ${gpa.toFixed(2)}`;

// Activity 4 - Filter: Display short words (less than 6 characters)
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter((word) => word.length < 6);
document.querySelector("#shortWordsDisplay").textContent = `Short Words: ${shortWords.join(", ")}`;

// Activity 5 - indexOf: Find and display the index of a lucky number
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
const luckyIndex = myArray.indexOf(luckyNumber);
document.querySelector("#luckyIndexDisplay").textContent = 
    luckyIndex !== -1 ? `Lucky number found at index: ${luckyIndex}` : "Lucky number not found.";
