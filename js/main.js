(function() {

  'use-strict';

  var anchors = document.querySelectorAll('a[href^="#"]');

  anchors.forEach(function(anchor) {

    anchor.addEventListener('click', function() {

      var anchorDestination = anchor.getAttribute('href');

      animateScrollTo(document.querySelector(anchorDestination));
      
    }, false);
  });
})();

(function() {

  'use strict';

  var menuToggles = document.querySelectorAll('.menu-toggle');
  var mainHeaders = document.querySelectorAll('.main-header');
  var noScrolls   = document.querySelectorAll('html, body');
  var menuItems   = document.querySelectorAll('.main-navigation-list-item');

  for (var i = 0; i < menuToggles.length; i++) {
    menuToggles[i].addEventListener('click',   function() {

      for (var i = 0; i < menuToggles.length; i++) {
        menuToggles[i].classList.toggle('-active');
      }

      for (var i = 0; i < mainHeaders.length; i++) {
        mainHeaders[i].classList.toggle('-active');
      }

      for (var i = 0; i < noScrolls.length; i++) {
        noScrolls[i].classList.toggle('-inactive');
      }

    }, false);
  }

  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click',   function() {

      for (var i = 0; i < mainHeaders.length; i++) {
        mainHeaders[i].classList.remove('-active');
      }

      for (var i = 0; i < noScrolls.length; i++) {
        noScrolls[i].classList.remove('-inactive');
      }

      for (var i = 0; i < menuToggles.length; i++) {
        menuToggles[i].classList.remove('-active');
      }

    }, false);
  }

})();