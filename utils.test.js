const { count, filter } = require('./utils');
const { data } = require('./data');

test('filter', () => {
    expect(filter(data)).toEqual([]);
});

test('count', () => {
    expect(count(data)).toEqual([]);
});