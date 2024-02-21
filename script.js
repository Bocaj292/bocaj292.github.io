const toggleSwitch = document.getElementById('toggle');

// Function to switch to dark mode
function switchToDarkMode() {
    document.body.classList.add('dark-mode');
    // Store the user preference for dark mode in local storage
    localStorage.setItem('mode', 'dark');
}

// Function to switch to light mode
function switchToLightMode() {
    document.body.classList.remove('dark-mode');
    // Store the user preference for light mode in local storage
    localStorage.setItem('mode', 'light');
}

// Function to toggle dark mode
function toggleDarkMode() {
    if (toggleSwitch.checked) {
        switchToDarkMode();
    } else {
        switchToLightMode();
    }
}

// Apply dark mode based on user's preference stored in local storage
function applyDarkModeOnLoad() {
    const mode = localStorage.getItem('mode');
    if (mode === 'dark') {
        toggleSwitch.checked = true; // Set toggle switch to 'checked' state
        switchToDarkMode();
    } else {
        toggleSwitch.checked = false; // Set toggle switch to 'unchecked' state
        switchToLightMode();
    }
}

// Event listener for toggle switch
toggleSwitch.addEventListener('change', toggleDarkMode);

// Apply dark mode on page load
applyDarkModeOnLoad();
