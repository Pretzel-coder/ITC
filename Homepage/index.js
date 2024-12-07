const toggleButton = document.getElementById('toggleIcon');
const body = document.body;
const dayVideo = document.getElementById('dayVideo');
const nightVideo = document.getElementById('nightVideo');
const links = document.querySelectorAll('.navbar a');
var isNightMode = false;

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default link action

        // Applying fade-out effect
        document.body.classList.add('fade-out');

        // Navigate to the new page smoothly
        setTimeout(() => {
            window.location.href = e.target.href;
        }, 500);
    });
});

// Script for Day and Night Mode //
toggleButton.addEventListener('click', function() {
    if (isNightMode) {
        body.classList.remove('night');
        body.classList.add('day');
        dayVideo.classList.add('active');
        nightVideo.classList.remove('active');
        toggleButton.textContent = '🌞';
    } else {
        body.classList.remove('day');
        body.classList.add('night');
        dayVideo.classList.remove('active');
        nightVideo.classList.add('active');
        toggleButton.textContent = '🌙';
    }
    isNightMode = !isNightMode;
});

//Pops out when a user clicks on a project//
function startJourney() {
    alert('Starting your journey!');
}