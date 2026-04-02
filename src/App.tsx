import { useCounter } from './hooks/useCounter';
import './App.css';

function App() {
  const { count, increment, decrement, reset, loading, error } = useCounter();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#070d1f]">
        <div className="text-[#dfe4ff] font-['Inter']">Yükleniyor...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070d1f] text-[#dfe4ff] font-['Inter'] flex">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex flex-col h-screen p-4 bg-[#070d1f] w-64 border-r border-slate-800/50 shadow-2xl shadow-emerald-500/5">
        <div className="flex items-center gap-3 px-2 mb-10">
          <div className="w-10 h-10 rounded-xl bg-[#005321] flex items-center justify-center">
            <span className="material-symbols-outlined text-[#4ae176]">numbers</span>
          </div>
          <div>
            <h1 className="text-2xl font-black text-slate-50 font-['Space_Grotesk'] leading-tight">sayac-v4</h1>
            <p className="text-[10px] uppercase tracking-widest text-[#96a9e6] font-bold">Kinetic Precision</p>
          </div>
        </div>
        <nav className="flex-1 space-y-2">
          <a className="flex items-center gap-3 px-4 py-3 bg-emerald-500/10 text-emerald-400 rounded-lg font-['Space_Grotesk'] font-medium" href="#">
            <span className="material-symbols-outlined">numbers</span>
            <span>Sayaç</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-300 hover:bg-slate-800/50 rounded-lg font-['Space_Grotesk'] font-medium transition-all" href="#">
            <span className="material-symbols-outlined">bar_chart</span>
            <span>İstatistik</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-300 hover:bg-slate-800/50 rounded-lg font-['Space_Grotesk'] font-medium transition-all" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span>Ayarlar</span>
          </a>
        </nav>
      </aside>

      {/* Main Canvas */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Top Nav */}
        <header className="w-full top-0 bg-[#020617] flex justify-between items-center px-6 py-4">
          <div className="md:hidden text-xl font-bold tracking-tighter text-slate-50 font-['Space_Grotesk']">sayac-v4</div>
          <div className="hidden md:flex gap-8 items-center">
            <span className="text-emerald-400 font-bold border-b-2 border-emerald-400 font-['Space_Grotesk'] tracking-tight py-1">Ana Sayaç</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-slate-400 hover:text-slate-50 transition-colors duration-150">
              <span className="material-symbols-outlined">history</span>
            </button>
            <button className="text-slate-400 hover:text-slate-50 transition-colors duration-150">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </header>

        {/* Error Banner */}
        {error && (
          <div className="w-full max-w-2xl mx-auto mt-4 z-20">
            <div className="bg-[#7f2927]/30 backdrop-blur-xl border border-[#ee7d77]/20 p-6 rounded-2xl flex items-start gap-5">
              <div className="bg-[#7d000f] p-3 rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#ff716a] font-bold text-3xl">gpp_maybe</span>
              </div>
              <div className="flex-1">
                <h2 className="text-[#ff716a] font-['Space_Grotesk'] font-bold text-lg">Hata: Erişim Engellendi</h2>
                <p className="text-[#ffa9a2]/90 text-sm leading-relaxed font-medium">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Kinetic Counter Engine */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {/* Counter Display */}
            <div className="md:col-span-8 lg:col-span-9 bg-[#09122b] rounded-[2rem] p-8 md:p-16 flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4ae176]/5 via-transparent to-transparent"></div>
              <div className="z-10 text-center">
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#96a9e6] mb-4 block font-['Inter']">Aktif Oturum</span>
                <h2 className="text-[10rem] md:text-[18rem] font-black font-['Space_Grotesk'] text-[#dfe4ff] leading-none tracking-tighter">
                  {count}
                </h2>
                <div className="flex items-center justify-center gap-3 mt-4">
                  <div className="w-2 h-2 rounded-full bg-[#4ae176] animate-pulse"></div>
                  <span className="text-sm font-medium text-[#4ae176]/80 font-['Inter'] tracking-wide">Senkronize Edildi</span>
                </div>
              </div>
            </div>

            {/* Controls Cluster */}
            <div className="md:col-span-4 lg:col-span-3 flex flex-col gap-4">
              {/* Increase Button */}
              <button 
                onClick={increment}
                className="flex-1 bg-[#005321] group relative overflow-hidden flex flex-col items-center justify-center rounded-[2rem] p-8 transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#4ae176]/20 to-transparent"></div>
                <span className="material-symbols-outlined text-[#4ae176] text-6xl mb-4 group-hover:scale-110 transition-transform">add_circle</span>
                <span className="text-2xl font-bold font-['Space_Grotesk'] text-[#56eb7f]">+1 Arttır</span>
              </button>

              {/* Decrease Button */}
              <button 
                onClick={decrement}
                className="flex-1 bg-[#7d000f] group relative overflow-hidden flex flex-col items-center justify-center rounded-[2rem] p-8 transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff716a]/10 to-transparent"></div>
                <span className="material-symbols-outlined text-[#ff716a] text-5xl mb-4 group-hover:scale-110 transition-transform">remove_circle</span>
                <span className="text-xl font-bold font-['Space_Grotesk'] text-[#ffa9a2]">-1 Azalt</span>
              </button>
            </div>

            {/* Reset & Secondary Actions */}
            <div className="md:col-span-12 flex flex-wrap gap-4 items-center justify-between bg-[#0b1d48]/40 p-6 rounded-[1.5rem] backdrop-blur-md">
              <div className="flex items-center gap-6">
                <button 
                  onClick={reset}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#0a2257] text-[#565e6b] font-bold font-['Space_Grotesk'] hover:bg-[#0a2257]/80 transition-colors group"
                >
                  <span className="material-symbols-outlined text-lg group-hover:rotate-180 transition-transform duration-500">refresh</span>
                  Sıfırla
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full py-6 px-12 flex justify-between items-center text-[10px] font-bold text-[#96a9e6]/40 uppercase tracking-[0.2em] font-['Inter']">
          <span>v4.0.2 Stable</span>
          <span className="hidden md:block">Sayac-v4 Precision Engine © 2024</span>
          <span>Cloud Sync: Active</span>
        </footer>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-[#070d1f]/80 backdrop-blur-xl flex justify-around items-center py-4 px-6 z-50">
        <a className="flex flex-col items-center gap-1 text-emerald-400" href="#">
          <span className="material-symbols-outlined">numbers</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Sayaç</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-slate-500" href="#">
          <span className="material-symbols-outlined">bar_chart</span>
          <span className="text-[10px]">İstatistik</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-slate-500" href="#">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[10px]">Ayarlar</span>
        </a>
      </nav>
    </div>
  );
}

export default App;
