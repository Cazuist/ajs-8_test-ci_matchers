import getHealthStatus from '../health';

describe('Начинаем тестирование...', () => {
  test.each([
    [{ name: 'Маг', health: 100 }, 'healthy'],
    [{ name: 'Маг', health: 51 }, 'healthy'],
    [{ name: 'Маг', health: 50 }, 'wounded'],
    [{ name: 'Маг', health: 49 }, 'wounded'],
    [{ name: 'Маг', health: 35 }, 'wounded'],
    [{ name: 'Маг', health: 16 }, 'wounded'],
    [{ name: 'Маг', health: 15 }, 'wounded'],
    [{ name: 'Маг', health: 14 }, 'critical'],
    [{ name: 'Маг', health: 1 }, 'critical'],
  ])(
    ('Для объекта %s Должен вернуть %s'),
    (obj, expected) => {
      expect(getHealthStatus(obj)).toBe(expected);
    },
  );
});
