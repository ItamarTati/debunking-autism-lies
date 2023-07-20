document.addEventListener("DOMContentLoaded", function() {
    const sidenavElement = document.querySelector("#mobile-nav");
    const sidenavOptions = {
        edge: "left",
        draggable: true
    };
    const sidenavInstance = M.Sidenav.init(sidenavElement, sidenavOptions);
    sidenavInstance.close();
});

//# sourceMappingURL=index.672d4772.js.map
