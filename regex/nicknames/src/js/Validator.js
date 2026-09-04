export default class Validator {
  validateUsername(username) {
    const allowedChars = /^[a-zA-Z0-9_-]+$/;
    const startsAndEndsWithLetter = /^[a-zA-Z].*[a-zA-Z]$|^[a-zA-Z]$/;
    const hasMoreThanThreeDigitsInARow = /\d{4}/;

    return allowedChars.test(username)
      && startsAndEndsWithLetter.test(username)
      && !hasMoreThanThreeDigitsInARow.test(username);
  }
}
