import { describe, it, expect, vi } from 'vitest';
import { getStorageItem, setStorageItem } from './storage';

describe('storage utils', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it('returns null when key does not exist', () => {
    expect(getStorageItem('non-existent')).toBeNull();
  });

  it('returns value when key exists', () => {
    localStorage.setItem('key', 'value');
    expect(getStorageItem('key')).toBe('value');
  });

  it('returns null on error', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('SecurityError');
    });
    expect(getStorageItem('key')).toBeNull();
  });

  it('returns true when set succeeds', () => {
    expect(setStorageItem('key', 'value')).toBe(true);
  });

  it('returns false on error', () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('QuotaExceededError');
    });
    expect(setStorageItem('key', 'value')).toBe(false);
  });
});
