$(document).ready(function () {
  $('#menu-button').on('click', function () {
    $('.animated-icon3').toggleClass('open');
  });
  $("#navbarNav .nav-item").on('click', function (){
  	     var id = $(this).attr('content');
         /*CLOSE MENU*/
         $('.animated-icon3').toggleClass('open');
         $('#navbarNav').toggleClass('show');
         $('#menu-button').attr('aria-expanded','false');
         $('#menu-button').toggleClass('collapsed');
         /*SCROLL TO */
         $('html,body').animate({
            scrollTop: $("#"+id).first().offset().top - 70
         }, 1500);
   });
});

           
