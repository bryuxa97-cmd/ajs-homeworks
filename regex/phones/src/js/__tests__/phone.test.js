import formatPhone from '../phone';

describe('formatPhone', () => {
  test.each([
    ['8 (927) 000-00-00', '+79270000000'],
    ['+7 960 000 00 00', '+79600000000'],
    ['+86 000 000 0000', '+860000000000'],
    ['7 (999) 111-22-33', '+79991112233'],
    ['89991112233', '+79991112233'],
    ['+7-999-111-22-33', '+79991112233'],
  ])('formats "%s" to "%s"', (input, expected) => {
    expect(formatPhone(input)).toBe(expected);
  });
});
