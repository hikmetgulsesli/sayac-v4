import { useCounter } from './hooks/useCounter';
import './App.css';

function App() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div className="flex h-screen overflow-hidden bg-surface-dim font-body">
      {/* SideNavBar - Desktop */}
      <aside className="hidden md:flex flex-col h-screen p-4 bg-surface w-64 border-r border-outline-variant/30 shadow-2xl shadow-primary/5 transition-all duration-300 ease-in-out">
        <div className="mb-10 px-2">
          <div className="text-2xl font-black text-on-surface font-headline">sayac-v4</div>
          <div className="text-xs tracking-widest uppercase text-on-surface-variant/60 mt-1 font-label">Kinetic Precision</div>
        </div>
        <nav className="flex-1 space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-lg transition-all duration-300 font-headline font-medium">
            <span className="material-symbols-outlined">numbers</span>
            <span>Sayaç</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50 rounded-lg transition-all duration-300 font-headline font-medium">
            <span className="material-symbols-outlined">bar_chart</span>
            <span>İstatistik</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50 rounded-lg transition-all duration-300 font-headline font-medium">
            <span className="material-symbols-outlined">settings</span>
            <span>Ayarlar</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50 rounded-lg transition-all duration-300 font-headline font-medium">
            <span className="material-symbols-outlined">keyboard</span>
            <span>Klavye</span>
          </a>
        </nav>
        <div className="mt-auto space-y-4">
          <div className="bg-surface-container-high p-4 rounded-xl">
            <p className="text-xs text-on-surface-variant mb-3 font-label">Daha fazla özellik için</p>
            <button className="w-full py-2 px-4 kinetic-gradient text-on-primary font-bold rounded-lg text-sm transition-transform active:scale-95 font-headline">
              Pro'ya Yükselt
            </button>
          </div>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface transition-all font-headline font-medium">
            <span className="material-symbols-outlined">help</span>
            <span>Yardım</span>
          </a>
        </div>
      </aside>

      {/* Main Canvas */}
      <main className="flex-1 flex flex-col relative bg-surface-dim">
        {/* TopNavBar */}
        <header className="w-full top-0 flex justify-between items-center px-6 py-4 max-w-full bg-surface font-headline tracking-tight">
          <div className="md:hidden text-xl font-bold tracking-tighter text-on-surface font-headline">sayac-v4</div>
          <div className="hidden md:flex gap-8 items-center">
            <span className="text-primary font-bold border-b-2 border-primary py-1 cursor-default font-headline tracking-tight">Ana Sayaç</span>
            <span className="text-on-surface-variant font-medium hover:text-on-surface transition-colors duration-200 font-headline tracking-tight py-1 cursor-pointer">Geçmiş</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-on-surface-variant hover:text-on-surface transition-colors duration-200">
              <span className="material-symbols-outlined">history</span>
            </button>
            <button className="text-on-surface-variant hover:text-on-surface transition-colors duration-200">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-outline-variant bg-surface-container-highest">
              <div className="w-full h-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">
                U
              </div>
            </div>
          </div>
        </header>

        {/* Counter Content */}
        <section className="flex-1 flex flex-col items-center justify-center p-8 relative">
          {/* Ambient Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          {/* Massive Kinetic Counter */}
          <div className="relative z-10 text-center">
            <span className="block text-9xl md:text-[14rem] font-headline font-extrabold text-on-surface tracking-tighter leading-none">
              {count}
            </span>
            <p className="text-on-surface-variant font-label tracking-widest uppercase text-sm mt-4">Şu Anki Değer</p>
          </div>

          {/* Dynamic Controls Floating Group */}
          <div className="mt-16 flex flex-col items-center gap-12 w-full max-w-md">
            <div className="flex items-center justify-center gap-8 w-full">
              {/* Decrease Button */}
              <button 
                onClick={decrement}
                className="w-20 h-20 flex items-center justify-center rounded-full bg-secondary-container text-on-secondary-container transition-all hover:scale-105 active:scale-90 shadow-xl shadow-secondary-container/20"
              >
                <span className="text-3xl font-headline font-bold">-1</span>
              </button>
              {/* Primary Increase Button */}
              <button 
                onClick={increment}
                className="w-32 h-32 flex items-center justify-center rounded-full kinetic-gradient text-on-primary transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary/30"
              >
                <span className="text-5xl font-headline font-extrabold">+1</span>
              </button>
            </div>
            
            {/* Reset Action */}
            <div className="flex flex-col items-center gap-6">
              <button 
                onClick={reset}
                className="px-8 py-3 rounded-full bg-surface-container-highest text-on-tertiary-fixed-variant border border-outline-variant/30 font-medium transition-all hover:bg-surface-variant font-headline flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">refresh</span>
                Sıfırla
              </button>
              <div className="flex items-center gap-3 text-on-surface-variant/60 glass-effect px-6 py-3 rounded-full border border-outline-variant/10">
                <span className="material-symbols-outlined text-sm">keyboard</span>
                <span className="text-sm font-label">Başlamak için tıklayın veya klavyeyi kullanın</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <footer className="w-full py-6 px-12 flex justify-between items-center text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-[0.2em] font-label">
          <span>v4.0.2 Stable</span>
          <span className="hidden md:block">Sayac-v4 Precision Engine © 2024</span>
          <span>Bulut Senkronizasyonu: Aktif</span>
        </footer>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface/80 backdrop-blur-xl flex justify-around items-center py-4 px-6 border-t border-outline-variant/10 z-50">
        <a href="#" className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined">numbers</span>
          <span className="text-[10px] font-bold font-label">Sayaç</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 text-on-surface-variant/60">
          <span className="material-symbols-outlined">bar_chart</span>
          <span className="text-[10px] font-label">İstatistik</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 text-on-surface-variant/60">
          <span className="material-symbols-outlined">keyboard</span>
          <span className="text-[10px] font-label">Klavye</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 text-on-surface-variant/60">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[10px] font-label">Ayarlar</span>
        </a>
      </nav>
    </div>
  );
}

export default App;
