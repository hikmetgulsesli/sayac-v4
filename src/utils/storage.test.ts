import { describe, it, expect, vi } from 'vitest';
import { getStorageItem, setStorageItem } from './storage';

describe('storage utils', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  describe('getStorageItem', () => {
    it('returns null when key does not exist', () => {
      const result = getStorageItem('non-existent-key');
      expect(result).toBeNull();
    });

    it('returns the value when key exists', () => {
      localStorage.setItem('test-key', 'test-value');
      const result = getStorageItem('test-key');
      expect(result).toBe('test-value');
    });

    it('returns null on error', () => {
      vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
        throw new Error('SecurityError');
      });
      const result = getStorageItem('any-key');
      expect(result).toBeNull();
    });
  });

  describe('setStorageItem', () => {
    it('returns true when value is set successfully', () => {
      const result = setStorageItem('test-key', 'test-value');
      expect(result).toBe(true);
      expect(localStorage.getItem('test-key')).toBe('test-value');
    });

    it('returns false on error', () => {
      vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
        throw new Error('QuotaExceededError');
      });
      const result = setStorageItem('any-key', 'any-value');
      expect(result).toBe(false);
    });
  });
});
