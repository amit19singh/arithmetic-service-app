const { add } = require("../arithmetica")

test('2 + 3 is equal to 5', () => {
    expect(add(2, 3)).toBe(5);
});


test('20999999999999999999 + 30000000000000000 is equal to 509,999,999,999,999', () => {
    expect(add(209999999999999, 300000000000000)).toBe(509999999999999);
});


test('2 + 3 is equal to 5', () => {
    expect(add(2, 3)).toBe(5);
});





