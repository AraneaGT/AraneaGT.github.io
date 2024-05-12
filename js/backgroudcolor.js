const colorPrincipal = window.getComputedStyle(document.querySelector('.colorPrincipal')).color;
document.documentElement.style.setProperty('--color-principal', colorPrincipal);
document.querySelector('meta[name="theme-color"]').setAttribute('content', colorPrincipal);