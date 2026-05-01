document.addEventListener('DOMContentLoaded', function() {
    // Forma validacija
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            const ime = document.getElementById('ime').value.trim();
            const email = document.getElementById('email').value.trim();
            const poruka = document.getElementById('poruka').value.trim();

            if (!ime || !email || !poruka) {
                alert('Molimo popunite sva polja.');
                e.preventDefault();
            } else if (!/\S+@\S+\.\S+/.test(email)) {
                alert('Molimo unesite valjanu email adresu.');
                e.preventDefault();
            } else {
                alert('Poruka je poslana!');
            }
        });
    }

    // Filter atrakcija
    const filterGumbi = document.querySelectorAll('.filter-btn');
    const kartice = document.querySelectorAll('.kartica');

    filterGumbi.forEach(function(gumb) {
        gumb.addEventListener('click', function() {
            filterGumbi.forEach(function(g) {
                g.classList.remove('active');
            });
            gumb.classList.add('active');

            const filter = gumb.dataset.filter;

            kartice.forEach(function(kartica) {
                if (filter === 'sve') {
                    kartica.style.display = 'block';
                } else if (kartica.dataset.kategorija === filter) {
                    kartica.style.display = 'block';
                } else {
                    kartica.style.display = 'none';
                }
            });
        });
    });
});