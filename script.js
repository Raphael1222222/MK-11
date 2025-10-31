document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const videoBg = document.querySelector('.video-background');
    const sections = document.querySelectorAll('header, section, footer');
    const video = document.getElementById('bgVideo');
    const reptile = document.getElementById('reptile-egg');

    // Quando o vídeo estiver pronto, remove o loader e mostra o conteúdo
    video.addEventListener('canplaythrough', () => {
        loader.style.display = 'none';
        videoBg.style.display = 'block';
        sections.forEach(el => el.style.display = 'block');
    });

    // Easter Egg do Reptile
    if (reptile) {
        reptile.addEventListener('click', () => {
            window.location.href = 'reptile.html';
        });
    }
});