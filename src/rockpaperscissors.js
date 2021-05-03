function rpsDecider () {
  var numSetups = 15;

  var setupChoice = Math.floor(Math.random() * numSetups) + 1;

  var setup = "Setup did not work";

  switch(setupChoice)
  {
    case 1:
      setup = "My analysis tells me that the correct choice is... ";
      break;
    case 2:
      setup = "I'd go with... ";
      break;
    case 3:
      setup = "I have a good feeling about... ";
      break;
    case 4:
      setup = "This scenario calls for... ";
      break;
    case 5:
      setup = "Nothing wrong with picking... ";
      break;
    case 6:
      setup = "You're dumber than that furball Kuriboh if you don't pick... ";
      break;
    case 7:
      setup = "With my infinite wisdom I choose... ";
      break;
    case 8:
      setup = "Crush them by choosing... ";
      break;
    case 9:
      setup = "I call forth the almighty might of... ";
      break;
    case 10:
      setup = "Thinking... "
      break;
    case 11:
      setup = "You'd be remissed if you didn't choose... ";
      break;
    case 12:
      setup = "Think think think... brain blast! If I don't get sued for that I'd choose... ";
      break;
    case 13:
      setup = "Oh god I have a headache. Just leave me alone and pick... ";
      break;
    case 14:
      setup = "EZ clap just pick... ";
      break;
    case 15:
      setup = "Fuck if I know! Just pick... ";
      break;
  }

  var rpsChoice = Math.floor(Math.random() * 3) + 1;

  var rpsAnswer = "Answer did not work";

  switch (rpsChoice)
  {
    case 1:
      rpsAnswer = "rock";
      break;
    case 2:
      rpsAnswer = "paper";
      break;
    case 3:
      rpsAnswer = "scissors";
      break;
  }

  return setup + rpsAnswer;

}

module.exports = { rpsDecider };