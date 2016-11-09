'use strict';

var help = {

  init: function () {
  },

  isActive: function () {
    return !!document.getElementById('help').style.display && document.getElementById('help').style.display !== 'none';
  },

  open: function () {
    document.getElementById('help').style.display = 'flex';
    menu.closeMenu();
  },

  close: function () {
    document.getElementById('help').style.display = 'none';
  },

  isClicked: function (event) {
    return document.getElementById('help').contains(event.target);
  },

};
