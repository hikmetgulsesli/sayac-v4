/**
 * Safe localStorage wrapper functions
 * Catches all exceptions and returns safe defaults
 */

export function getStorageItem(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    // Handle SecurityError, QuotaExceededError, DOMException, etc.
    return null;
  }
}

export function setStorageItem(key: string, value: string): boolean {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (e) {
    // Handle SecurityError, QuotaExceededError, DOMException, etc.
    return false;
  }
}
