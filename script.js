document.addEventListener('DOMContentLoaded', function() {
    const sidenavElement = document.querySelector('#mobile-nav');
    const sidenavOptions = {
      edge: 'left',
      draggable: true,
    };
    // M is a global variable created in materialize/js/materialize.min.js, which is a bad practice :(
    const sidenavInstance = M.Sidenav.init(sidenavElement, sidenavOptions);
    sidenavInstance.close();
});

function updateBackgroundHeight() {
  const getContentSize = document.querySelectorAll('.content')[0].clientHeight;
  const backgroundElement = document.querySelectorAll('.background')[0];
  const screenSize = screen.height;
  const biggerSize = Math.max(getContentSize, screenSize);
  backgroundElement.style.height = biggerSize + 'px';
}

window.addEventListener('load', function() {
  updateBackgroundHeight(); 
});

window.addEventListener('resize', function() {
  updateBackgroundHeight();
});