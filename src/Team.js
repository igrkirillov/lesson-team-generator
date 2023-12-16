export default class Team {
  constructor(...characters) {
    this.characters = characters;
    }
  *[Symbol.iterator]() {
    for (const ch of this.characters) {
      yield ch;
    }
  }
}