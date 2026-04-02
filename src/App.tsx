import { useCounter } from './hooks/useCounter';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
import './App.css';

function App() {
  const { count, increment, decrement, reset, loading, error } = useCounter();

  useKeyboardShortcuts({
    onIncrement: increment,
    onDecrement: decrement,
    onReset: reset,
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <div className="text-white">Yükleniyor...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans flex flex-col items-center justify-center p-4">
      {/* Error Banner */}
      {error && (
        <div className="w-full max-w-md mb-6 p-4 bg-red-900/50 border border-red-500/30 rounded-xl flex items-start gap-3">
          <span className="material-symbols-outlined text-red-400">error</span>
          <div>
            <h2 className="text-red-400 font-bold">Hata: Erişim Engellendi</h2>
            <p className="text-red-200/80 text-sm">{error}</p>
          </div>
        </div>
      )}

      {/* Counter Display */}
      <div className="text-center mb-8">
        <span className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400 mb-2 block">Aktif Oturum</span>
        <div className="text-[8rem] md:text-[12rem] font-black text-white leading-none tracking-tighter">
          {count}
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-md">
        <button
          onClick={increment}
          className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-6 rounded-xl transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined">add_circle</span>
          +1 Arttır
        </button>
        <button
          onClick={decrement}
          className="flex-1 bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-6 rounded-xl transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined">remove_circle</span>
          -1 Azalt
        </button>
      </div>

      <button
        onClick={reset}
        className="mt-4 bg-slate-700 hover:bg-slate-600 text-slate-300 font-bold py-3 px-6 rounded-full transition-all flex items-center gap-2"
      >
        <span className="material-symbols-outlined">refresh</span>
        Sıfırla
      </button>

      {/* Keyboard Shortcuts */}
      <div className="mt-8 flex items-center gap-2 text-slate-500 text-sm">
        <kbd className="px-2 py-1 bg-slate-800 rounded">↑</kbd>
        <kbd className="px-2 py-1 bg-slate-800 rounded">↓</kbd>
        <kbd className="px-2 py-1 bg-slate-800 rounded">R</kbd>
        <span>Klavye Kısayolları</span>
      </div>
    </div>
  );
}

export default App;
