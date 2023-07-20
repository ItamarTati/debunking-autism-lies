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

console.log(Object.keys(window));
