const set = require("./cardsetTracker");

function printPrizing () {
  var numDetails = 1;
  var currentTP = set.currentTournamentPack();
  var currentSet = set.currentSetInfo(numDetails);

  var prizeList = ["1st place: 3 packs of \"" + currentTP + "\" and a spin at the Winner's wheel.", 
  "2nd place: 3 packs of \"" + currentTP + "\".", 
  "3rd-4th place: 2 packs of \"" + currentTP + "\".", 
  "All players: 2 of any set up to \"" + currentSet + "\"."];

  return prizeList;
}

module.exports = { printPrizing };