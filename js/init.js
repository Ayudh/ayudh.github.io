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

  function sleep(dur) {
    return new Promise(resolve => {
      setTimeout(resolve, dur);
    });
  }

  setInterval(calcPaths, 4000)

async function calcPaths(totalDur) {
  // unset 'animated' class to body which will reset the animation
  document.body.classList.remove('animated')

  await sleep(300);

  // get all SVG elements - lines and dots
  const paths = document.querySelectorAll('.autograph__path')
  // prepare path length variable
  let len = 0
  // prepare animation delay length variable
  let delay = 0

  // escape if no elements found
  if (!paths.length) {
    return false
  }

  // set duration in seconds of animation to default if not set
  const totalDuration = totalDur || 1.5

  // calculate the full path length
  paths.forEach((path) => {
    const totalLen = path.getTotalLength()
    len += totalLen
  })

  paths.forEach((path) => {
    const pathElem = path
    // get current path length
    const totalLen = path.getTotalLength()
    // calculate current animation duration
    const duration = totalLen / len * totalDuration

    // set animation duration and delay
    pathElem.style.animationDuration = `${duration < 0.2 ? 0.2 : duration}s`
    pathElem.style.animationDelay = `${delay}s`

    // set dash array and offset to path length - this is how you hide the line
    pathElem.setAttribute('stroke-dasharray', totalLen)
    pathElem.setAttribute('stroke-dashoffset', totalLen)

    // set delay for the next path - added .2 seconds to make it more realistic
    delay += duration + 0.2
  })

  // set 'animated' class to body which will start the animation
  document.body.classList.add('animated')

  return true
}

calcPaths()

});