import Team from '../app';

test('проверка add', () => {
  const team = new Team([{
    name: 'Вася', type: 'Bowman', attack: 20, defence: 40,
  }, {
    name: 'Петя', type: 'Bowman', attack: 20, defence: 40,
  }]);
  team.add({
    name: 'Саша', type: 'Bowman', attack: 20, defence: 40,
  });

  expect(Array.from(team.members)).toEqual([{
    name: 'Вася', type: 'Bowman', attack: 20, defence: 40,
  }, {
    name: 'Петя', type: 'Bowman', attack: 20, defence: 40,
  }, {
    name: 'Саша', type: 'Bowman', attack: 20, defence: 40,
  }]);
});

test('проверка addAll', () => {
  const team = new Team([{
    name: 'Вася', type: 'Bowman', attack: 20, defence: 40,
  }, {
    name: 'Петя', type: 'Bowman', attack: 20, defence: 40,
  }]);

  team.addAll({
    name: 'Паша', type: 'Bowman', attack: 20, defence: 40,
  },
  {
    name: 'Маша', type: 'Bowman', attack: 20, defence: 40,
  });
  expect(Array.from(team.members)).toEqual([{
    name: 'Вася', type: 'Bowman', attack: 20, defence: 40,
  }, {
    name: 'Петя', type: 'Bowman', attack: 20, defence: 40,
  }, {
    name: 'Паша', type: 'Bowman', attack: 20, defence: 40,
  }, {
    name: 'Маша', type: 'Bowman', attack: 20, defence: 40,
  }]);
});

test('проверка toArray', () => {
  const team = new Team([{
    name: 'Вася', type: 'Bowman', attack: 20, defence: 40,
  }, {
    name: 'Петя', type: 'Bowman', attack: 20, defence: 40,
  }]);

  expect(team.toArray()).toEqual([{
    name: 'Вася', type: 'Bowman', attack: 20, defence: 40,
  }, {
    name: 'Петя', type: 'Bowman', attack: 20, defence: 40,
  }]);
});

test('test error', () => {
  const received = new Team();
  received.add({
    name: 'Вася', type: 'Bowman', attack: 20, defence: 40,
  });
  expect(() => {
    received.add({
      name: 'Вася', type: 'Bowman', attack: 20, defence: 40,
    });
  }).toThrow();
});
