import { useState, useEffect } from "react";

const dockApps = [
    { name: "About Me", icon: "/icons/icons8-user-100.png", type: "About Me" },
    { name: "Comic Illustration", icon: "/icons/icons8-literature-100.png", type: "Comic Illustration" },
    { name: "Aksasara", icon: "/icons/icons8-book-shelf-100.png", type: "Aksasara" },
    { name: "Hapkido Binus", icon: "/icons/icons8-kimono-100.png", type: "HapkidoBinus" },
    { name: "Binus Finance", icon: "/icons/icons8-coins-100.png", type: "BinusFinance" },
    { name: "Bagi Dunia", icon: "/icons/icons8-geography-100.png", type: "BagiDunia" },
    { name: "Contact Me", icon: "/icons/icons8-technical-support-100.png", type: "Contact Me" },
    { name: "Resume", icon: "/icons/icons8-work-100.png", type: "Resume" },
];

export default function Dock({ playClickSound, onOpenWindow }) {
    const [hoverIndex, setHoverIndex] = useState(null);
    const [bouncingIndex, setBouncingIndex] = useState(null);

    const getScale = (i) => {
        if (hoverIndex === null) return 1;
        const distance = Math.abs(i - hoverIndex);
        if (distance === 0) return 1.8;
        if (distance === 1) return 1.4;
        if (distance === 2) return 1.15;
        return 1;
    };

    const getLift = (i) => {
        if (hoverIndex === null) return 0;
        const distance = Math.abs(i - hoverIndex);
        if (distance === 0) return 12;
        if (distance === 1) return 6;
        if (distance === 2) return 3;
        return 0;
    }

    const handleClick = (i) => {
        setBouncingIndex(i);
        playClickSound();
        setTimeout(() => setBouncingIndex(null), 600);
        const app = dockApps[i];
        if (onOpenWindow && typeof onOpenWindow === 'function') {
            onOpenWindow(app.type, app.name);
        }
    }

    return (
        <div
            className="
                fixed bottom-4 left-1/2 -translate-x-1/2
                flex items-end justify-center gap-8 px-6 py-3
                bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl z-50
                transition-all duration-300
            "
            onMouseLeave={() => setHoverIndex(null)}
        >
            {dockApps.map((app, i) => {
                const scale = getScale(i);
                const lift = getLift(i);
                const isHovered = i === hoverIndex;
                const isBouncing = i === bouncingIndex;

                return (
                    <div
                        key={app.name}
                        className="flex flex-col items-center justify-end relative w-16"
                        onMouseEnter={() => setHoverIndex(i)}
                        onClick={() => handleClick(i)}
                        style={{
                            transform: `translateY(-${lift}px)`,
                            transition: "transform 0.25s ease-out",
                        }}
                    >
                        {isBouncing && (
                            <div 
                                className="absolute bottom-1 h-2 w-6 rounded-full bg-white/70 blur-sm animate-glow-pulse"
                                style={{ zIndex: 0 }}
                            />
                        )}
                        <div className={`${isBouncing ? "animate-bounce-short" : ""}`}>
                            <div
                                className={`
                                    flex flex-col items-center justify-center
                                    p-2 rounded-2xl select-none cursor-pointer
                                    ${isHovered ? "bg-white/40 backdrop-blur-md" : "bg-white/20 backdrop-blur-sm"}
                                    transition-all duration-300    
                                `}
                                style={{ 
                                    transform: `scale(${scale})`,
                                    transformOrigin: "bottom center",
                                }}
                            >
                                <img
                                    src={app.icon}
                                    alt={app.name}
                                    className="w-10 h-10 select-none transition-transform duration-300"
                                    draggable="false"
                                />
                                <span  
                                    className={`
                                        text-[11px] ext-white mt-1 font-medium
                                        transition-opacity duration-300
                                        ${isHovered ? "opacity-100" : "opacity-70"}
                                    `}
                                >
                                    {app.name}
                                </span>  
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}