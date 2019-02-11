$(window).scroll(function(){
  var scrollvar = $(this).scrollTop();

  $(".header__figure--one").css("transform", 'translate(0px,-' + scrollvar /2 + '%)');
  $(".header__figure--two").css("transform", 'translate(0px,-' + scrollvar /2 + '%)');
})