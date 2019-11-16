(function() {
  'use strict';

  document.addEventListener("DOMContentLoaded", function(event) {
    var navbar = document.getElementsByClassName("topbar-wrapper");
    // not loaded
    console.log(navbar.length); // value is 0
    console.log(navbar[0]);

    // // this below break
    // var aTag = document.createElement('a');
    // aTag.setAttribute('href', "/");
    // aTag.innerText = "Home";
    // mydiv.appendChild(aTag);
  });
  console.log('Custom JS on the swagger page, read more: https://github.com/scottie1984/swagger-ui-express');
})();