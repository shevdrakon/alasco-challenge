## Dices (No UI required)

We should check if we have a good chance of winning in a game with two dices. The values of
the dices are added. We start the game with 50c. The profit is computed with to following table.

| Sum   |   Payback | Profit  |
|  ---- | --------- | ------- |
| 12 | 4x input | +1,50 Euro |
| 11 | 3x input | +1,00 Euro |
| 10 | 2x input | +0,50 Euro |
| 7,8,9 | input back | +0,00 Euro |
| 2,3,4,5,6 | none | -0,50 Euro |

Is it good to take part in this game? Try in a loop with 1000 iterations, if you lose or
win in the long run. You can simulate the dices with random numbers. (Use your favourite
language)

#### Scripts
- `npm run play <iterations-number>`: run game with specified number of iterations.

Result of execution would be printed in console.
