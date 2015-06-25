/**
 * Adds a Copy handler if running under Electron.
 */
window.addEventListener('load', function() {
  var remote;
  var Menu;

  try {
    remote = require('remote');
    Menu = remote.require('menu');
  } catch (e) {
    console.info('could not get Menu', e);
    return;  // probably not in Electron
  }

  var template = [
    {
      label: 'Copy',
      // accelerator: 'Command+C',
      selector: 'copy:'
    },
  ];
  var menu = Menu.buildFromTemplate(template);

  window.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    menu.popup(remote.getCurrentWindow());
  }, false);
});