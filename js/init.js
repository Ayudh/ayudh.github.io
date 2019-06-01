$(document).ready(() => {
  $('.button-collapse').sideNav(); 
  $('.parallax').parallax();
  $('.collapsible').collapsible();
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  $('.materialboxed').materialbox();
  $('.scrollspy').scrollSpy();
  $('#contact').scrollfire({
    // Offsets
    offset: 100,
    topOffset: 100,
    bottomOffset: 100,
    // Fires once when element begins to come in from the top
    onBottomIn: function( elm, distance_scrolled ) {
      setTimeout(() => {
        Materialize.toast("Please feel free to contact for feedback", 2500, 'toast-mobile' );
      }, 1000);
      setTimeout(() => {
        Materialize.toast("Or to just say hello..", 2500, 'toast-mobile' );
      }, 4500);
      $('#contact').scrollfire('remove');
    }
  });
  setTimeout(() => {
    Materialize.toast("Hey!", 2500, 'toast-mobile');
  }, 1000);
  setTimeout(() => {
    Materialize.toast("Welcome..", 2500, 'toast-mobile' );
  }, 4000);

  const imageDiv = document.getElementById('image');
  let isInitial = true;
  window.addEventListener('deviceorientation', (event) => {
    if (isInitial) {
      isInitial = false;
      initialValue = event.alpha;
    }
    imageDiv.style.transform = `rotateZ(${event.alpha-initialValue + 180}deg)`;
  });

});