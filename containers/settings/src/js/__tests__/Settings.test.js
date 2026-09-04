import Settings from '../Settings';

describe('Settings', () => {
  let settings;

  beforeEach(() => {
    settings = new Settings();
  });

  test('should create default and user settings as Map', () => {
    expect(settings.defaultSettings).toBeInstanceOf(Map);
    expect(settings.userSettings).toBeInstanceOf(Map);
    expect(settings.userSettings.size).toBe(0);
  });

  test('should return default settings when user settings are empty', () => {
    const result = settings.settings;

    expect(result).toBeInstanceOf(Map);
    expect(result.get('theme')).toBe('dark');
    expect(result.get('music')).toBe('trance');
    expect(result.get('difficulty')).toBe('easy');
    expect(result.size).toBe(3);
  });

  test('should store only user-defined settings in userSettings', () => {
    settings.setSetting('theme', 'light');

    expect(settings.userSettings.size).toBe(1);
    expect(settings.userSettings.get('theme')).toBe('light');
    expect(settings.userSettings.has('music')).toBe(false);
  });

  test('should override default settings with user settings', () => {
    settings.setSetting('theme', 'gray');
    settings.setSetting('music', 'rock');

    const result = settings.settings;

    expect(result.get('theme')).toBe('gray');
    expect(result.get('music')).toBe('rock');
    expect(result.get('difficulty')).toBe('easy');
    expect(result.size).toBe(3);
  });

  test('should allow changing user setting value', () => {
    settings.setSetting('difficulty', 'hard');
    settings.setSetting('difficulty', 'nightmare');

    expect(settings.userSettings.get('difficulty')).toBe('nightmare');
    expect(settings.settings.get('difficulty')).toBe('nightmare');
  });

  test('should not mutate default settings when applying user settings', () => {
    settings.setSetting('theme', 'light');

    expect(settings.defaultSettings.get('theme')).toBe('dark');
    expect(settings.settings.get('theme')).toBe('light');
  });
});
