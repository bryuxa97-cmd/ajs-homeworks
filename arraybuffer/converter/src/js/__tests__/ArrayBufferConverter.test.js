import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

describe('getBuffer', () => {
  test('should return ArrayBuffer', () => {
    const buffer = getBuffer();

    expect(buffer).toBeInstanceOf(ArrayBuffer);
  });
});

describe('ArrayBufferConverter', () => {
  let converter;

  beforeEach(() => {
    converter = new ArrayBufferConverter();
  });

  test('should create converter with empty buffer', () => {
    expect(converter.buffer).toBeNull();
  });

  test('toString should return empty string if buffer is not loaded', () => {
    expect(converter.toString()).toBe('');
  });

  test('load should store buffer', () => {
    const buffer = getBuffer();
    converter.load(buffer);

    expect(converter.buffer).toBe(buffer);
  });

  test('toString should convert loaded ArrayBuffer to string', () => {
    converter.load(getBuffer());

    expect(converter.toString()).toBe(
      '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}',
    );
  });

  test('toString result should be valid JSON', () => {
    converter.load(getBuffer());
    const parsed = JSON.parse(converter.toString());

    expect(parsed.data.user).toEqual({
      id: 1,
      name: 'Hitman',
      level: 10,
    });
  });
});
