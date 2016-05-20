$(document).ready(function(){
  $('#login').hide();

  $('.slider').slider({full_width: true, indicators: false, transition: 1000});

  $('#login-btn').click(function(){
    $('#button-login').hide(1000);
    $('#login').fadeIn(1000);
  });
});
