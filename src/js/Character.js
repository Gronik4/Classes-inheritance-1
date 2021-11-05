export default class Character {
  constructor(name, type) {
    try {
      if ((name.length < 2) || (name.length > 10)) {
        throw new Error('Ошибка: в имени должно быть min - 2 символа, max - 10');
      } else  { this.name = name; }
    } catch(e) { return this.name = e.message }

    const charTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    try {
      if (!charTypes.includes(type)) {
        throw new Error('Ошибка типа персонажа!!');
      } else { this.type = type; }
    } catch(e) { return this.type = e.message;}
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
}
