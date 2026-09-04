import Character from '../Character';
import Team from '../Team';

describe('Team', () => {
  let team;
  let bowman;
  let swordsman;
  let magician;

  beforeEach(() => {
    team = new Team();
    bowman = new Character('Лучник');
    swordsman = new Character('Мечник');
    magician = new Character('Маг');
  });

  test('should create empty team with Set members', () => {
    expect(team.members).toBeInstanceOf(Set);
    expect(team.members.size).toBe(0);
  });

  test('should add character to team', () => {
    team.add(bowman);

    expect(team.members.has(bowman)).toBe(true);
    expect(team.members.size).toBe(1);
  });

  test('should throw error when adding duplicate character', () => {
    team.add(bowman);

    expect(() => team.add(bowman)).toThrow('Персонаж уже добавлен в команду');
    expect(team.members.size).toBe(1);
  });

  test('should add multiple characters with addAll', () => {
    team.addAll(bowman, swordsman, magician);

    expect(team.members.size).toBe(3);
    expect(team.members.has(bowman)).toBe(true);
    expect(team.members.has(swordsman)).toBe(true);
    expect(team.members.has(magician)).toBe(true);
  });

  test('should not throw and should ignore duplicates in addAll', () => {
    team.add(bowman);

    expect(() => team.addAll(bowman, swordsman, bowman, magician)).not.toThrow();
    expect(team.members.size).toBe(3);
  });

  test('should convert Set to array with toArray', () => {
    team.addAll(bowman, swordsman, magician);

    const result = team.toArray();

    expect(Array.isArray(result)).toBe(true);
    expect(result).toEqual([bowman, swordsman, magician]);
  });

  test('should return empty array for empty team', () => {
    expect(team.toArray()).toEqual([]);
  });
});
