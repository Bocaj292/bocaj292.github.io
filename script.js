const toggleSwitch = document.getElementById('toggle');

// Function to switch to dark mode
function switchToDarkMode() {
    document.body.classList.add('dark-mode');
}

// Function to switch to light mode
function switchToLightMode() {
    document.body.classList.remove('dark-mode');
}

// Event listener for toggle switch
toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        switchToDarkMode();
    } else {
        switchToLightMode();
    }
});