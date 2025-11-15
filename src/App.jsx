import { useState, useEffect } from 'react';
import Boot from './screens/boot.jsx';
import Login from './screens/login.jsx';
import Desktop from './components/desktop/desktop.jsx';
import Dock from './screens/ui/dock.jsx';
import Menubar from './screens/ui/menubar.jsx';

export default function App() {
  const [showBoot, setShowBoot] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showDesktop, setShowDesktop] = useState(false);
  const [activeApp, setActiveApp] = useState("");
  const [minimizedWindows, setMinimizedWindows] = useState([]);
  const [windows, setWindows] = useState([]);
  
  const useScript = (url) => {
    useEffect(() => {
      if (document.querySelector(`script[src="${url}"]`)) return;

      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }, [url]);
  };

  useScript("https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.js");

  const playClickSound = () => {
    if (typeof window.Tone !== 'undefined') {
      try {
        const synth = new window.Tone.PluckSynth().toDestination();
        synth.triggerAttackRelease("C4", "8n");
        setTimeout(() => synth.dispose(), 500);
      } catch (error) {
        console.warn("error playing sound:", error);
      }
    } else {
      console.warn("Tone.js not loaded.");
    }
  };

  const handleRestoreWindow = (windowId) => {
    const windowToRestore = minimizedWindows.find(w => w.id === windowId);
    if (windowToRestore) {
      setMinimizedWindows(prev => prev.filter(w => w.id !== windowId));
    }
  };

  useEffect(() => {
    const img = new Image();
    img.src = "/login_bg.jpg";
  }, []);

  return (
    <div className="w-screen h-screen relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {showBoot && (
        <Boot
          onBootComplete={() => {
            setShowLogin(true);
            setTimeout(() => setShowBoot(false), 1000);
          }}
        />
      )}
      {showLogin && (
        <div className="absolute inset-0 animate-fade-in">
          <Login 
            onLogin={() => {
            setShowDesktop(true);
            setTimeout(() => setShowLogin(false), 1000);
          }}
          />
        </div>
      )}
      {showDesktop && (
        <div className="absolute inset-0 animate-fade-in">
          <div className="relative w-screen h-screen overflow-hidden">
            <Menubar
              activeApp={activeApp} 
              minimizedWindows={minimizedWindows}
              onRestoredWindow={(windowId) => {
                setMinimizedWindows(prev => prev.filter(w => w.id !== windowId));
              }}
            />
            <Desktop 
              onActiveAppChange={setActiveApp}
              minimizedWindows={minimizedWindows}
              setMinimizedWindows={setMinimizedWindows}
              windows={windows}
              setWindows={setWindows}
            />
            <Dock 
              playClickSound={playClickSound}
              onOpenWindow={(type, title) => {
                const newWindow = {
                  id: Date.now(),
                  type,
                  title: title || type,
                  x: 150 + windows.length * 30,
                  y: 120 + windows.length * 20,
                  width: 600,
                  height: 500,
                };
                setWindows((prev) => [...prev, newWindow]);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
