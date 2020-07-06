import rangeHeroes from '../heroes';

describe('Начинаем тестирование функции "rangeHeroes" ', () => {
  const list1 = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const list2 = [
    { name: 'мечник', health: 10 },
    { name: 'лучник', health: 80 },
    { name: 'маг', health: 100 },
  ];

  const list3 = [
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
  ];

  const list4 = [
    { name: 'лучник', health: 80 },
    { name: 'маг', health: 100 },
    { name: 'мечник', health: 10 },
  ];

  const list5 = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const list6 = [
    { name: 'маг', health: 100 },
    { name: 'мечник', health: 10 },
    { name: 'лучник', health: 80 },
  ];

  const resultedList = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  test.each([
    [list1, resultedList],
    [list2, resultedList],
    [list3, resultedList],
    [list4, resultedList],
    [list5, resultedList],
    [list6, resultedList],
  ])(
    (`Должен вернуться ${resultedList}`),
    (inputList, expected) => {
      expect(rangeHeroes(inputList)).toEqual(expected);
    },
  );
});
