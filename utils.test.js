const { count, filter } = require('./utils');
const { dataMock, filtedDataMock, countedDataMock } = require('./mock');

test('filter', () => {
    const flag = "Ano"
    expect(filter(flag, dataMock)).toEqual(filtedDataMock);
});

test('count', () => {
    expect(count(dataMock)).toEqual(countedDataMock);
});