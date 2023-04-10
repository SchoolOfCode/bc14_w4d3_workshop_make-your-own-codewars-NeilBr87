import { test, expect } from "@jest/globals"
import { attack } from "./main.js"

//👉 Write your tests below here:

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