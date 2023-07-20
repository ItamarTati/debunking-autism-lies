document.addEventListener('DOMContentLoaded', function() {
    const sidenavElement = document.querySelector('#mobile-nav');
    const sidenavOptions = {
      edge: 'left',
      draggable: true,
    };
    // I kinda don't get why this works, M.Sidenav.init comes from <script type="text/javascript" src="materialize/js/materialize.min.js"></script>
    // because it's loaded first I can use it in this script
    const sidenavInstance = M.Sidenav.init(sidenavElement, sidenavOptions);
  
    sidenavInstance.close();
});