
// console.log('worked');

export default class Team {
  constructor(members) {
    this.members = new Set(members);
  }

  add(character) {
    Array.from(this.members).forEach((member) => {
      if (member.name === character.name) {
        throw new Error('Такой персонаж уже существует');
      }
    });
    return this.members.add(character);
  }

  addAll(...characters) {
    const members = Array.from(this.members);
    const charactersArr = Array.from(characters);
    const arrOut = charactersArr.filter((e) => members.every((k) => k.name !== e.name));
    for (const elem of arrOut) {
      this.members.add(elem);
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}
