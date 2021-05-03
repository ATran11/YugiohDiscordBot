function currentSetInfo (numDetails) {
  var currentName = "Dark Crisis";

  var currentsetDetails = ["Current Set: " + currentName, "Release Date: 12/01/2003", "https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=1&pid=11102004&rp=99999"];

  if (numDetails == 1)
  {
    return currentName;
  }

  return currentsetDetails;
}

function currentTournamentPack () {
  var currentTP = "Tournament Pack 4";

  return currentTP;
}

module.exports = { currentSetInfo, currentTournamentPack };