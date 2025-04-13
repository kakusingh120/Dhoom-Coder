 // Mobile menu toggle
 document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const menu = document.getElementById('mobile-menu');
    const toggle = document.getElementById('menu-toggle');
    
    if (!menu.contains(event.target) && !toggle.contains(event.target)) {
        menu.classList.add('hidden');
    }
});