// // console.log('worked');

export default class Character {
  constructor(name, type, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
    if (typeof this.name !== 'string' || this.name.length < 3 || this.name.length > 10) {
      throw new Error('Введите корректное значение');
    }
  }
}
