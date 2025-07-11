import sortHeroes from '../src/sortHeroes';

test('should sort heroes by health in descending order', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const result = sortHeroes(heroes);

  expect(result).toEqual(expected);
  expect(result).not.toBe(expected); // Проверяем, что это новый массив
});

test('should return empty array if input is empty', () => {
  expect(sortHeroes([])).toEqual([]);
});

test('should not mutate the input array', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
  ];
  const inputCopy = [...input];
  sortHeroes(input);
  expect(input).toEqual(inputCopy);
});
