import Magician from './Magician';
import Daemon from './Daemon';

const magician = new Magician();
magician.distance = 2;
magician.stoned = true;

const daemon = new Daemon();
daemon.distance = 2;

console.log(magician.attack);
console.log(daemon.attack);
