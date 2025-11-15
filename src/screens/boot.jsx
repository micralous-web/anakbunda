import { useEffect, useState } from "react";

export default function Boot ({ onBootComplete }) {
    const [showLogo, setShowLogo] = useState(false);

    useEffect(() => {
        setTimeout(() => setShowLogo(true), 1000);
        setTimeout(() => onBootComplete(), 3300);
    }, []);

    return (
        <div className={'w-screen h-screen flex items-center justify-center'}>
            <div className={`absolute inset-0 bg-gradient-to-b from-black to-gray-900`}
            />
            <img
                src="/logo-compact-white.png"
                alt="White Logo"
                className={`
                    w-28 transition-all duration-[1500ms] ease-out
                    ${showLogo ? "scale-100 opacity-100" : "scale-[0.75] opacity-0"}
                    `}
                style={{
                    width: "120px",
                }}
            />
        </div>
    )
}