(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');
    const CloseMenuInicio = document.querySelector('.nav__close__inicio');
    const CloseMenuProductos = document.querySelector('.nav__close__productos');
    const CloseMenuContacto = document.querySelector('.nav__close__contacto');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    CloseMenuInicio.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    CloseMenuProductos.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    CloseMenuContacto.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });



    


})();