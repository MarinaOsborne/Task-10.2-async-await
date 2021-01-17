import orderByProps, { compareLetters } from '../app';

test('проверка orderByProps', () => {
  expect(orderByProps({
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  }, ['name', 'level'])).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});

test('проверка compareLetters', () => {
  expect(compareLetters('вася', 'вася')).toEqual(0);
});
