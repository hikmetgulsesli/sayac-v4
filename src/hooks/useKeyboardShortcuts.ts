import { useEffect } from 'react';

export function useKeyboardShortcuts({
  onIncrement,
  onDecrement,
  onReset,
}: {
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp' || e.key === '+' || e.key === '=') {
        e.preventDefault();
        onIncrement();
      } else if (e.key === 'ArrowDown' || e.key === '-') {
        e.preventDefault();
        onDecrement();
      } else if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        onReset();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onIncrement, onDecrement, onReset]);
}
