export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [400, 'Bad Request'],
      [404, 'Not Found'],
      [500, 'Internal Server Error'],
    ]);
  }

  translate(code) {
    if (!this.errors.has(code)) {
      return 'Unknown error';
    }

    return this.errors.get(code);
  }
}
