const args = process.argv.splice(2);
const iterations = parseInt(args[0]);

const Dice = () => Math.floor(Math.random() * 6) + 1;
const rollDices = () => Dice() + Dice();

const rules = {
  12: (input) => input * 4,
  11: (input) => input * 3,
  10: (input) => input * 2,
  9: (input) => input,
  8: (input) => input,
  7: (input) => input,
  default: () => 0,
};

const playOneGame = (bet) => {
  const dicesValue = rollDices();
  const win = (rules[dicesValue] || rules.default)(bet);

  return win - bet;
};

const playTheGame = (start, tries) => {
  let currentState = start;

  while (tries-- > 0) {
    const bet = currentState > 0 ? currentState : start;

    currentState += playOneGame(bet);
  }

  console.log(`You left with ${currentState}`);
};

playTheGame(0.5, iterations);
