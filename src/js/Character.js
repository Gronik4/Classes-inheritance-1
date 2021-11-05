export default class Character {
  constructor(name, type) {
    try {
      if ((name.length < 2) || (name.length > 10)) {
        throw new Error('Ошибка: в имени должно быть min - 2 символа, max - 10');
      } else { this.name = name; }
    } catch(e) {
      this.name = e.message;
      return this.name;
    }

    const charTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    try {
      if (!charTypes.includes(type)) {
        throw new Error('Ошибка типа персонажа!!');
      } else { this.type = type; }
    } catch(e) {
      this.type = e.message;
      return this.type;
    }
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
}
