
document.addEventListener('DOMContentLoaded', function() {
    
    //inicia menu side
    var burger = document.querySelectorAll('.sidenav');
    var inst_burger = M.Sidenav.init(burger, {});
    
    //inicia slide de inicio
    var slice_id = document.querySelectorAll('.slider');
    var inst_slice = M.Slider.init(slice_id,{
        height:600,
        indicators: false,
        interval: 3000

    });
    
    //inicia slide de inicio
    var parala_index = document.querySelectorAll('.parallax');
    var id_paralax = M.Parallax.init(parala_index, {});
    
    //inicia scrollpy
    var scroll_id = document.querySelectorAll('.scrollspy');
    var inst_scroll = M.ScrollSpy.init(scroll_id, {
        throttle: 5,
        scrollOffset: 100
    });


    
    // Inicializa la página con el contenido predeterminado en el idioma especificado
     changeLanguage('es');
   
})

// Función para animar un elemento cuando entra al viewport
    function animarElementoOnScroll(elementoId) {
    const elemento = document.querySelector(elementoId);
  
    // Verificar si el elemento está dentro del viewport
    if (elemento.getBoundingClientRect().top < window.innerHeight) {
      // Iniciar la animación
      elemento.classList.add("animado");
    } else if (elemento.getBoundingClientRect().top > window.innerHeight) {
      // Quitar la clase "animado"
      elemento.classList.remove("animado");
    }
  }
  
  // Agrega un event listener al evento scroll para cada elemento
  document.addEventListener("scroll", function() {
    animarElementoOnScroll("#sobre_mí");
  });
  
  document.addEventListener("scroll", function() {
    animarElementoOnScroll("#servicios");
  });

  document.addEventListener("scroll", function() {
    animarElementoOnScroll("#certificados");
  });

  document.addEventListener("scroll", function() {
    animarElementoOnScroll("#portafolio");
  });
  



