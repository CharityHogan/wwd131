const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);
document.body.innerHTML = 'Hello World'; // Replaces the body content.
document.getElementById('p2').innerText = 'Hello World'; // Modifies specific element content.
document.querySelector('#p2'); // Targets element with id='p2'.
document.querySelector('.green'); // Targets the first element with class 'green'.
document.querySelectorAll('p'); // Returns all <p> elements.
const greenP = document.querySelector('.green');
const parentSection = greenP.closest('section');

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random image from picsum.");
document.body.appendChild(newImage);
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);
const newSection = document.createElement("section");
const newH2 = document.createElement("h2");
newH2.innerText = "DOM Basics";
newSection.appendChild(newH2);

const newSection = document.createElement("section");
newSection.innerHTML = "<h2>DOM Basics</h2><p>This was added through Javascript</p>";
document.body.appendChild(newSection);