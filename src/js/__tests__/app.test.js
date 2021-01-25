import MathChar, { Magician, Daemon } from '../app';
import Character from '../character';

test('проверка attack', () => {
  const received = new Magician('Иван', 'Magician', true, 8);
  expect(received.attack).toEqual(55);
});

test('проверка distance', () => {
  const received = new Magician('Иван', 'Magician', true, 18);
  expect(received.attack).toEqual(0);
});

test('проверка stoned false', () => {
  const received = new Magician('Иван', 'Magician', false, 3);
  expect(received.attack).toEqual(20);
});

test('проверка stoned', () => {
  const received = new Magician('Иван', 'Magician', false, 3);
  expect(received.stoned).toEqual(false);
});

test('проверка attack', () => {
  const received = new Daemon('Иван', 'Daemon', true, 8);
  expect(received.attack).toEqual(55);
});

test('проверка длины имени <3', () => {
  expect(() => {
    new Character('хз', 'Swordsman', 10, 40);
  }).toThrow();
});

test('проверка длины имени >10', () => {
  expect(() => {
    new Character('хзuhhgfhfhfjjjsd', 'Swordsman', 10, 40);
  }).toThrow();
});

test('проверка string', () => {
  expect(() => {
    new Character(7, 'Swordsman', 10, 40);
  }).toThrow();
});
