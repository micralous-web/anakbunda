import { useState } from "react";
import WindowManager from "./windowManager.jsx";

export default function Desktop({
    onActiveAppChange, minimizedWindows, setMinimizedWindows, windows, setWindows
}) {
    const [focused, setFocused] = useState(null);
    const [floatingNotes, setFloatingNotes] = useState([]);

    const desktopApps = [
        /*{ name: "Graphic Design", icon: "/icons/icons8-folder.svg", type: "Graphic Design" },
        { name: "Visual Identity", icon: "/icons/icons8-folder.svg", type: "Visual Identity" },
        { name: "Illustration", icon: "/icons/icons8-folder.svg", type: "Illustration" }*/
    ];

    const openWindow = (type) => {
        const existing = windows.find((w) => w.type === type);
        if (existing) {
            setFocused(existing.id);
            setMinimizedWindows(prev => prev.filter(w => w.id !== existing.id));
            return;
        }
        const newWindow = {
            id: Date.now(),
            type,
            title: type,
            x: 150 + windows.length * 30,
            x: 120 + windows.length * 20,
            width: 600,
            height: 500,
        };
        setWindows((prev) => [...prev, newWindow]);
        setFocused(newWindow.id);
    };

    const handleMinimize = (windowId, title) => {
        const windowToMinimize = windows.find(w => w.id === windowId);
        if (windowToMinimize) {
            setMinimizedWindows(prev => [...prev, { 
                id: windowId, 
                title,
                type: windowToMinimize.type 
            }]);
            setWindows(prev => prev.filter(w => w.id !== windowId));
            setFocused(null);
        }
    };

    const handleAddNote = (noteText) => {
        const newNote = {
            id: Date.now(),
            text: noteText,
            x: Math.random() * 300 + 100,
            y: Math.random() * 200 + 100
        };
        setFloatingNotes(prev => [...prev, newNote]);
    };

    return (
        <div
            className="
                w-screen h-screen bg-cover bg-center relative overflow-hidden
                bg-gradient-to-b from-black to-gray-900 select-none
            "
            style={{
                backgroundImage: `url('/login_bg.jpg')`,
                 
            }}
        >
            <div className="absolute top-14 left-6 space-y-4 flex-col gap-4 z-10">
                {desktopApps.map((app) => ( 
                    <button
                        key={app.name}
                        onClick={() => openWindow(app.type, app.name)}
                        className="
                            group flex flex-col items-center rounded-xl
                            gap-1 p-3 text-white
                            transition-all duration-300 
                            hover:opacity-80 hover:bg-white/20 hover:backdrop-blur-sm hover:scale-105
                        "
                    >
                        <div className="relative flex items-center justify-center">
                            <img 
                                src={app.icon}
                                alt={app.name}
                                className="w-12 h-16 hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <span
                            className="
                                text-sm text-white drop-shadow-sm mt-2
                                group-hover:font-medium transition-all duration-300
                            "
                        >
                            {app.name}
                        </span>
                    </button>
                ))}
            </div>

            {floatingNotes.map(note => (
                <div
                    key={note.id}
                    className="absolute bg-yellow-100 border border-yellow-300 rounded-lg p-3 shadow-lg max-w-xs z-30"
                    style={{
                        left: `${note.x}px`,
                        top: `${note.y}px`,
                    }}
                >
                    <div className="flex items-start gap-2">
                        <span className="text-lg">📝</span>
                        <p className="text-sm text-yellow-800">{note.text}</p>
                    </div>
                    <button 
                        onClick={() => setFloatingNotes(prev => prev.filter(n => n.id !== note.id))}
                        className="absolute top-1 right-1 text-yellow-600 hover:text-yellow-800"
                    >
                        ×
                    </button>
                </div>
            ))}

            <WindowManager
                windows={windows}
                setWindows={setWindows} 
                focused={focused}
                setFocused={setFocused}
                changeFocusApp={onActiveAppChange}
                onMinimized={handleMinimize}
                onAddNote={handleAddNote}
            />
        </div>
    );
}