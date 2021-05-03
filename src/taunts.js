function tauntList () {
  var numTaunts = 20;

  var choice = Math.floor(Math.random() * numTaunts) + 1;

  var tauntMessage = "Taunt did not work";

  switch(choice)
  {
    case 1:
      tauntMessage = "used taunt on";
      break;
    case 2:
      tauntMessage = "is calling you out";
      break;
    case 3:
      tauntMessage = "says you smell like a wet Kuriboh";
      break;
    case 4:
      tauntMessage = "hopes you like the taste of salt";
      break;
    case 5:
      tauntMessage = "didn't know they were going to play a children's card game with an actual child";
      break;
    case 6:
      tauntMessage = "is dishing out L's today and you're next in line";
      break;
    case 7:
      tauntMessage = "is screwing the rules and your mom";
      break;
    case 8:
      tauntMessage = "would like to formally apologize to you because they thought that your name was spelled, \"F R E E\"";
      break;
    case 9:
      tauntMessage = "just realized that you're more pathetic than they are";
      break;
    case 10:
      tauntMessage = "wanted to let you know that they heard the shadow realm is nice this time of year";
      break;
    case 11:
      tauntMessage = "thinks that dungeon dice monsters is more your speed";
      break;
    case 12:
      tauntMessage = "was wondering if they could get your consent because they're planning to upload this to the hub afterwards";
      break;
    case 13:
      tauntMessage = "thinks that you'd be a great pitcher considering how much you throw";
      break;
    case 14:
      tauntMessage = "ranks you below Tristan";
      break;
    case 15:
      tauntMessage = "has been practicing the heimlich maneuver recently for the likely case that you choke";
      break;
    case 16:
      tauntMessage = "won't be needing the heart of the cards this duel";
      break;
    case 17:
      tauntMessage = "just asked the judge why they were paired down this round";
      break;
    case 18:
      tauntMessage = "wants to teach you what a speed duel is";
      break;
    case 19:
      tauntMessage = "wants you to call an ambulance, but not for them";
      break;
    case 20:
      tauntMessage = "wanted to congratulate for your win against the bye in the past. They didn't think you could do it";
      break;
    case 21:
      tauntMessage = "thinks that the Slifer red color suits you";
      break;
    case 22:
      tauntMessage = "wants you to get your game on";
      break;
    case 23:
      tauntMessage = "mistook your deck for Junk Synchrons. Turns out it was just junk";
      break;
    case 24:
      tauntMessage = "says you would've been knocked out of the Duelist Kingdom tournament while on the boat to the island";
      break;
    case 25:
      tauntMessage = "heard that players were instead giving you cards after you lost to them during battle city";
      break;
  }

  return tauntMessage;
}
module.exports = { tauntList };