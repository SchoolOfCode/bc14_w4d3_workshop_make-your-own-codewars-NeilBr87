const { test, expect } = require("@jest/globals")

//👉 Write your tests below here:

// Note: I'm currently having an import issue with the main.js file. I've got some issue with my ESM - and I've tried everything.
// I'll get some help on this next week, but for now, I'm just going to write a shell of the function below so you can run your tests.
// I'll ask for help on this next week but if you spot whatever I've done to mess it up, you'll be my best friend for life if you drop me a message on Slack.

function attack (playerAgility, playerAttack, enemyHealth) {
    if (playerAgility >=5 && playerAgility <= 10) {
        enemyHealth = enemyHealth - playerAttack
        output = (`You hit the enemy! Their health is now ${enemyHealth}!`)
        if (enemyHealth <= 0) {
            output = (`You hit the enemy! They are defeated!`)
        }
    }
    else if (playerAgility < 5) {
        output = (`You missed!`)
    }
    else if (playerAgility > 10) {
        output = (`Not this time - you overpowered yourself!`)
    }
    return output;
  }
  
test("Successful hit, no defeat", ()=> {
    const actual = attack(5, 10, 50)
    const expected = "You hit the enemy! Their health is now 40!"
    expect(actual).toBe(expected)
});

test("Successful hit, defeat", ()=> {
    const actual = attack(5, 10, 10)
    const expected = "You hit the enemy! They are defeated!"
    expect(actual).toBe(expected)
});

test("Unsuccessful hit", ()=> {
    const actual = attack(3, 10, 50)
    const expected = "You missed!"
    expect(actual).toBe(expected)
});

test("Overpowered hit", ()=> {
    const actual = attack(11, 10, 50)
    const expected = "Not this time - you overpowered yourself!"
    expect(actual).toBe(expected)
});