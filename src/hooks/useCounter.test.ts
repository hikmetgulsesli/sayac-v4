import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';
import { useCounter } from './useCounter';
import * as storage from '../utils/storage';

vi.mock('../utils/storage');

describe('useCounter', () => {
  const mockGetStorageItem = vi.mocked(storage.getStorageItem);
  const mockSetStorageItem = vi.mocked(storage.setStorageItem);

  beforeEach(() => {
    vi.clearAllMocks();
    mockSetStorageItem.mockReturnValue(true);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('initializes with count 0 when no stored value exists', async () => {
    mockGetStorageItem.mockReturnValue(null);
    
    const { result } = renderHook(() => useCounter());
    
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
    
    expect(result.current.count).toBe(0);
  });

  it('loads initial count from localStorage', async () => {
    mockGetStorageItem.mockReturnValue('42');
    
    const { result } = renderHook(() => useCounter());
    
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
    
    expect(result.current.count).toBe(42);
  });

  it('increments count by 1', async () => {
    mockGetStorageItem.mockReturnValue('10');
    
    const { result } = renderHook(() => useCounter());
    
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(11);
  });

  it('decrements count by 1', async () => {
    mockGetStorageItem.mockReturnValue('10');
    
    const { result } = renderHook(() => useCounter());
    
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
    
    act(() => {
      result.current.decrement();
    });
    
    expect(result.current.count).toBe(9);
  });

  it('resets count to 0', async () => {
    mockGetStorageItem.mockReturnValue('100');
    
    const { result } = renderHook(() => useCounter());
    
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
    
    act(() => {
      result.current.reset();
    });
    
    expect(result.current.count).toBe(0);
  });

  it('sets error when localStorage save fails', async () => {
    mockGetStorageItem.mockReturnValue('10');
    mockSetStorageItem.mockReturnValue(false);
    
    const { result } = renderHook(() => useCounter());
    
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
    
    act(() => {
      result.current.increment();
    });
    
    await waitFor(() => {
      expect(result.current.error).not.toBeNull();
    });
  });
});
