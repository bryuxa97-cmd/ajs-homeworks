import Validator from '../Validator';

describe('Validator', () => {
  const validator = new Validator();

  test.each([
    ['John'],
    ['a'],
    ['Alex-99_Bond'],
    ['user_name'],
    ['user-name'],
    ['A1B'],
    ['user123name'],
    ['Abc_def-G'],
  ])('accepts valid username "%s"', (username) => {
    expect(validator.validateUsername(username)).toBe(true);
  });

  test.each([
    ['1John'],
    ['John1'],
    ['_John'],
    ['John_'],
    ['-John'],
    ['John-'],
    ['John1234'],
    ['user1234name'],
    ['Иван'],
    ['john@doe'],
    ['john doe'],
    ['john.doe'],
    [''],
  ])('rejects invalid username "%s"', (username) => {
    expect(validator.validateUsername(username)).toBe(false);
  });
});
