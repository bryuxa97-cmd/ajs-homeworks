import orderByProps from '../orderByProps';

test('should order props by given order then alphabetically', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const result = orderByProps(obj, ['name', 'level']);

  expect(result).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});

test('should sort all props alphabetically when order is empty', () => {
  const obj = { c: 3, a: 1, b: 2 };

  expect(orderByProps(obj, [])).toEqual([
    { key: 'a', value: 1 },
    { key: 'b', value: 2 },
    { key: 'c', value: 3 },
  ]);
});

test('should skip keys from order that are missing on object', () => {
  const obj = { name: 'лучник', attack: 40 };

  expect(orderByProps(obj, ['name', 'level'])).toEqual([
    { key: 'name', value: 'лучник' },
    { key: 'attack', value: 40 },
  ]);
});

test('should ignore inherited enumerable properties', () => {
  const proto = { inherited: true };
  const obj = Object.create(proto);
  obj.name = 'герой';
  obj.level = 1;

  expect(orderByProps(obj, ['name'])).toEqual([
    { key: 'name', value: 'герой' },
    { key: 'level', value: 1 },
  ]);
});
