// 01 - Menu Toggle Functionality
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector("nav ul"); // Updated to match your HTML structure

if (menuButton) {
  menuButton.addEventListener("click", () => {
    menu.classList.toggle("hide");
  });
}

// 02 - Handle Window Resize Event
function handleResize() {
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

handleResize(); // Ensure menu visibility on page load
window.addEventListener("resize", handleResize);

// 03 - Image Viewer Modal Functionality
function viewerTemplate(pic, alt) {
  return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}">
  </div>`;
}

function viewHandler(event) {
  if (event.target.tagName === "IMG") {
    const imgSrc = event.target.src.replace("-sm", "-full"); // Update the full image path
    const imgAlt = event.target.alt;

    // Insert viewer modal into the body
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(imgSrc, imgAlt));

    // Attach close viewer event
    const closeButton = document.querySelector(".close-viewer");
    closeButton.addEventListener("click", closeViewer);

    // Close viewer when clicked outside of the image
    document.querySelector(".viewer").addEventListener("click", (e) => {
      if (e.target === e.currentTarget) {
        closeViewer();
      }
    });
  }
}

function closeViewer() {
  const viewer = document.querySelector(".viewer");
  if (viewer) {
    viewer.remove(); // This removes the modal when the X button or outside is clicked
  }
}

// Add event listener for gallery clicks
document.querySelector(".gallery").addEventListener("click", viewHandler);

// 04 - Custom Zoom Functionality
let zoomLevel = 1; // Default zoom level

function updateZoom() {
  document.body.style.transform = `scale(${zoomLevel})`;
  document.body.style.transformOrigin = "top left"; // Keep it consistent from top-left corner
}

// Event listener for Ctrl+ and Ctrl- keys
document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === "+" && zoomLevel < 2) {
    zoomLevel += 0.1; // Increase zoom
    updateZoom();
  }
  if (event.ctrlKey && event.key === "-" && zoomLevel > 0.5) {
    zoomLevel -= 0.1; // Decrease zoom
    updateZoom();
  }
});

// Optional: Reset zoom when Ctrl+0 is pressed
document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === "0") {
    zoomLevel = 1; // Reset zoom
    updateZoom();
  }
});
