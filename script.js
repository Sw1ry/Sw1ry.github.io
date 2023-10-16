    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
    });

    // Mostra l'overlay di caricamento
    const loaderOverlay = document.getElementById('loader-overlay');

    // Nascondi l'overlay di caricamento dopo 2 secondi
    setTimeout(function () {
        loaderOverlay.style.display = 'none';
        body.classList.remove('loading');
    }, 1500); // 1500 millisecondi (1.5 secondi)
;
