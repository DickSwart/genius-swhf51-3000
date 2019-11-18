(function () {
  'use strict';

  function waitForElementToDisplay(selector, fn, time = 500) {
    if (document.querySelector(selector) != null) {
      fn()
      return;
    } else {
      setTimeout(function () {
        waitForElementToDisplay(selector, fn, time);
      }, time);
    }
  }

  document.addEventListener("DOMContentLoaded", function (event) {
    // add new element to the navbar
    var addHome = function () {
      var navbar = document.getElementsByClassName("topbar-wrapper")[0];
     
      
      var button = document.createElement('a');
      button.setAttribute('href', "/");
      button.setAttribute("class", "btn");
      button.innerText = "Remote";
      
      var div = document.createElement('div');
      div.appendChild(button);
      navbar.appendChild(div);
    }
    waitForElementToDisplay(".topbar-wrapper", addHome)
  });

})();