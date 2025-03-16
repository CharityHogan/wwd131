const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];

// Sorting in default order (case-sensitive)
const simpleSort = simpleList.sort();
console.log("Simple Sort (case-sensitive):", simpleSort);

// Sorting in case-insensitive ascending order
const caseInsensitiveSort = [...simpleList].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log("Case-Insensitive Sort:", caseInsensitiveSort);

// Sorting in descending order
const descendingSort = [...simpleList].sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()));
console.log("Descending Sort:", descendingSort);
