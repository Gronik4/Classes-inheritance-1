import Character from './Character';

export default class Magician extends Character {
  constructor(name, type, ...args) {
    super(name, type, ...args);
    this.attack *= 10;
    this.defence *= 40;
  }
}