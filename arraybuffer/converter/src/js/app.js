import ArrayBufferConverter from './ArrayBufferConverter';
import getBuffer from './getBuffer';

const converter = new ArrayBufferConverter();
converter.load(getBuffer());

console.log(converter.toString());
