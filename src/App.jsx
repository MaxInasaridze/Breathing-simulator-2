import { useState, useEffect } from "react";

const funnyMessages = [
  "Loading lung capacity... please inhale.",
  "ERROR: Breathing not found. Have you tried turning your lungs off and on again?",
  "Connecting to oxygen servers... 94% packet loss detected.",
  "WARNING: This game requires an active respiratory system. We are not responsible for any involuntary breathing that may occur.",
  "Achievement unlocked: 'Still Alive' — You breathed at least once today.",
  "Fetching air quality DLC... $4.99 for the 'Fresh Mountain Air' pack.",
  "Please wait while we calibrate your nostrils...",
  "Your breathing score from last session: 6.2/10. Try harder.",
];

const reviews = [
  { user: "xXBreathLordXx", stars: 5, text: "Finally a game that respects the art of inhaling. 10/10 would exhale again." },
  { user: "GamerDad_of_3", stars: 4, text: "My kids won't stop playing. Send help. Also I forgot how to breathe manually now." },
  { user: "TotallyNotABot", stars: 5, text: "GOTY every year since 1954. The breathing physics are unmatched." },
  { user: "NegativeNancy99", stars: 1, text: "I kept dying in real life every time I got a game over. 1 star." },
  { user: "PhilosophyGuy", stars: 5, text: "Made me question whether I was breathing before this game, or just existing." },
];

const features = [
  { icon: "🫁", title: "120 FPS Breathing", desc: "Ultra-smooth inhale/exhale rendered at cinematic framerates" },
  { icon: "🌬️", title: "Wind Physics Engine", desc: "Powered by our proprietary BreathForce™ 9.0 technology" },
  { icon: "🏆", title: "Ranked Breathing", desc: "Compete globally. Are you a Platinum Breather? Find out." },
  { icon: "🎮", title: "Controller Support", desc: "Rumble feedback for every breath. Feel the oxygen." },
  { icon: "🌍", title: "Cross-Platform", desc: "Breathe on PC, console, and mobile. Air is everywhere." },
  { icon: "🔄", title: "Seasons & Updates", desc: "New air biomes added monthly. Winter DLC available now." },
];

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalMsg, setModalMsg] = useState("");
  const [particles, setParticles] = useState([]);
  const [breathPhase, setBreathPhase] = useState("inhale");

  useEffect(() => {
    const ps = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 6,
      dur: Math.random() * 8 + 6,
    }));
    setParticles(ps);

    const cycle = setInterval(() => {
      setBreathPhase(p => (p === "inhale" ? "exhale" : "inhale"));
    }, 3000);
    return () => clearInterval(cycle);
  }, []);

  const handlePlay = () => {
    const msg = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
    setModalMsg(msg);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-[#050a14] text-white font-mono overflow-x-hidden relative">
      {/* Ambient particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {particles.map(p => (
          <div
            key={p.id}
            className="absolute rounded-full bg-cyan-400 opacity-20"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animation: `float ${p.dur}s ease-in-out ${p.delay}s infinite alternate`,
            }}
          />
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap');
        * { font-family: 'Share Tech Mono', monospace; }
        h1, h2, .display { font-family: 'Orbitron', monospace; }
        @keyframes float { from { transform: translateY(0px) scale(1); } to { transform: translateY(-30px) scale(1.3); } }
        @keyframes pulse-ring { 0% { transform: scale(0.8); opacity: 1; } 100% { transform: scale(2); opacity: 0; } }
        @keyframes scanline { 0% { top: -2%; } 100% { top: 102%; } }
        @keyframes glitch {
          0%,100% { clip-path: inset(0 0 100% 0); }
          10% { clip-path: inset(10% 0 60% 0); transform: translate(-2px); }
          20% { clip-path: inset(40% 0 20% 0); transform: translate(2px); }
          30% { clip-path: inset(0 0 100% 0); }
        }
        .scanline::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(transparent 50%, rgba(0,255,255,0.015) 50%);
          background-size: 100% 4px;
          pointer-events: none;
        }
        .crt-flicker { animation: flicker 8s infinite; }
        @keyframes flicker { 0%,100%{opacity:1} 97%{opacity:1} 97.5%{opacity:.8} 98%{opacity:1} 99%{opacity:.9} 99.5%{opacity:1} }
        .breath-orb { transition: transform 3s ease-in-out; }
        .glow-cyan { box-shadow: 0 0 20px rgba(0,255,255,0.4), 0 0 60px rgba(0,255,255,0.15); }
        .glow-text { text-shadow: 0 0 10px rgba(0,255,255,0.8); }
        .star-filled { color: #fbbf24; }
      `}</style>

      {/* Header / Nav */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-4 border-b border-cyan-900/50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-cyan-400 animate-pulse" />
          <span className="display text-cyan-400 font-bold tracking-widest text-sm glow-text">BREATH SIM</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs text-cyan-600 tracking-widest">
          <a href="#" className="hover:text-cyan-300 transition-colors">ABOUT</a>
          <a href="#" className="hover:text-cyan-300 transition-colors">FEATURES</a>
          <a href="#" className="hover:text-cyan-300 transition-colors">COMMUNITY</a>
          <a href="#" className="hover:text-cyan-300 transition-colors">STORE</a>
        </div>

      </nav>

      {/* Hero */}
      <section className="scanline relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 crt-flicker">
        {/* Rating badge */}
        <div className="mb-6 flex items-center gap-2 bg-cyan-950/60 border border-cyan-700/50 px-4 py-1.5 rounded-full text-xs text-cyan-400 tracking-widest">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
          98,421 PLAYERS BREATHING RIGHT NOW
        </div>

        {/* Breathing orb */}
        <div className="relative mb-10">
          <div
            className="breath-orb w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 glow-cyan flex items-center justify-center text-5xl"
            style={{ transform: breathPhase === "inhale" ? "scale(1.2)" : "scale(0.85)" }}
          >
            🫁
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-ping" style={{ animationDuration: "3s" }} />
          <div className="absolute -inset-4 rounded-full border border-cyan-400/10" style={{ animation: "pulse-ring 3s ease-out infinite" }} />
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-cyan-500 tracking-widest">
            {breathPhase === "inhale" ? "▲ INHALING..." : "▼ EXHALING..."}
          </div>
        </div>

        <h1 className="display text-5xl md:text-8xl font-black tracking-tighter text-white leading-none mt-8">
          BREATHING
        </h1>
        <h1 className="display text-5xl md:text-8xl font-black tracking-tighter text-cyan-400 leading-none glow-text">
          SIMULATOR 2
        </h1>

        <p className="mt-6 max-w-xl text-cyan-600 text-sm leading-relaxed tracking-wide">
          The critically acclaimed sequel that dares to ask: what if breathing, but <span className="text-cyan-300">more</span>?
          Featuring 847 new breath types, procedurally generated nostrils, and an open-world lung sandbox.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
          <button
            onClick={handlePlay}
            className="relative group px-12 py-4 bg-cyan-400 text-black font-bold text-lg tracking-widest hover:bg-cyan-300 transition-all duration-200 display glow-cyan hover:scale-105 active:scale-95"
          >
            ▶ PLAY NOW
            <span className="absolute inset-0 border-2 border-cyan-200 opacity-0 group-hover:opacity-40 transition-opacity" />
          </button>
          <a
            href="https://www.youtube.com/watch?v=CnEJlPAl_mQ"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 border border-cyan-700 text-cyan-400 text-sm tracking-widest hover:border-cyan-400 transition-colors"
          >
            WATCH TRAILER
          </a>
        </div>

        <div className="mt-8 flex gap-6 text-xs text-cyan-700 tracking-widest">
          <span>★★★★★ IGN 10/10</span>
          <span>|</span>
          <span>GOTY 2024</span>
          <span>|</span>
          <span>FREE TO BREATHE</span>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-24 px-6 border-t border-cyan-900/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="display text-3xl font-bold text-center text-cyan-400 mb-2 tracking-widest glow-text">FEATURES</h2>
          <p className="text-center text-cyan-700 text-xs mb-14 tracking-widest">BREATHING HAS NEVER BEEN THIS FEATURE-RICH</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cyan-900/20">
            {features.map((f, i) => (
              <div key={i} className="bg-[#050a14] p-8 hover:bg-cyan-950/40 transition-colors border border-cyan-900/30 hover:border-cyan-700/50 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{f.icon}</div>
                <h3 className="display text-sm font-bold text-cyan-300 mb-2 tracking-widest">{f.title}</h3>
                <p className="text-cyan-700 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="relative z-10 bg-cyan-400 py-6 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-around gap-4 text-black text-center">
          {[["847", "BREATH TYPES"], ["12B+", "BREATHS TAKEN"], ["#1", "OXYGEN SIMULATOR"], ["0", "PLOT"]].map(([val, label]) => (
            <div key={label}>
              <div className="display text-3xl font-black">{val}</div>
              <div className="text-xs tracking-widest opacity-60 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="relative z-10 py-24 px-6 border-t border-cyan-900/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="display text-3xl font-bold text-center text-cyan-400 mb-2 tracking-widest glow-text">REVIEWS</h2>
          <p className="text-center text-cyan-700 text-xs mb-14 tracking-widest">WHAT OUR BREATHERS ARE SAYING</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.map((r, i) => (
              <div key={i} className="border border-cyan-900/50 p-6 hover:border-cyan-700/50 transition-colors bg-cyan-950/10">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-cyan-300 text-sm font-bold">{r.user}</span>
                  <span className="star-filled text-xs">{"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}</span>
                </div>
                <p className="text-cyan-600 text-xs leading-relaxed">"{r.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 px-6 text-center border-t border-cyan-900/40">
        <h2 className="display text-4xl font-black text-white mb-4">READY TO BREATHE?</h2>
        <p className="text-cyan-600 text-sm mb-8 max-w-md mx-auto">Join millions of players in the most immersive respiratory experience ever created by humans, for humans who breathe.</p>
        <button
          onClick={handlePlay}
          className="px-16 py-5 bg-cyan-400 text-black font-black text-xl tracking-widest display hover:bg-cyan-300 transition-all hover:scale-105 active:scale-95 glow-cyan"
        >
          BREATHE NOW — FREE
        </button>
        <p className="mt-4 text-cyan-800 text-xs">*Lungs not included. Air sold separately.</p>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-cyan-900/40 py-8 px-6 text-center text-cyan-800 text-xs tracking-widest">
        <p>© 2026 BREATH STUDIOS LLC. ALL RIGHTS RESERVED. ALL BREATHS RESERVED.</p>
        <p className="mt-2">Breathing Simulator 2 is not responsible for any uncontrolled breathing that occurs during gameplay.</p>
      </footer>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative max-w-md w-full mx-4 border-2 border-cyan-400 bg-[#050a14] p-8 glow-cyan"
            onClick={e => e.stopPropagation()}
          >
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400 -translate-x-px -translate-y-px" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400 translate-x-px -translate-y-px" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400 -translate-x-px translate-y-px" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400 translate-x-px translate-y-px" />

            <div className="text-cyan-400 text-xs tracking-widest mb-1">SYSTEM MESSAGE //</div>
            <div className="text-4xl mb-5">🫁</div>
            <h3 className="display text-lg font-bold text-cyan-300 mb-4 tracking-wide">LAUNCHING GAME...</h3>
            <p className="text-cyan-400 text-sm leading-relaxed mb-6">{modalMsg}</p>

            <div className="w-full bg-cyan-950 h-1.5 mb-6 overflow-hidden">
              <div className="h-full bg-cyan-400 animate-pulse" style={{ width: "37%" }} />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-2 border border-cyan-700 text-cyan-500 text-xs tracking-widest hover:border-cyan-400 hover:text-cyan-300 transition-colors"
              >
                CANCEL
              </button>
              <button
                onClick={() => { setShowModal(false); handlePlay(); }}
                className="flex-1 py-2 bg-cyan-400 text-black text-xs font-bold tracking-widest hover:bg-cyan-300 transition-colors"
              >
                TRY AGAIN
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}