document.addEventListener('DOMContentLoaded', function() {
    
    //inicia menu side
    //var burger = document.querySelectorAll('.sidenav');
    //var inst_burger = M.Sidenav.init(burger, {});    

    //inicia scrollpy
    var scroll_id = document.querySelectorAll('.scrollspy');
    var inst_scroll = M.ScrollSpy.init(scroll_id, {
        throttle: 5,
        scrollOffset: 100
    });


      //inicia zoom
      var elems = document.querySelectorAll('.materialboxed');
      var instances = M.Materialbox.init(elems);
})
  



