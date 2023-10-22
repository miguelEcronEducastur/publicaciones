window.onscroll = function () {
    var botonArriba = document.getElementById('boton-arriba');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        botonArriba.style.display = 'block';
    } else {
        botonArriba.style.display = 'none';
    }
};

