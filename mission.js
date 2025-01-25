// mission.js
const themeSelector = document.querySelector('#themeSelector');
const body = document.body;
const logo = document.querySelector('#logo');

function changeTheme() {
  // Check the selected value
  const selectedTheme = themeSelector.value;

  if (selectedTheme === 'dark') {
    body.classList.add('dark'); // Apply the dark theme
    logo.src = 'images/byui-logo_white.png'; // Update to the correct path for the white logo
  } else {
    body.classList.remove('dark'); // Revert to light theme
    logo.src = 'images/byui-logo-blue.webp'; // Update to the correct path for the blue logo
  }
}

// Add event listener to dropdown
themeSelector.addEventListener('change', changeTheme);
