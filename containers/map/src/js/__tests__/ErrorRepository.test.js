import ErrorRepository from '../ErrorRepository';

describe('ErrorRepository', () => {
  let repository;

  beforeEach(() => {
    repository = new ErrorRepository();
  });

  test('should create repository with Map of errors', () => {
    expect(repository.errors).toBeInstanceOf(Map);
    expect(repository.errors.size).toBeGreaterThan(0);
  });

  test.each([
    [400, 'Bad Request'],
    [404, 'Not Found'],
    [500, 'Internal Server Error'],
  ])('should translate known code %i to "%s"', (code, message) => {
    expect(repository.translate(code)).toBe(message);
  });

  test('should return "Unknown error" for unknown code', () => {
    expect(repository.translate(999)).toBe('Unknown error');
  });

  test('should return "Unknown error" for empty repository code lookup', () => {
    repository.errors.clear();

    expect(repository.translate(404)).toBe('Unknown error');
  });
});
