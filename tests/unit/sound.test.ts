import { describe, expect, it } from 'vitest';
import { sound } from '../../src/audio/sound';

describe('Web Audio Sound Synthesizer', () => {
  it('is disabled by default', () => {
    sound.setEnabled(false);
    expect(sound.getEnabled()).toBe(false);
  });

  it('safely handles playback when disabled without throwing', () => {
    sound.setEnabled(false);
    expect(() => sound.playClick()).not.toThrow();
    expect(() => sound.playTrolleyBell()).not.toThrow();
    expect(() => sound.playLevelComplete()).not.toThrow();
    expect(() => sound.playWarning()).not.toThrow();
  });

  it('can be enabled without crashing', () => {
    sound.setEnabled(true);
    expect(sound.getEnabled()).toBe(true);

    // Should not throw even if window.AudioContext is mocked or absent
    expect(() => sound.playClick()).not.toThrow();
    expect(() => sound.playTrolleyBell()).not.toThrow();
    expect(() => sound.playLevelComplete()).not.toThrow();
    expect(() => sound.playWarning()).not.toThrow();

    sound.setEnabled(false);
  });
});
