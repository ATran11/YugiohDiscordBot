function duelJokes () {
  var numJokes = 15;

  var jChoice = Math.floor(Math.random() * numJokes) + 1;

  var joke = "Jokes did not works";

  switch(jChoice)
  {
    case 1:
      joke = "What genre of music do I dislike?  Trap!";
      break;
    case 2:
      joke = "What do you call a Kuriboh that's fallen into a pot of curry?  Kuriboll!";
      break;
    case 3:
      joke = "What do you say to two blade knights that are about to go to bed?  KnightKnight!";
      break;
    case 4:
      joke = "What do you call a jar full of bean soldiers?  A fiberjar!";
      break;
    case 5:
      joke = "Two Penguin Soldiers walk into a bar. One flips out and they both go home.";
      break;
    case 6:
      joke = "Someone told me they were banning Superpoly, I couldn't even respond.";
      break;
    case 7:
      joke = "What's a lightsworn's favorite drink?  Miller lite";
      break;
    case 8:
      joke = "Sorry, I didn't quite catch that.  What did Yusei?";
      break;
    case 9:
      joke = "What monster does Gordon Ramsay despise?  The Winged Dragon of Raw";
      break;
    case 10:
      joke = "Why was Gearfried the Iron Knight afraid of the sudden blackout?  He wasn't equipped for it";
      break;
    case 11:
      joke = "Why was Chronomaly Atlandis afraid of Lucky Straight?  Because 7 8 9!";
      break;
    case 12:
      joke = "Last night was wild, I had way too much Jinzo I went home early!  Get it?";
      break;
    case 13:
      joke = "I like my women like I like my cards...  in the face-down position.";
      break;
    case 14:
      joke = "I had to explain to my friend who is new Yugioh how Exodia worked. Slowly they started to piece it together.";
      break;
    case 15:
      joke = "Did you hear Elemental Heroes Avian and Burstinatrix ended their relationship?  Poor Flame Wingman was torn up about it.";
      break;
  }

  return joke;
}

module.exports = { duelJokes };