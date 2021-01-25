// // console.log('worked');
import Character from './character';

export default class MathChar extends Character {
  constructor(name, type, stoned, distance) {
    super(name, type);
    this._stoned = stoned;
    this.distance = distance;
    this._attack = 100;
    this.defence = 40;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    const attack = this._attack - (this._attack * (1 - ((this.distance - 1) / 10)));
    if (this.distance > 10) return 0;
    if (!this._stoned) {
      return attack;
    }
    return attack < 0 ? 0 : Math.round(attack - Math.log2(this.distance) * 5);
  }

  set attack(attack) {
    this._attack = attack;
  }
}

export class Magician extends MathChar {
  constructor(...args) {
    super(...args, 'Magician');
  }
}

export class Daemon extends MathChar {
  constructor(...args) {
    super(...args, 'Daemon');
  }
}
