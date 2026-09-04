import ErrorRepository from './ErrorRepository';

const errorRepository = new ErrorRepository();

console.log(errorRepository.translate(404));
console.log(errorRepository.translate(777));
