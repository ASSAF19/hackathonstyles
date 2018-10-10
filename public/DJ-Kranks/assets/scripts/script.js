  $(document).ready(function() {
        $('.carousel').carousel({
            interval: 5000
        }); 
        $('.carousel').carousel('cycle');
    
   $('#top-nav').onePageNav({
                 currentClass: 'active',
                 changeHash: true,
                 scrollSpeed: 500
            });


});



  // animation
$(window).scroll(function() {
    $('#about,.album,.blogevent ul li').each(function(){
    var elementPos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (elementPos < topOfWindow+400) {
        $(this).addClass("animated fadeInUp");
      }
    });


    $('h3,h4').each(function(){
    var elementPos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (elementPos < topOfWindow+500) {
        $(this).addClass("animated fadeInUp");
      }
    });


  });
  $('.button1').on('click', function () {
    $('.Tecno-app').append('<iframe class="djs" width="0" height="0" src="https://www.youtube.com/embed/LcNXG-6SqWA?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')
 })
 $('#stop').on('click', function () {
    $('.djs').remove()
 })