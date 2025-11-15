import Window from "./window.jsx";

export default function WindowManager({ 
    windows, setWindows, focused, setFocused, changeFocusApp, onMinimized, onAddNote
}) {
    const closeWindow = (id) => {
        setWindows((prev) => prev.filter((w) => w.id !== id));
    };
    const focusWindow = (id) => setFocused(id);

    return (
        <>
            {windows.map((win) => (
                <Window 
                    key={win.id}
                    {...win}
                    onClose={closeWindow}
                    onFocus={focusWindow}
                    isFocused={win.id === focused}
                    focusedApp={() => changeFocusApp(win.title)}
                    onMinimize={onMinimized}
                    onAddnote={onAddNote}
                />
            ))}
        </>
    );
}