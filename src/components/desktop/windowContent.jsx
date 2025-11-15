import { useState } from 'react';

export const ComicIllustrationWindow = ({ onAddNote }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const comics = [
        { id: 1, src: '/comic-1.png', title: "Sundel Bolong - Mie Bangladesh", alt: 'Comic 1' },
        { id: 2, src: '/comic-2.png', title: "Malin Kundang", alt: 'Comic 2' },
    ];

    const handleAddNoteClick = (text) => {
    if (onAddNote && typeof onAddNote === 'function') {
      onAddNote(text);
    }
  };

    return (
        <div className="p-4 h-full overflow-y-auto">
            {selectedImage ? (
                <div className="items-center">
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="mb-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
                    >
                        <i class="fi fi-br-angle-double-left"></i>Kembali
                    </button>
                    <img 
                        src={selectedImage.src} 
                        alt={selectedImage.alt} 
                        className="max-w-full max-h-96 mx-auto mb-4 rounded-lg shadow-lg" 
                    />
                    <h3 className="text-lg font-bold mb-2 text-center">{selectedImage.title}</h3>  
                    <p className="mb-4 text-justify">{selectedImage.alt}</p>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {comics.map((comic) => (
                            <div 
                                key={comic.id}
                                className="
                                    cursor-pointer transform hover:scale-105 transition-transform transform-duration-300
                                    bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-2
                                "
                                onClick={() => setSelectedImage(comic)}
                            >
                                <img
                                    src={comic.src}
                                    alt={comic.alt}
                                    className="w-full h-48 object-cover rounded-lg mb-2 shadow-md"
                                />
                                <p className="text-center text-gray-200 font-medium">{comic.title}</p>
                            </div>
                        ))}
                    </div>
                    <button 
                        onClick={() => handleAddNoteClick("I love how comics tell stories through sequential art! Each panel is like a frozen moment in time.")}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        Add Thought
                    </button>
                </>
            )}
        </div>
    );
};

export const SocialMediaWindow = ({ platform }) => {
    const posts = {
        aksarasa: [
            { 
                id: 1, 
                image: "/portfolios/aksasara/Screenshot 2024-12-04 085206.jpg",
                content: "Post mengenai BIM (1)",
            },
            { 
                id: 2, 
                image: "/portfolios/aksasara/Screenshot 2024-12-04 085943.jpg",
                content: "Post mengenai BIM (2)",
            },
            {
                id: 3,
                image: "/portfolios/aksasara/Screenshot 2024-12-11 145420.jpg",
                content: "Post mengenai BIM (3)",
            },
        ],
        hapkidobinus: [
            {
                id: 1,
                image: "/portfolios/hapkidobinus/01.jpg",
                content: `
                    📢🥋HASIL PEMILU HAPKIDO BINUS 2025🥋📢 <br>
                    Dengan rasa bangga, kami mengumumkan bahwa: <br> 
                     2️⃣ MICHELLE FUNG <br>
                    Terpilih menjadi KETUA HAPKIDO BINUS Periode 2026/2027. <br>
                    Salam HAPKI, KAMSAHAMNIDA, SARANGHAMNIDA <br>
                    HAPKIDO
                `,
                link: "https://www.instagram.com/p/DQDIohyEpJg/",
            },
            {
                id: 2, 
                image: "/portfolios/hapkidobinus/02.jpg",
                content: `
                    📢🥋HASIL PEMILU HAPKIDO BINUS 2025🥋📢 <br>
                    Dengan rasa bangga, kami mengumumkan bahwa: <br> 
                     2️⃣ MICHELLE FUNG <br>
                    Terpilih menjadi KETUA HAPKIDO BINUS Periode 2026/2027. <br>
                    Salam HAPKI, KAMSAHAMNIDA, SARANGHAMNIDA <br>
                    HAPKIDO
                `,
                link: "https://www.instagram.com/p/DQDIJmQEj0C/",
            },
            {
                id: 3,
                image: "/portfolios/hapkidobinus/03.jpg",
                content: `
                    📢🥋HASIL PEMILU HAPKIDO BINUS 2025🥋📢 <br>
                     Dengan rasa bangga, kami mengumumkan bahwa: <br> 
                     2️⃣ MICHELLE FUNG <br>
                    Terpilih menjadi KETUA HAPKIDO BINUS Periode 2026/2027. <br> <br>
                    Salam HAPKI, KAMSAHAMNIDA, SARANGHAMNIDA <br>
                    HAPKIDO
                `,
                link: "https://www.instagram.com/p/DQDHlFRkqL9/",    
            },
            {
                id: 4,
                image: "/portfolios/hapkidobinus/04.jpg",
                content: `
                    📢 Pemilihan Umum Ketua Hapkido BINUS 2026/2027 📢 <br>
                    Gunakan hak suara kalian dengan bijak untuk memilih pemimpin periode selanjutnya! <br>
                    Jangan lewatkan Pemilihan Umum yang akan dilaksanakan pada: <br>
                    🗓 Jumat, 17 Oktober 2025 <br>
                    ⏰ : 13.20-15.00 <br>
                    📍 : A0501, Alam Sutera Binus Main Campus <br> <br>
                    Salam HAPKI, KAMSAHAMNIDA, SARANGHAMNIDA <br>
                    HAPKIDO 🥋
                `,
                link: "https://www.instagram.com/p/DQDG6KuEmla/",
            },
            {
                id: 5,
                image: "/portfolios/hapkidobinus/05.jpg",
                content: `
                    📢 Pemilihan Umum Ketua Hapkido BINUS 2026/2027 📢 <br>
                    Gunakan hak suara kalian dengan bijak untuk memilih pemimpin periode selanjutnya! <br>
                    Jangan lewatkan Pemilihan Umum yang akan dilaksanakan pada: <br>
                    🗓 Jumat, 17 Oktober 2025 <br>
                    ⏰ : 13.20-15.00 <br>
                    📍 : A0501, Alam Sutera Binus Main Campus <br> <br>
                    Salam HAPKI, KAMSAHAMNIDA, SARANGHAMNIDA <br>
                    HAPKIDO 🥋
                `,
                link: "https://www.instagram.com/p/DQDGWfDEive/",
            },
            {
                id: 6,
                image: "/portfolios/hapkidobinus/06.jpg",
                content: `
                    📢 Pemilihan Umum Ketua Hapkido BINUS 2026/2027 📢 <br>
                    Gunakan hak suara kalian dengan bijak untuk memilih pemimpin periode selanjutnya! <br>
                    Jangan lewatkan Pemilihan Umum yang akan dilaksanakan pada: <br>
                    🗓 Jumat, 17 Oktober 2025 <br>
                    ⏰ : 13.20-15.00 <br>
                    📍 : A0501, Alam Sutera Binus Main Campus <br> <br>
                    Salam HAPKI, KAMSAHAMNIDA, SARANGHAMNIDA <br>
                    HAPKIDO 🥋
                `,
                link: "https://www.instagram.com/p/DQDFw3VEv0T/",
            },
            {
                id: 7,
                image: "/portfolios/hapkidobinus/07.jpg",
                content: `
                    [KANDIDAT 1️⃣ CALON KETUA HAPKIDO 2026/2027] <br>
                    👤Jibril lutf Minang Warman <br>
                    🎓 DKV NEW MEDIA <br> <br>
                    VISI <br>
                    Membangun Hapkido menjadi tempat bagi komunitas, disiplin, dan keamanan sambil menjaga standar yang tepat dan profesional, serta memberikan kesempatan untuk membangun kepercayaan diri dan mencapai prestasi. <br> <br>
                    MISI <br>
                    <ul>
                        <li> 1. Membangun ruang di mana disiplin, tanggung jawab, dan nilai-nilai moral dalam hapkido ditanamkan dan dipraktikkan. <br> </li>
                        <li> 2. Menerapkan program latihan yang seimbang antara kebutuhan pemula dan menengah, serta pelatihan bagi mereka yang bertujuan mencapai prestasi. <br> </li>
                        <li> 3. Membangun dan meningkatkan struktur organisasi agar dapat terus berlanjut dan memenuhi kebutuhan Hapkido serta anggotanya. <br> </li>
                        <li> 4. Membangun hubungan melalui Hapkido dan komunitas yang dibentuknya, serta antara anggota dengan saling menghormati dan bertanggung jawab, guna menumbuhkan komunitas yang berkembang. <br> <br> </li>
                    </ul>
                    Jangan lupa berikan dukungan dan gunakan suara kalian untuk para Calon Ketua Hapkido BINUS 2026/2027‼️ <br><br>

                    Salam HAPKI, KAMSAHAMNIDA, SARANGHAMNIDA <br>
                    HAPKIDO 🥋
                `,
                link: "https://www.instagram.com/p/DP43xqNkggL/",
            },
            {
                id: 8,
                image: "/portfolios/hapkidobinus/08.jpg",
                content: `
                    [KANDIDAT 2️⃣ CALON KETUA HAPKIDO 2026/2027] <br>
                    👤Michelle Fung <br>
                    🎓 FINANCE <br> <br>
                    VISI <br>
                    Meneguhkan posisi Hapkido Binus sebagai organisasi seni bela diri dengan identitas kuat dan kontribusi berkelanjutan, melalui sistem organisasi yang solid, nilai yang dijaga, dan gerak strategis jangka panjang. <br><br>
                    MISI <br>
                    <ul>
                        <li> 1. Membentuk karakter tangguh dan bertanggung jawab melalui internalisasi dari nilai-nilai Hapkido dalam kehidupan sehari-hari. <br></li>
                        <li> 2. Mengembangkan kemampuan bela diri sebagai bentuk perlindungan diri sekaligus sarana membangun empati dan tanggung jawab sosial. <br> </li>
                        <li> 3. Membangun budaya organisasi yang inklusif dan suportif agar setiap anggota merasa terhubung dan memiliki ruang aktualisasi untuk bertumbuh. <br> </li>
                        <li> 4. Mendorong semangat kompetitif yang sehat dengan memfasilitasi keikutsertaan dalam ajang tanding dan pengembangan kapasitas anggota. <br> </li>
                        <li> 5. Memperkuat sistem organisasi melalui struktur kerja yang jelas, manajemen yang profesional dan adaptif, serta regenerasi aktif </li>
                    </ul>
                    Jangan lupa berikan dukungan dan gunakan suara kalian untuk para Calon Ketua Hapkido BINUS 2026/2027‼️ <br><br>

                    Salam HAPKI, KAMSAHAMNIDA, SARANGHAMNIDA <br>
                    HAPKIDO 🥋
                `,
                link: "https://www.instagram.com/p/DP43LCKEsSP/",
            },
            {
                id: 9,
                image: "/portfolios/hapkidobinus/09.jpg",
                content: `
                    [KANDIDAT 3️⃣ CALON KETUA HAPKIDO 2026/2027] <br>
                    👤Yupriando <br>
                    🎓 COMPUTER SCIENCE <br> <br>
                    VISI <br>
                    Menjadikan Hapkido Binus sebagai komunitas bela diri yang maju, terarah, terstruktur, dan profesional, serta aktif dalam membentuk karakter dan prestasi anggota di tingkat nasional maupun internasional. <br> <br>
                    MISI <br>
                    <ul>
                        <li> 1. Menanamkan nilai kejujuran, tanggung jawab, sopan santun, dan saling menghormati sebagai dasar sikap setiap anggota Hapkido Binus. </li>
                        <li> 2. Memperkuat struktur organisasi dan meningkatkan kualitas manajemen komunitas Hapkido secara berkelanjutan. </li>
                        <li> 3. Mendorong dan mendukung anggota untuk berprestasi dalam kompetisi tingkat nasional hingga internasional. </li>
                        <li> 4. Membangun lingkungan yang sehat, suportif, dan solid untuk mendukung pertumbuhan fisik maupun mental seluruh anggota. </li>
                        <li> 5. Mendorong inovasi dan kaloborasi, baik internal maupun eksternal, untuk meningkatkan potensi anggota melalui seminar, pelatihan tambahan dan kerja sama dengan komunitas bela diri lainnya. </li>
                    Jangan lupa berikan dukungan dan gunakan suara kalian untuk para Calon Ketua Hapkido BINUS 2026/2027‼️ <br><br>
                    Salam HAPKI, KAMSAHAMNIDA, SARANGHAMNIDA <br>
                    HAPKIDO 
                `,
                link: "https://www.instagram.com/p/DP42mJYElAS/",
            },
            {
                id: 10,
                image: "/portfolios/hapkidobinus/10.jpg",
                content: `
                    Internal Bonding Kabinet Sarangbeo🦜✨️ <br> <br>
                    Salam HAPKI, KAMSAHAMNIDA, SARANGHAMNIDA <br>
                    HAPKIDO 🥋
                `,
                link: "https://www.instagram.com/p/DP4XfXwEs3f/",
            },
            {
                id: 11,
                video: "/portfolios/hapkidobinus/11.mp4",
                content: `
                    🎉HAPKIDO WELCOMING PARTY 2025🎉 <br> <br>
                    Pada tanggal 10 September 2025, Hapkido Binus telah mengadakan Welcoming Party dengan meriah dan penuh keseruan menyambut bergabungnya anggota baru. <br>
                    Acara ini dipenuhi dengan berbagai permainan seru yang melatih kekompakan tim, seperti touch and don't touch the color yang melatih konsentrasi setiap anggota, octopus race yang menguji kekompakan tim, dont drop the balloon with your head yang membutuhkan koordinasi solid, serta find your team mate with animal voice yang mengundang tawa. <br>
                    Acara yang penuh dengan semangat dan keceriaan tidak hanya mempererat hubungan antar anggota, tetapi juga memperkenalkan semangat solidaritas dari organisasi Hapkido Binus. <br> <br>
                    Salam HAPKI, KAMSAHAMNIDA, SARANGHAMNIDA <br>
                    HAPKIDO 🥋
                `,
                link: "https://www.instagram.com/p/DO5iCB6EmoX/",
            },
            {
                id: 12,
                image: "/portfolios/hapkidobinus/12.webp",
                content: `
                    Selamat memperingati Maulid Nabi Muhammad SAW 1447 H🌙 <br>
                    Semoga kita mampu meneladani akhlak Rasulullah dalam kehidupan bermasyarakat, menebar cinta, damai, dan rahmat bagi semesta 🤲 <br> <br>
                    Salam HAPKI, KAMSAHAMNIDA, SARANGHAMNIDA <br>
                    HAPKIDO 🥋
                `,
                link: "https://www.instagram.com/p/DONDsFsEt2Z/",
            },
            {
                id: 13,
                image: "/portfolios/hapkidobinus/13.jpg",
                content: `
                    Halo Freshmen! 👋 <br>
                    Jumpa kami di Booth 41 – Hapkido BINUS di Expo B29! 🥋✨ <br> <br>
                    📍Lokasi booth: <br>
                    Lobby Dalem - Booth 41, BINUS Alam Sutera <br>
                    🗓️Tanggal: <br>
                    25 - 27 Agustus 2025 <br>
                    ⏰ Waktu visit booth: <br>
                    07.20 – 11.00 <br>
                    13.20 – 17.00 <br> <br>
                    Build confidence, discipline, and self-defense skills. Join us at Booth 41! <br><br>
                    SALAM HAPKI!!🥋
                `,
                link: "https://www.instagram.com/p/DNwQhfjZI4d/",
            },
            {
                id: 14,
                image: "/portfolios/hapkidobinus/14.jpg",
                content: `
                    College is tough, but you can be tougher. Learn self-defense with us at Booth 41! 🥋💪 <br> <br>
                    Halo Freshmen! 👋 <br>
                    Jumpa kami di Booth 41 – Hapkido BINUS di Expo B29! 🥋✨ <br> <br>
                    📍Lokasi booth: <br>
                    Lobby Dalem - Booth 41, BINUS Alam Sutera <br>
                    🗓️Tanggal: <br>
                    25 - 27 Agustus 2025 <br>
                    ⏰ Waktu visit booth: <br>
                    07.20 – 11.00 <br>
                    13.20 – 17.00 <br> <br>
                    Build confidence, discipline, and self-defense skills. Join us at Booth 41! <br><br>
                    SALAM HAPKI!!🥋
                `,
                link: "https://www.instagram.com/p/DNwP3ns5Hyx/",
            },
            {
                id: 15,
                image: "/portfolios/hapkidobinus/14.jpg",
                content: `
                    Halo Freshmen! 👋 <br>
                    Jumpa kami di Booth 41 – Hapkido BINUS di Expo B29! 🥋✨ <br> <br>
                    📍Lokasi booth: <br>
                    Lobby Dalem - Booth 41, BINUS Alam Sutera <br>
                    🗓️Tanggal: <br>
                    25 - 27 Agustus 2025 <br>
                    ⏰ Waktu visit booth: <br>
                    07.20 – 11.00 <br>
                    13.20 – 17.00 <br> <br>
                    Build confidence, discipline, and self-defense skills. Join us at Booth 41! <br><br>
                    SALAM HAPKI!!🥋
                `,
                link: "https://www.instagram.com/p/DNwPT_hZBYW/",
            },
            {
                id: 16,
                image: "/portfolios/hapkidobinus/16.jpg",
                content: `
                    KEPENGURUSAN HAPKIDO TAHUN 2025/2026 <br> <br>
                    SALAM HAPKI!!🥋 <br>
                    Perkenalkan Saya Jesslyn adalah Bendahara dari kepengurusan HAPKIDO periode 2025/2026, Kabinet Sarangbeo🦜✨
                `,
                link: "https://www.instagram.com/p/DNr35TV5Hts/",
            },
            {
                id: 17,
                image: "/portfolios/hapkidobinus/17.jpg",
                content: `
                    KEPENGURUSAN HAPKIDO TAHUN 2025/2026 <br> <br>
                    SALAM HAPKI!!🥋 <br>
                    Perkenalkan Saya Bibi adalah Ketua dari kepengurusan HAPKIDO periode 2025/2026, Kabinet Sarangbeo🦜✨
                `,
                link: "https://www.instagram.com/p/DNr3yv85PlE/",
            },
            {
                id: 18,
                image: "/portfolios/hapkidobinus/18.jpg",
                content: `
                    KEPENGURUSAN HAPKIDO TAHUN 2025/2026 <br> <br>
                    SALAM HAPKI!!🥋 <br>
                    Perkenalkan Saya Marvella adalah Sekretaris dari kepengurusan HAPKIDO periode 2025/2026, Kabinet Sarangbeo🦜✨
                `,
                link: "https://www.instagram.com/p/DNr3oYT5KUr/",
            },
            {
                id: 19,
                image: [
                    "/portfolios/hapkidobinus/19-1.jpg",
                    "/portfolios/hapkidobinus/19-2.jpg",
                    "/portfolios/hapkidobinus/19-3.jpg",
                    "/portfolios/hapkidobinus/19-4.jpg",
                    "/portfolios/hapkidobinus/19-5.jpg",
                ],
                content: `
                    KEPENGURUSAN HAPKIDO TAHUN 2025/2026 <br> <br>
                    SALAM HAPKI!!🥋 <br>
                    Perkenalkan kami dari divisi Humas dalam kepengurusan HAPKIDO periode 2025/2026, Kabinet Sarangbeo🦜✨
                `,
                link: "https://www.instagram.com/p/DNr3P4IZJjK/?img_index=1",
            },
            {
                id: 20,
                image: [
                    "/portfolios/hapkidobinus/20-1.jpg",
                    "/portfolios/hapkidobinus/20-2.jpg",
                    "/portfolios/hapkidobinus/20-3.jpg",
                    "/portfolios/hapkidobinus/20-4.jpg",
                    "/portfolios/hapkidobinus/20-5.jpg",
                ],
                content: `
                    KEPENGURUSAN HAPKIDO TAHUN 2025/2026 <br> <br>
                    SALAM HAPKI!!🥋 <br>
                    Perkenalkan kami dari divisi Coaching dalam kepengurusan HAPKIDO periode 2025/2026, Kabinet Sarangbeo🦜✨
                `,
                link: "https://www.instagram.com/p/DNr2svHZGh3/?img_index=1",
            },
            {
                id: 21,
                image: [
                    "/portfolios/hapkidobinus/21-1.jpg",
                    "/portfolios/hapkidobinus/21-2.jpg",
                    "/portfolios/hapkidobinus/21-3.jpg",
                    "/portfolios/hapkidobinus/21-4.jpg",
                ],
                content: `
                    KEPENGURUSAN HAPKIDO TAHUN 2025/2026 <br> <br>
                    SALAM HAPKI!!🥋 <br>
                    Perkenalkan kami dari divisi Internal dalam kepengurusan HAPKIDO periode 2025/2026, Kabinet Sarangbeo🦜✨
                `,
                link: "https://www.instagram.com/p/DNr2F59ZGMU/?img_index=1",
            },
            {
                id: 22,
                image: [
                    "/portfolios/hapkidobinus/22-1.jpg",
                    "/portfolios/hapkidobinus/22-2.jpg",
                    "/portfolios/hapkidobinus/22-3.jpg",
                    "/portfolios/hapkidobinus/22-4.jpg",
                    "/portfolios/hapkidobinus/22-5.jpg",
                    "/portfolios/hapkidobinus/22-6.jpg",
                    "/portfolios/hapkidobinus/22-7.jpg",
                    "/portfolios/hapkidobinus/22-8.jpg",
                    "/portfolios/hapkidobinus/22-9.jpg",
                ],
                content: `
                    ✨SEAHU Championship 2025🥇🥈🥉✨ <br>
                    Proud Moment for BINUS Hapkido! <br>
                    In the South East Asia Hapkido Union Championship 2025 in Yogyakarta, our athletes brought home 3 medals from 2 categories — Hyung and Hoshinsul. <br><br>
                    🥇 Karel Windawan & Jovan Keane Christantio — Hoshinsul <br>
                    🥈 Anastasia Marvella Kurnia & Rasxelz Cornelius Khu — Hoshinsul <br>
                    🥉 Saski Riqzin — Hyung <br> <br>
                    Huge congratulations to our Athletes for their hard work, dedication and commitment💪✨ <br> <br>
                    Salam HAPKI, KAMSAHAMNIDA, SARANGHAMNIDA, HAPKIDO 🥋
                `,
                link: "https://www.instagram.com/p/DNpGKQjy1bX/?img_index=1",
            },
            {
                id: 23,
                image: "/portfolios/hapkidobinus/23.webp",
                content: `
                    Selamat Tahun Baru Islam 1447 H🌙 <br>
                    Semoga kita terus diberi kekuatan untuk berhijrah ke arah yang lebih baik, dalam hidup dan pengabdian. 🤲 <br> <br>

                    Salam HAPKI, KAMSAHAMNIDA, SARANGHAMNIDA <br>
                    HAPKIDO 🥋
                `,
                link: "https://www.instagram.com/p/DLYx51APWMF/",
            },
            {
                id: 24,
                image: "/portfolios/hapkidobinus/24.webp",
                content: `
                    Selamat Hari Raya Idul Adha 1446 H 🕌✨️ <br>
                    Semoga nilai-nilai keikhlasan, pengorbanan, dan kepedulian senantiasa hadir dalam setiap langkah kita. 🤲 <br> <br>

                    Salam HAPKI, KAMSAHAMNIDA, SARANGHAMNIDA <br>
                    HAPKIDO 🥋
                `,
                link: "https://www.instagram.com/p/DKimDE4Sqji/",
            },
            {
                id: 25,
                image: "/portfolios/hapkidobinus/25.webp",
                content: `
                    Selamat Hari Pendidikan Nasional! <br>
                    Mari jadikan momentum ini sebagai pengingat pentingnya pendidikan dalam membentuk karakter, pengetahuan, dan masa depan bangsa. Terus kobarkan semangat belajar demi Indonesia yang lebih maju. 📚🇮🇩 <br> <br>

                    Salam HAPKI, KAMSAHAMNIDA, SARANGHAMNIDA <br>
                    HAPKIDO 🥋
                `,
                link: "https://www.instagram.com/p/DJKLL0LBgkD/",
            },
            {
                id: 26,
                image: "/portfolios/hapkidobinus/26.webp",
                content: `
                    Selamat Hari Buruh! <br>
                    Teruslah bekerja dengan semangat, karena setiap usaha kecilmu punya dampak besar.  <br> <br>

                    Salam HAPKI, KAMSAHAMNIDA, SARANGHAMNIDA <br>
                    HAPKIDO 🥋
                `,
                link: "https://www.instagram.com/p/DJHEak4hQnj/",
            }
        ],
        binusfinance: [
            {
                id: 1,
                image: [
                    "/portfolios/binusfinance/untr/1.png",
                    "/portfolios/binusfinance/untr/2.png",
                    "/portfolios/binusfinance/untr/3.png",
                    "/portfolios/binusfinance/untr/4.png",
                    "/portfolios/binusfinance/untr/5.png",
                    "/portfolios/binusfinance/untr/6.png",
                    "/portfolios/binusfinance/untr/7.png",
                    "/portfolios/binusfinance/untr/8.png",
                ],
                content: `cung yang invest di UNTR👆🆙 <br> menurut kalian gimana sih performance dari company ini?`,
                link: "https://www.instagram.com/p/DKl38geyxNt/?img_index=1",
            },
            {
                id: 2,
                image: [
                    "/portfolios/binusfinance/e-ipo/1.png",
                    "/portfolios/binusfinance/e-ipo/2.png",
                    "/portfolios/binusfinance/e-ipo/3.png",
                    "/portfolios/binusfinance/e-ipo/4.png",
                    "/portfolios/binusfinance/e-ipo/5.png",
                    "/portfolios/binusfinance/e-ipo/6.png",
                    "/portfolios/binusfinance/e-ipo/7.png",
                    "/portfolios/binusfinance/e-ipo/8.png",
                ],
                content: `siapa nih yang sering ikutan E-IPO? yuk simak sampe habis🤩‼️`,
                link: "https://www.instagram.com/p/DNOFyPuyQ7F/?img_index=1",
            },
            {
                id: 3,
                image: [
                    "/portfolios/binusfinance/regulasi/1.png",
                    "/portfolios/binusfinance/regulasi/2.png",
                    "/portfolios/binusfinance/regulasi/3.png",
                    "/portfolios/binusfinance/regulasi/4.png",
                    "/portfolios/binusfinance/regulasi/5.png",
                    "/portfolios/binusfinance/regulasi/6.png",
                    "/portfolios/binusfinance/regulasi/7.png",
                    "/portfolios/binusfinance/regulasi/8.png",
                ],
                content: `
                    Perjalanan kripto di Indonesia nggak instan dari belum diakui, sampai akhirnya punya regulasi resmi ⚖️ <br> <br>
                    Kalau kalian sendiri, udah ikut tren crypto belum? 👀
                `,
                link: "https://www.instagram.com/p/DPgSf3UEjon/?img_index=1",
            },
            {
                id: 4,
                image: "/portfolios/binusfinance/poster.png",
                content: "BNFC Goes to Stockbit",
            }
        ],
        bagidunia: [
            {
                id: 1,
                image: [
                    "/portfolios/bagidunia/1-1.jpg",
                    "/portfolios/bagidunia/1-2.jpg",
                ],
                content: `
                    Halloooww teman-teman bagi duniaa 👋!! <br>
                    Bagi dunia udah buka pendaftaran relawan loooh untuk event “berbagi kebahagiaan dan kesehatan bersama oma-opa” <br><br>
                    Andd slotnya terbatas jadi yukkk daftarr !! <br>
                `,
                link: "https://www.instagram.com/p/C7wSOcUSjod/?img_index=1",
            },
            {
                id: 2,
                image: [
                    "/portfolios/bagidunia/2-1.jpg",
                    "/portfolios/bagidunia/2-2.jpg",
                ],
                content: `
                    Halloooww teman-teman bagi duniaa !! <br> <br>
                    Bagi dunia akan buka galang dana ! <br>
                    Pembukaan galang dana akan kami info secepstnya melewati instagram dan bio kamiii. <br>
                    Buat kamu yang ga bisa ikutan jadi volunteer, kamu bisa menyalurkan kebaikan mu lewat galang dana ini. <br>
                    Pastinya dana dari kalian akan sangat membantu untuk acara kami dan oma opa 🤍 <br>
                `,
                link: "https://www.instagram.com/p/C7wTtMDyfuz/?img_index=1",
            },
            {
                id: 3,
                image: [
                    "/portfolios/bagidunia/3-1.jpg",
                    "/portfolios/bagidunia/3-2.jpg",
                    "/portfolios/bagidunia/3-3.jpg",
                ],
                content: `
                    Helloww everyone 👋 <br>
                    Kami, Tim Inti Bagi Dunia, sedang mencari para individu luar biasa yang siap untuk bergabung dan menjadi agen perubahan bagi dunia. <br>
                    Untuk mengikuti perjalanan kami kalian hanya cukup registrasi melewati bio kami ataupun scan QR yang tersedia di feeds, dan untuk cari tahu lebih dalam mengenai bagi dunia dapat mengunjungi website kami di bio 😁🤍 <br> <br>
                    Ayo bergabung dengan kami, menjadi bagian dari perubahan yang lebih besar! 🌍
                `,
                link: "https://www.instagram.com/p/DDV7JT-zgAc/?img_index=1",
            },
            {
                id: 4,
                image: [
                    "/portfolios/bagidunia/4-1.jpg",
                    "/portfolios/bagidunia/4-2.jpg",
                ],
                content: `
                    Halooo teman berbagi 🌏👋 <br> <br>
                    Di acara kali ini kita bakal seru-seruan bareng bersama adek-adek dari kampung pemulung lagi lho ! <br>
                    Selain seru-seruan bareng, kita juga bakal berbagi, bermain, dan belajar bersama ! Asyikkk 😆 <br> <br>
                    Ditunggu ya keseruannya 🤍🤍
                `,
                link: "https://www.instagram.com/p/DAVJJnQSy3q/?img_index=1",
            },
            {
                id: 5,
                image: "/portfolios/bagidunia/5.jpg",
                content: `
                    Terima kasih kepada @geraisaloncantik_official atas donasi yang luar biasa! <br> 
                    Dukungan Anda membuat acara ‘Berbagi Kebahagiaan dan Kesehatan kepada Oma Opa’ semakin meriah! 😁
                `,
                link: "https://www.instagram.com/p/C99dC7zS0QV/",
            },
            {
                id: 6,
                image: [
                    "/portfolios/bagidunia/6-1.jpg",
                    "/portfolios/bagidunia/6-2.jpg",
                    "/portfolios/bagidunia/6-3.jpg",
                ],
                content: `
                    Bagi dunia 🌏 <br>
                    berbagi knowledge ! <br> <br>
                    HALOooo teman berbagiii 🔥👋😆We’re back !!! Kali ini Kita kembali dengan fun fact yang sangat Amat menarik nih ! 😱 <br>
                    Kira-Kira teman berbagi tau gak 🤔 tentang fakta tentang tumbuhan yang satu ini 🌳
                `,
                link: "https://www.instagram.com/p/DAVJWhfSr0u/?img_index=1",
            },
            {
                id: 7,
                image: [
                    "/portfolios/bagidunia/7-1.jpg",
                    "/portfolios/bagidunia/7-2.jpg",
                    "/portfolios/bagidunia/7-3.jpg",
                ],
                content: `
                    Pagi-pagi minum kopi, <br>
                    Berjalan santai ditepi kali. <br>
                    Selamat datang member baru yang penuh energi, <br>
                    Bersama Bagi Dunia, kita wujudkan mimpi!🤩🫶🏻🌍 <br> <br>
                    Perkenalkaaann ini adalah wajah-wajah baru dari member baru Bagi Dunia di 2025!🤩😍 <br>
                    Selamat kepada seluruh tim Bagi Dunia 2025 yang siap untuk membawa semangat baru, ide baru, dan tentunya suasana yang asyik dan seru pada tim Bagi Dunia!!🤍🌍
                `,
                link: "https://www.instagram.com/p/DFZabP4pOp_/?img_index=1",
            },
            {
                id: 8,
                image: "/portfolios/bagidunia/8.jpg",
                link: "https://www.instagram.com/stories/highlights/18069472879762214/",
            },
            {
                id: 9,
                tiktok: [
                    "https://www.tiktok.com/@bagidunia/video/7527979987174001976",
                    "https://www.tiktok.com/@bagidunia/video/7525655792272297272",
                    "https://www.tiktok.com/@bagidunia/photo/7520956385094372613",
                    "https://www.tiktok.com/@bagidunia/video/7517890913293569336",
                    "https://www.tiktok.com/@bagidunia/video/7510535905048808710",
                    "https://www.tiktok.com/@bagidunia/video/7505292303183940869",
                    "https://www.tiktok.com/@bagidunia/video/7485735814551309623",
                    "https://www.tiktok.com/@bagidunia/video/7483788246594374917",
                    "https://www.tiktok.com/@bagidunia/video/7480853539280014597",
                    "https://www.tiktok.com/@bagidunia/video/7477899669385809157",
                    "https://www.tiktok.com/@bagidunia/video/7477168303836892422",
                    "https://www.tiktok.com/@bagidunia/video/7476345945546837303",
                    "https://www.tiktok.com/@bagidunia/video/7473054767372291334",
                    "https://www.tiktok.com/@bagidunia/photo/7469747131662765317",
                    "https://www.tiktok.com/@bagidunia/video/7469716955658898694",
                    "https://www.tiktok.com/@bagidunia/video/7467097138707598598",
                ]
            }
        ]
    };

    const currentPosts = posts[platform] || [];

    return (
        <div className="p-4 h-full overflow-y-auto">
            <div className="flex items-center gap-3 mb-6">
                <h1 className="text-xl font-bold">{platform.charAt(0).toUpperCase() + platform.slice(1)}</h1>
            </div>

            <div className="space-y-6">
                {currentPosts.map(post => (
                    <div key={post.id} className="border rounded-lg p-4 bg-white shadow-lg">
                        {post.image && (
                            Array.isArray(post.image) ? (
                                post.image.map((imgSrc, index) => (
                                    <img
                                        key={index}
                                        src={imgSrc}
                                        alt={`Post ${post.id} Image ${index + 1}`}
                                        className="w-full mb-4 object-cover rounded-lg"
                                    />
                                )) 
                            ) : (
                                <img
                                    src={post.image}
                                    alt={`Post ${post.id} Image`}
                                    className="w-full mb-4 object-cover rounded-lg"
                                />
                            )
                        )}
                        {post.video && (
                            <video
                                src={post.video}
                                controls
                                className="w-full mb-4 rounded-lg"
                            />
                        )}
                        {post.tiktok && (
                            post.tiktok.map((tiktokUrl, index) => (
                                <div key={index} className="mb-4">
                                    <button
                                        onClick={() => window.open(tiktokUrl, '_blank')}
                                        className="text-blue-500 underline"
                                    >Lihat Video TikTok {index + 1}</button>
                                </div>
                            ))
                        )}
                        {post.content && (
                            <p className="mb-4 whitespace-pre-line">{post.content}</p>
                        )}
                        {post.link && (
                            <button
                                onClick={() => window.open(post.link, '_blank')}
                                className="text-blue-500 underline"
                            >
                                Lihat Postingan Asli
                            </button>
                        )}
                    </div>
                ))}                         
            </div>
        </div>
    )
}

export const AboutMeWindow = ({ onAddNote }) => {  
    return (
        <div className="p-4 h-full overflow-y-auto">
            <div className="flex items-start gap-3 mb-6">
                <img
                    src="/avatar-2.jpg"
                    alt="Profile Avatar"
                    className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                    <h1 className="text-xl font-bold">Saski Riqkin</h1>
                    <p className="text-gray-600">Digital Artist & Designer</p>
                </div>
            </div>
            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">About Me</h2>
                <h3 className="text-md font-medium mb-2">HoOLa~</h3>
                <div className="text-sm text-gray-700">
                    Hi! I'm <p className="text-semibold">Saski Riqkin</p>, a graphic design student who tends to overthink details but somehow makes them look <p className='font-semibold'>effortlessly good</p>.
                    I see design as more than visual; it's strategy, rhythm, and a bit of attitude.
                    My works blend precision with personality, because <p className='font-semibold'>good design speaks, but great design flirts</p>.
                    I don't just want things to look nice, I want them to be <p className='font-semibold'>unforgettable</p>.
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
                <div>
                    <h3 className="text-lg font-semibold mb-2">Skills</h3>
                    <ul className="space-y-2 text-sm list-disc list-inside text-gray-700">
                        <li>🎨 Digital Illustration</li>
                        <li>🎬 Motion Graphics</li>
                        <li>📊 Brand Identity</li>
                    </ul>
                </div>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-2">Tools</h3>
                <ul className="space-y-2 text-sm list-disc list-inside text-gray-700">
                    <li>Adobe Photoshop</li>
                    <li>Adobe Illustrator</li>
                    <li>Adobe After Effects</li>
                </ul>
            </div>
            <button
                onClick={() => onAddNote("Genius - Creative - Humble")}
                className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Who is Saki, and what can she do?
            </button>
        </div>
    );
};

export const ResumeWindow = ({ onAddNote }) => {  
    return (
        <div className="p-4 h-full overflow-y-auto">
            <div className="flex items-start gap-3 mb-6">
                <img
                    src="/avatar-3.jpg"
                    alt="Profile Avatar"
                    className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                    <h1 className="text-xl font-bold">Saski Riqkin</h1>
                    <p className="text-gray-600">Digital Artist & Designer</p>
                </div>
            </div>
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Secretary and Editor</h3>
                <h4 className="text-md font-medium mb-1">SMA Tunas Bangsa Student Council</h4>
                <p className="text-sm text-gray-700">2022 - 2023</p>
            </div>
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Social Media Manager</h3>
                <h4 className="text-md font-medium mb-1">@tunasbangsa.school</h4>
                <p className="text-sm text-gray-700">Managed, edited and gave idea for Instagram reels and posts.</p>
            </div>
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Documentation and Editor</h3>
                <h4 className="text-md font-medium mb-1">@aksasara</h4>
            </div>
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Core Team</h3>
                <h4 className="text-md font-medium mb-1">@bagidunia</h4>
                <p className="text-sm text-gray-700">2024 - 2025</p>
                <p className="text-sm text-gray-700">
                    Handled Instagram & Tiktok contents about social issues and charity events.
                    <ul>
                        <li> Staff of Publication & Social Media 
                            <li>vol 1 - vol 3</li>
                        </li>
                        <li> Coordinator of Publication & Social Media Division  
                            <li>vol 4 - vol 8</li>
                        </li>
                    </ul>
                </p>
            </div>
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Vice Coordinator of Hospitality Division</h3>
                <h4 className="text-md font-medium mb-1">Plaze Desain</h4>
                <p className="text-sm text-gray-700">2024</p>
            </div>
            <button
                onClick={() => onAddNote("kuliah rapat, kuliah rapat, experience")}
                className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                what is this?
            </button>
        </div>
    );
};

export const ContactWindow = () => {  
    return (
        <div className="p-4 h-full overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">Get In Touch</h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                    <h3 className="text-md font-semibold mb-2">Contact Information</h3>
                    <div classname="space-y-3">
                        <div classname="flex items-center gap-2">
                            <span className="text-2xl">📧</span>
                            <span>saskiriez@gmail.com</span>
                        </div>
                        <div classname="flex items-center gap-2">
                            <span className="text-2xl">📱📧</span>
                            <span>+62 (0813) 4706-9081 </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}