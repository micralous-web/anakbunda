import { useState, useRef, useEffect } from "react";
import { AboutMeWindow, ComicIllustrationWindow, ContactWindow, ResumeWindow, SocialMediaWindow } from "./windowContent";

export default function Window({ 
    id, title, x = 150, y = 150, width = 420, height = 300, menubarHeight = 40,
    onClose, onFocus, isFocused, focusedApp, type, onMinimize, onAddnote

}) {
    const [position, setPosition] = useState({ x, y });
    const [size, setSize] = useState({ width, height });
    const [isDragging, setDragging] = useState(false);
    const [isResizing, setResizing] = useState(false);
    const [isMinimized, setMinimized] = useState(false);
    const [isMaximized, setMaximized] = useState(false);
    const [floatingNote, setFloatingNote] = useState(null);
    const [hasShownNote, setHasShownNote] = useState(false);
    const dragData = useRef({ offsetX: 0, offsetY: 0 });
    const resizeData = useRef({ startX: 0, startY: 0, startW: 0, startH: 0 });

    const handleMouseDown = (e) => {
        if (isResizing || isMaximized || isMinimized) return;
        onFocus?.(id);
        setDragging(true);
        dragData.current.offsetX = e.clientX - position.x;
        dragData.current.offsetY = e.clientY - position.y;
    };

    const handleResizeMouseDown = (e) => {
        e.stopPropagation();
        onFocus?.(id);
        setResizing(true);
        resizeData.current = {
            startX: e.clientX,
            startY: e.clientY,
            startW: size.width,
            startH: size.height,
        };
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (isDragging) {
                const newX = e.clientX - dragData.current.offsetX;
                const newY = e.clientY - dragData.current.offsetY;
                setPosition({
                    x: Math.max(0, Math.min(newX, window.innerWidth - size.width)),
                    y: Math.max(menubarHeight, Math.min(newY, window.innerHeight - size.height)),
                });
            }
            if (isResizing) {
                const deltaX = e.clientX - resizeData.current.startX;
                const deltaY = e.clientY - resizeData.current.startY;

                setSize({
                    width: Math.max(300, resizeData.current.startW + deltaX),
                    height: Math.max(200, resizeData.current.startH + deltaY),
                });
            }
        };

        const handleMouseUp = () => {
            setDragging(false);
            setResizing(false);
        };

        
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging, isResizing, menubarHeight, size]);

    useEffect(() => {
        if (isFocused) {
            focusedApp(title);

            if (type && !floatingNote && !hasShownNote) {
                const notes = {
                    'About Me': "This is my creative journey! 🎨",
                    'Comic Illustration': "Where stories come to life through art! 📖",
                    'Askasara': "@aksasara Instagram layouting feeds 📚",
                    'HapkidoBinus': "@hapkido_binus Instagram layouting feeds 🥋",
                    'BinusFinance': "@binusfinanceclub Instagram layouting feeds 💰",
                    'BagiDunia': "@bagidunia Instagram layouting feeds 🌍",
                    'Graphic Design': "Where form meets function in beautiful harmony 🎯",
                    'Visual Identity': "Crafting memorable brand experiences 🌟",
                    'Illustration': "Bringing imagination to life with every stroke ✏️",
                    'Contact Me': "Let's create something amazing together! 💫"
                };
                if (notes[title]) {
                    setFloatingNote({
                        text: notes[title],
                        x: Math.random() * 200 + 100,
                        y: Math.random() * 100 + 50,
                    });
                    setHasShownNote(true);
                }
            } else {
                setHasShownNote(false);
                setFloatingNote(null);
            }
        }
    }, [isFocused, title, type, focusedApp])

    const toggleMinimize = () => {
        if (onMinimize && typeof onMinimize === 'function') {
            onMinimize(id, title);
        }
        setMinimized(true);
    };

    const toggleMaximize = () => {
        setMaximized((prev) => {
            if(!prev) {
                setPosition({ x: 0, y: menubarHeight });
                setSize({
                    width: window.innerWidth,
                    height: window.innerHeight - menubarHeight,
                });
            } else {
                setPosition({ x: 150, y: menubarHeight + 100 });
                setSize({ width, height });
            }
            return !prev;
        });
    };

    const renderContent = () => {
        switch (type) {
            case "Comic Illustration":
                return <ComicIllustrationWindow onAddNote={onAddnote} />;
            case "Aksasara":
            case "HapkidoBinus":
            case "BinusFinance":
            case "BagiDunia":
                return <SocialMediaWindow platform={type.toLowerCase()} />;
            case "About Me":
                return <AboutMeWindow onAddNote={onAddnote} />;
            case "Resume":
                return <ResumeWindow onAddNote={onAddnote} />;
            case "Contact Me":
                return <ContactWindow />;
            case 'Graphic Design':
            case 'Visual Identity':
            case 'Illustration':
                return (
                    <div className="p-6 h-full overflow-y-auto">
                        <h2 className="text-2xl font-bold mb-4">{title}</h2>
                        <p className="text-gray-600 mb-6">Explore my {title.toLowerCase()} projects and creations.</p>
                        <div className="grid grid-cols-2 gap-4">
                            {[1, 2, 3].map(num => (
                                <div key={num} className="bg-gray-100 rounded-lg p-4 text-center">
                                    <div className="w-full h-32 bg-gray-300 rounded mb-2 flex items-center justify-center">
                                        <span className="text-gray-500">Project {num}</span>
                                    </div>
                                    <p className="text-sm font-medium">Sample Project {num}</p>
                                </div>
                            ))}
                        </div>
                        <button 
                            onClick={() => onAddNote?.(`I'm passionate about ${title}! Each project tells a unique story.`)}
                            className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                            Add Thought
                        </button>
                    </div>
                );
            default:
                return <div className="p-4 text-gray-700">Content not available.</div>;
        }
    };

    if (isMinimized) return null;

    return (
        <div
            className={`
                absolute bg-white/90 border border-gray-300 rounded-xl shadow-lg
                transition-all duration-200
                ${isFocused ? "z-50" : "z-40 opacity-90"}
                ${isMaximized ? "bg-gray-300" : "bg-gray-200/70"}
            `}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: `${size.width}px`,
                height: `${size.height}px`,
                backdropFilter: isMaximized ? "none" : "blur(12px)",
                WebkitBackdropFilter: isMaximized ? "none" : "blur(12px)",
            }}
            onMouseDown={(e) => {
                if (e.target.tagName === "BUTTON") return;
                focusedApp(title);
                onFocus?.(id);
                handleMouseDown(e);
            }}
        >
            {isFocused && floatingNote && (
                <div 
                    className="absolute z-50 bg-yellow-100 border border-yellow-300 rounded-lg p-3 shadow-lg max-w-xs"
                    style={{
                        left: `${floatingNote.x}px`,
                        top: `${floatingNote.y}px`,
                    }}
                >
                    <div className="flex items-start gap-2">
                        <span className="text-lg">💭</span>
                        <p className="text-sm text-yellow-800">{floatingNote.text}</p>
                    </div>
                    <button 
                        onClick={() => setFloatingNote(null)}
                        className="absolute top-1 right-1 text-yellow-600 hover:text-yellow-800"
                    >
                        ×
                    </button>
                </div>
            )}

            <div
                className="flex items-center justify-between px-3 py-1 bg-gray-200/70 cursor-move rounded-t-xl select-none"
            >
                <div className="flex items-center gap-2 z-10">
                    <button
                        className="w-3 h-3 rounded-full transition-colors active:scale-95 bg-red-500 hover:bg-red-600"
                        onClick={(e) => { 
                            e.stopPropagation();
                            onClose(id);
                        }}
                    ></button>
                    <button
                        className="w-3 h-3 rounded-full transition-colors active:scale-95 bg-yellow-500 hover:bg-yellow-600"
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleMinimize();
                        }}
                    ></button>
                    <button
                        className="w-3 h-3 rounded-full transition-colors active:scale-95 bg-green-500 hover:bg-green-600"
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleMaximize();
                        }}
                    ></button>
                </div>
                <p className="text-sm font-medium text-gray-800">{title}</p>
                <div className="w-10" />
            </div>
            
            <div className="h-[calc(100%-40px)] overflow-hidden">
                {renderContent()}
            </div>

            <div
                className="absolute bottom-1 right-1 w-4 h-4 cursor-se-resize z-50"
                onMouseDown={handleResizeMouseDown}
            >
                <div className="w-full h-full border-r-2 border-b-2 border-gray-400 rounded-sm"></div>
            </div>

        </div>
    )
}