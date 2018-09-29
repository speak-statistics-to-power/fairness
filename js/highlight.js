function lightsout() {
  $("#confusion_matrix td").attr('highlight', 'off');
}

function _glow(id, level) {
  $(id).attr('highlight', level);
}

function glow(coords, level) {
  var id = "#confusion_" + coords;
  _glow(id, level);
}

function glowBoth(coords, companionCoords) {
  glow(coords, 'strong');
  glow(companionCoords, 'faint');
}
