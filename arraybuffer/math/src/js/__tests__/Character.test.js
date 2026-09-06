import Character from '../Character';
import Magician from '../Magician';
import Daemon from '../Daemon';

describe('Character attack logic', () => {
  let character;

  beforeEach(() => {
    character = new Character();
    character.attack = 100;
  });

  test.each([
    [1, 100],
    [2, 90],
    [3, 80],
    [4, 70],
    [5, 60],
  ])('should reduce attack linearly for distance %i to %i', (distance, expected) => {
    character.distance = distance;

    expect(character.attack).toBe(expected);
  });

  test('should apply stoned formula on top of distance reduction', () => {
    character.distance = 2;
    character.stoned = true;

    expect(character.attack).toBe(85);
  });

  test('should not change attack with stoned on distance 1', () => {
    character.distance = 1;
    character.stoned = true;

    expect(character.attack).toBe(100);
  });

  test('should return 0 when calculated attack is negative', () => {
    character.attack = 1;
    character.distance = 5;
    character.stoned = true;

    expect(character.attack).toBe(0);
  });

  test('get/set stoned should work with boolean conversion', () => {
    character.stoned = 1;
    expect(character.stoned).toBe(true);

    character.stoned = 0;
    expect(character.stoned).toBe(false);
  });

  test('set attack should store base attack value', () => {
    character.attack = 50;
    character.distance = 1;

    expect(character.attack).toBe(50);
  });
});

describe('Magician and Daemon', () => {
  test('Magician should inherit Character logic', () => {
    const magician = new Magician();
    magician.distance = 2;
    magician.stoned = true;

    expect(magician).toBeInstanceOf(Character);
    expect(magician.attack).toBe(85);
  });

  test('Daemon should inherit Character logic', () => {
    const daemon = new Daemon();
    daemon.distance = 2;

    expect(daemon).toBeInstanceOf(Character);
    expect(daemon.attack).toBe(90);
  });

  test('Magician and Daemon should have default attack 100', () => {
    expect(new Magician().attack).toBe(100);
    expect(new Daemon().attack).toBe(100);
  });
});
