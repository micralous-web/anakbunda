export default function Login({ onLogin }) {

    const handleLogin = () => { 
        setTimeout(() => onLogin(), 500 );
    }

    return (
        <div className={`
                w-screen h-screen bg-cover bg-center bg-gradient-to-b from-black to-gray-900
                flex flex-col justify-center items-center
                transition-opacity duration-1000
            `}
            style={{ backgroundImage: `url('/login_bg.jpg')` }} >

            <div className="absolute inset-0 backdrop-blur-sm bg-black/30" />

            <div className="backdrop-blur-md bg-white/10 p-8 rounded-2xl shadow-xl flex flex-col items-center">
                <img
                    src="/avatar.jpg"
                    alt="User Avatar"
                    className="w-20 h-20 rounded-full mb-4"
                />
                <h2 className="text-white text-xl mb-3">Guest User</h2>
                <button
                    onClick={handleLogin}
                    className="px-6 py-2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-lg rounded-lg transition"
                >
                    Login
                </button>
            </div>
        </div>
    );
}