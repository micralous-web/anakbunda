import { useState, useEffect } from "react";

export default function Menubar({ activeApp, minimizedWindows, onRestoreWindow }) {
    const [time, setTime] = useState("");
    const [showMinimized, setShowMinimized] = useState(false);

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit"}));
        };
        updateClock();

        const interval = setInterval(updateClock, 1000);
        
        return () => clearInterval(interval);
    }, []);

    const handleRestoreClick = (windowId) => {
        if (onRestoreWindow && typeof onRestoreWindow === 'function') {
            onRestoreWindow(windowId);
        }
    };

    return (
        <div
            className="
                w-full h-10
                bg-white/30 backdrop-blur-md
                border-b border-white/20
                flex items-center justify-between px-4
                text-white text-sm 
                fixed top-0 left-0 z-[9999]
            "
        >
            <div className="flex items-center gap-6">
                <span className="font-semibold text-lg cursor-pointer hover:opacity-80">saki</span>
                <span className="font-medium px-2 py-1 bg-white/10 rounded">{activeApp || "Finder"}</span>
                {minimizedWindows.length > 0 && (
                    <div className="relative">
                        <button 
                            onClick={() => setShowMinimized(!showMinimized)}
                            className="flex items-center gap-1 hover:bg-white/20 px-2 py-1 rounded"
                        >
                            <span>📱</span>
                            <span>{minimizedWindows.length}</span>
                        </button>
                        
                        {showMinimized && (
                            <div className="absolute top-10 left-0 bg-white/90 backdrop-blur-md rounded-lg shadow-lg p-2 min-w-48 z-50">
                                {minimizedWindows.map(window => (
                                    <div 
                                        key={window.id}
                                        className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded cursor-pointer"
                                        onClick={() => {
                                            handleRestoreClick(window.id);
                                            setShowMinimized(false);
                                        }}
                                    >
                                        <span className="text-xs">📄</span>
                                        <span className="text-gray-800 text-sm">{window.title}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
                <span className="cursor-default hover:opacity-80 transition-opacity hidden sm:inline">Home</span>
                <span className="cursor-default hover:opacity-80 transition-opacity hidden sm:inline">Product</span>
                <span className="cursor-default hover:opacity-80 transition-opacity hidden sm:inline">About Me</span>
                <span className="cursor-default hover:opacity-80 transition-opacity hidden sm:inline">Contact Me</span>
            </div>
            <div className="flex items-center gap-4">
                <span className="text-lg cursor-pointer hover:opacity-70" title="Sound">🔊</span>
                <span className="text-lg cursor-pointer hover:opacity-70" title="Battery">🔋</span>
                <span className="font-medium">{time}</span>
            </div>
        </div>
    );
}