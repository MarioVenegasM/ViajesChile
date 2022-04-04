$(function() {
    // Para poner tooltip en cualquier lado 
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
    // Boton de enviar con un Alert
    $('#botonEnviar').click(function() {
        alert("El mensaje fue enviado correctamente...");
    });
    // Card-body desaparece al hacer click sobre las imagenes
    $('.desaparecer').click(function() {
        $('.aparece-desaparece').toggle();
    });
    // texto de seccion ¡Quienes somos? cambia de color
    $('.cambiaColor').on('dblclick', function() {
        $(this).css({
            "color": "#adff02"
        })
    });


    $(".classIni").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('#inicio').animate({
                scrollTop: $(hash).offset().top
            }, 1800, function() {
                window.location.hash = hash;
            });
        }
    });

    $(".classQuien").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('#quienesSomos').animate({
                scrollTop: $(hash).offset().top
            }, 1800, function() {
                window.location.hash = hash;
            });
        }
    });

    $(".classDes").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('#destacados').animate({
                scrollTop: $(hash).offset().top
            }, 1800, function() {
                window.location.hash = hash;
            });
        }
    });

    $(".classCont").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('#contacto').animate({
                scrollTop: $(hash).offset().top
            }, 1800, function() {
                window.location.hash = hash;
            });
        }
    });

});