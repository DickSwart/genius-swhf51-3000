var OSUR = {
  util: {}
};

// From Modernizr
// https://github.com/Modernizr/Modernizr/blob/master/feature-detects/touchevents.js
OSUR.util.hasTouchEvents = function() {
  var bool;

  if (('ontouchstart' in window) ||
    window.DocumentTouch &&
    document instanceof DocumentTouch) {
    bool = true;
  }

  return bool;
};

$(function() {

  // cmd-once buttons send a single command when clicked
  $('.cmd-once').on('click', function(evt) {
    $.ajax({
      type: "POST",
      url: $(this).attr('href'),
      success: function(data) {
        console.log('Success: cmd-once', data);
      },
      error: function(xhr, type) {
        console.log('Error: cmd-once', { xhr, type });
      }
    });
  });

  // cmd-repeater buttons repeatedly send the command while being clicked
  // (uses send_start and send_stop behind the scenes)
  $('.cmd-repeater').on('mousedown touchstart', function(evt) {
    $.ajax({
      type: "POST",
      url: $(this).attr('href') + '/send_start',
      success: function(data) {
        console.log('Success: cmd-repeater', data);
      },
      error: function(xhr, type) {
        console.log('Error: cmd-repeater', { xhr, type });
      }
    });
    $(this).attr('data-active', true);
  });

  // Capture any kind of mouse or touch "out" event
  $('.cmd-repeater').on('mouseup touchend touchleave touchcancel', function(evt) {
    $.ajax({
      type: "POST",
      url: $(this).attr('href') + '/send_stop',
      success: function(data) {},
      error: function(xhr, type) {}
    });
    $(this).attr('data-active', false);
  });

  // If the user clicks, holds, and drags mouse outside of window - handle that too
  $(window).on('mouseup touchend touchleave touchcancel', function(evt) {
    $('.cmd-repeater[data-active=true]').trigger('mouseup');
  });

  // Different visual behavior for touch devices
  if (OSUR.util.hasTouchEvents()) {
    $('body').addClass('has-touch');

    $('.cmd-link').on('touchstart', function(evt) {
      $(this).addClass('active');
    });

    $('.cmd-link').on('touchend touchleave touchcancel', function(evt) {
      $(this).removeClass('active');
    });

    $('body').on('touchcancel', function(evt) {
      $('.cmd-link').removeClass('active');
    });
  } else {
    $('body').addClass('no-touch');
  }

  // Remove 300ms delay after tapping
  OSUR.fastClick = new FastClick(document.body);

  // If the appcache file has updated, reload the page automatically
  function onUpdateReady() {
    document.location.reload();
  }

  window.applicationCache.addEventListener('updateready', onUpdateReady);

  if (window.applicationCache.status === window.applicationCache.UPDATEREADY) {
    onUpdateReady();
  }
});