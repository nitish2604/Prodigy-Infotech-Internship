document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

const form = document.querySelector('.media-centered');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = form.querySelector('input[type="text"]').value;
    const phone = form.querySelector('input[type="tel"]').value;

    if (name && phone) {
        alert(`Thank you, ${name}! Your reservation request has been received.`);
        form.reset();
    } else {
        alert('Please fill in both fields.');
    }
});
