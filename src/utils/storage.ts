/**
 * Safe localStorage wrapper functions
 * Catches all exceptions and returns safe defaults
 */

export function getStorageItem(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    // Handle SecurityError, QuotaExceededError, DOMException, etc.
    return null;
  }
}

export function setStorageItem(key: string, value: string): boolean {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch {
    // Handle SecurityError, QuotaExceededError, DOMException, etc.
    return false;
  }
}
