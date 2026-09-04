import Character from './Character';
import Team from './Team';

const team = new Team();
const bowman = new Character('Лучник');
const swordsman = new Character('Мечник');

team.add(bowman);
team.addAll(swordsman, bowman);

console.log(team.toArray());
