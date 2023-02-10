$(function() {
  $('.navbar-burger').on('click', function() {
    $(this).toggleClass('is-active');
    $('#mainNav').toggleClass('is-active');
  });
});
