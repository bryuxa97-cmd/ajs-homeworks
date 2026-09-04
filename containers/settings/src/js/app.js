import Settings from './Settings';

const settings = new Settings();

settings.setSetting('theme', 'light');
settings.setSetting('music', 'rock');

console.log(settings.settings);
