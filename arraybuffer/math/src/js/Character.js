export default class Character {
  constructor() {
    this.stonedState = false;
    this.attackValue = 0;
    this.distance = 1;
  }

  get stoned() {
    return this.stonedState;
  }

  set stoned(value) {
    this.stonedState = Boolean(value);
  }

  get attack() {
    let attackPower = this.attackValue * (1 - (this.distance - 1) * 0.1);

    if (this.stoned) {
      attackPower -= Math.log2(this.distance) * 5;
    }

    return attackPower > 0 ? attackPower : 0;
  }

  set attack(value) {
    this.attackValue = value;
  }
}
