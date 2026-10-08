// CONFIG: Ganti URL di bawah ini dengan URL Web App dari Google Apps Script Anda
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxYOUR_SCRIPT_ID_HERE/exec";

// -------------------------------------------------------------
// 2. DATA KARTU KUARTET (Lengkap 48 Kartu A1 - L4 dari Gambar)
// -------------------------------------------------------------
const kuartetData = [
    // Tema A
    { id: 1, kode: "A1", tema: "Jenis Tokoh dalam Drama", judul: "Protagonis", materi: "Pusat perjuangan/tujuan utama dalam konflik. Tidak selalu tokoh paling baik.", contoh_catatan: "Bima mengungkapkan kecurangan sekolah.", jalur_gambar: "A1.png" },
    { id: 2, kode: "A2", tema: "Jenis Tokoh dalam Drama", judul: "Antagonis", materi: "Tokoh/kekuatan yang beroposisi dengan protagonis. Tidak selalu tokoh jahat.", contoh_catatan: "Bima menghalangi tujuan Raka.", jalur_gambar: "A2.png" },
    { id: 3, kode: "A3", tema: "Jenis Tokoh dalam Drama", judul: "Tritagonis", materi: "Tokoh penengah atau pendukung konflik. Membantu mengembangkan konflik.", contoh_catatan: "Sinta mempertemukan Raka dan Bima.", jalur_gambar: "A3.png" },
    { id: 4, kode: "A4", tema: "Jenis Tokoh dalam Drama", judul: "Deuteragonis", materi: "Tokoh penting kedua, misalnya sahabat dekat protagonis.", contoh_catatan: "Dika sebagai sahabat Raka.", jalur_gambar: "A4.png" },

    // Tema B
    { id: 5, kode: "B1", tema: "Bentuk & Struktur Drama", judul: "Drama Naskah", materi: "Drama dalam bentuk teks tertulis. Berisi dialog, nama tokoh, babak, adegan, petunjuk laku, dan latar.", contoh_catatan: "Naskah drama 'Laskar Pelangi'.", jalur_gambar: "B1.png" },
    { id: 6, kode: "B2", tema: "Bentuk & Struktur Drama", judul: "Drama Pentas", materi: "Drama yang diwujudkan menjadi pertunjukan. Naskah ditafsirkan, diperankan, dipentaskan, dan disaksikan.", contoh_catatan: "Pementasan drama di sekolah.", jalur_gambar: "B2.png" },
    { id: 7, kode: "B3", tema: "Bentuk & Struktur Drama", judul: "Babak & Adegan", materi: "Babak = bagian besar struktur naskah. Adegan = bagian dalam babak yang menunjukkan situasi tertentu.", contoh_catatan: "Babak I, Adegan 1 di ruang kelas.", jalur_gambar: "B3.png" },
    { id: 8, kode: "B4", tema: "Bentuk & Struktur Drama", judul: "Kramagung", materi: "Petunjuk laku yang menjelaskan tindakan/gerakan dan ditulis di bar dialog, biasanya dalam tanda kurung.", contoh_catatan: "(Raka menunduk, lalu berjalan).", jalur_gambar: "B4.png" },

    // Tema C
    { id: 9, kode: "C1", tema: "Dialog & Konflik", judul: "Dialog", materi: "Percakapan antara dua tokoh atau lebih untuk menyampaikan informasi, membangun karakter, dan konflik.", contoh_catatan: "\"Aku harus jujur, Raka!\"", jalur_gambar: "C1.png" },
    { id: 10, kode: "C2", tema: "Dialog & Konflik", judul: "Monolog & Solilokui", materi: "Monolog = tuturan panjang tokoh. Solilokui = ungkapan pikiran/perasaan batin saat tokoh sendirian.", contoh_catatan: "\"Aku harus jujur, tetapi...\"", jalur_gambar: "C2.png" },
    { id: 11, kode: "C3", tema: "Dialog & Konflik", judul: "Konflik Internal", materi: "Pertentangan di dalam diri tokoh. Muncul dari nilai, emosi, atau keinginan yang bertentangan.", contoh_catatan: "Raka ingin jujur tetapi takut kehilangan sahabat.", jalur_gambar: "C3.png" },
    { id: 12, kode: "C4", tema: "Dialog & Konflik", judul: "Konflik Eksternal", materi: "Konflik tokoh dengan sesuatu di luar dirinya, seperti antartokoh, kelompok, masyarakat, atau keadaan.", contoh_catatan: "Raka melawan ketidakadilan di sekolah.", jalur_gambar: "C4.png" },

    // Tema D
    { id: 13, kode: "D1", tema: "Alur & Unsur Pembangun", judul: "Tema", materi: "Gagasan pokok atau persoalan utama cerita. Menjadi dasar seluruh cerita.", contoh_catatan: "Persahabatan, keluarga, keadilan.", jalur_gambar: "D1.png" },
    { id: 14, kode: "D2", tema: "Alur & Unsur Pembangun", judul: "Alur (Plot)", materi: "Rangkaian peristiwa pembentuk cerita. Urutan peristiwa yang logis (Eksposisi -> Konflik -> Klimaks -> Resolusi).", contoh_catatan: "Urutan logis peristiwa drama.", jalur_gambar: "D2.png" },
    { id: 15, kode: "D3", tema: "Alur & Unsur Pembangun", judul: "Klimaks & Resolusi", materi: "Klimaks = puncak konflik/ketegangan. Resolusi = penyelesaian konflik.", contoh_catatan: "Pertarungan puncak lalu pemecahan masalah.", jalur_gambar: "D3.png" },
    { id: 16, kode: "D4", tema: "Alur & Unsur Pembangun", judul: "Amanat & Realitas", materi: "Amanat = pesan moral drama. Realitas sosial = refleksi kehidupan nyata.", contoh_catatan: "Berani jujur, lawan perundungan.", jalur_gambar: "D4.png" },

    // Tema E
    { id: 17, kode: "E1", tema: "Istilah Teknis Akting & Vokal", judul: "Akting & Blocking", materi: "Akting = seni memerankan tokoh. Blocking = pengaturan posisi/perpindahan aktor di panggung.", contoh_catatan: "Posisi aktor saat adegan naik kelas.", jalur_gambar: "E1.png" },
    { id: 18, kode: "E2", tema: "Istilah Teknis Akting & Vokal", judul: "Gestur & Mimik", materi: "Gestur = gerakan tubuh bermakna. Mimik = ekspresi wajah yang menunjukkan emosi.", contoh_catatan: "Tangan menunjuk; wajah marak.", jalur_gambar: "E2.png" },
    { id: 19, kode: "E3", tema: "Istilah Teknis Akting & Vokal", judul: "Artikulasi & Intonasi", materi: "Artikulasi = kejelasan pengucapan. Intonasi = tinggi-rendah nada suara untuk membentuk makna.", contoh_catatan: "Ucapan jelas; nada tegas.", jalur_gambar: "E3.png" },
    { id: 20, kode: "E4", tema: "Istilah Teknis Akting & Vokal", judul: "Volume & Tempo", materi: "Volume = keras/lembut suara. Tempo = cepat/lambat pengucapan atau ritme.", contoh_catatan: "Suara jelas; tempo sesuai emosi.", jalur_gambar: "E4.png" },

    // Tema F
    { id: 21, kode: "F1", tema: "Tata Artistik & Tim Pementasan", judul: "Sutradara & Aktor", materi: "Sutradara = pengarah kreatif dan teknis. Aktor = pemeran yang menghidupkan karakter.", contoh_catatan: "Sutradara memberi arahan; aktor beralih peran.", jalur_gambar: "F1.png" },
    { id: 22, kode: "F2", tema: "Tata Artistik & Tim Pementasan", judul: "Set & Tata Panggung", materi: "Tata panggung = pengaturan ruang pertunjukan. Set = penataan lingkungan latar.", contoh_catatan: "Set ruang kelas di panggung.", jalur_gambar: "F2.png" },
    { id: 23, kode: "F3", tema: "Tata Artistik & Tim Pementasan", judul: "Properti & Kostum", materi: "Properti = benda pendukung aksi. Tata kostum = pengaturan pakaian sesuai karakter dan zaman.", contoh_catatan: "Buku, topi, seragam era 1900-an.", jalur_gambar: "F3.png" },
    { id: 24, kode: "F4", tema: "Tata Artistik & Tim Pementasan", judul: "Tata Rias, Cahaya & Suara", materi: "Rias = pembentuk karakter. Cahaya & suara = pengatur lampu dan efek bunyi.", contoh_catatan: "Riasan tokoh tua; lampu dramatis.", jalur_gambar: "F4.png" },

    // Tema G
    { id: 25, kode: "G1", tema: "Struktur Lanjut Naskah Drama", judul: "Prolog", materi: "Pembuka drama yang memperkenalkan situasi, tokoh, latar, atau masalah awal.", contoh_catatan: "Pengenalan situasi awal.", jalur_gambar: "G1.png" },
    { id: 26, kode: "G2", tema: "Struktur Lanjut Naskah Drama", judul: "Epilog", materi: "Penutup setelah cerita utama, berisi kesimpulan, refleksi, atau keadaan akhir tokoh.", contoh_catatan: "Keadaan akhir para tokoh.", jalur_gambar: "G2.png" },
    { id: 27, kode: "G3", tema: "Struktur Lanjut Naskah Drama", judul: "Anotasi Naskah", materi: "Petunjuk teknis pementasan tentang gerak, suasana, intonasi, musik, cahaya, latar.", contoh_catatan: "Catatan khusus sutradara.", jalur_gambar: "G3.png" },
    { id: 28, kode: "G4", tema: "Struktur Lanjut Naskah Drama", judul: "Struktur Fisik & Batin", materi: "Struktur fisik berkaitan dengan dialog. Struktur batin berkaitan dengan gagasan, makna, tema.", contoh_catatan: "Makna tersirat dalam dialog.", jalur_gambar: "G4.png" },

    // Tema H
    { id: 29, kode: "H1", tema: "Tokoh & Karakterisasi Lanjut", judul: "Karakterisasi", materi: "Cara membangun watak tokoh melalui dialog, tindakan, pikiran, reaksi tokoh lain.", contoh_catatan: "Pembentukan watak tokoh.", jalur_gambar: "H1.png" },
    { id: 30, kode: "H2", tema: "Tokoh & Karakterisasi Lanjut", judul: "Tokoh Dinamis & Statis", materi: "Dinamis mengalami perubahan watak; statis relatif tidak berubah sepanjang pementasan.", contoh_catatan: "Perkembangan karakter.", jalur_gambar: "H2.png" },
    { id: 31, kode: "H3", tema: "Tokoh & Karakterisasi Lanjut", judul: "Tokoh Bulat & Datar", materi: "Bulat memiliki karakter kompleks; datar memiliki karakter lebih sederhana/dominan satu sifat.", contoh_catatan: "Sifat kompleks vs sederhana.", jalur_gambar: "H3.png" },
    { id: 32, kode: "H4", tema: "Tokoh & Karakterisasi Lanjut", judul: "Motivasi Tokoh", materi: "Alasan atau dorongan yang membuat tokoh bertindak dan menggerakkan konflik.", contoh_catatan: "Pendorong aksi tokoh.", jalur_gambar: "H4.png" },

    // Tema I
    { id: 33, kode: "I1", tema: "Latar & Dunia Drama", judul: "Latar Tempat", materi: "Lokasi terjadinya peristiwa dalam cerita drama.", contoh_catatan: "Ruang kelas, panggung, taman.", jalur_gambar: "I1.png" },
    { id: 34, kode: "I2", tema: "Latar & Dunia Drama", judul: "Latar Waktu", materi: "Waktu terjadinya peristiwa dalam pementasan drama.", contoh_catatan: "Pagi hari, tahun 1945.", jalur_gambar: "I2.png" },
    { id: 35, kode: "I3", tema: "Latar & Dunia Drama", judul: "Latar Suasana", materi: "Keadaan emosional, misalnya tegang, sedih, bahagia, atau mencekam.", contoh_catatan: "Suasana mencekam saat konflik.", jalur_gambar: "I3.png" },
    { id: 36, kode: "I4", tema: "Latar & Dunia Drama", judul: "Latar Sosial", materi: "Kondisi masyarakat, pekerjaan, kelas sosial, kebiasaan, nilai, norma.", contoh_catatan: "Kehidupan masyarakat perkotaan.", jalur_gambar: "I4.png" },

    // Tema J
    { id: 37, kode: "J1", tema: "Bahasa & Teknik Penulisan Drama", judul: "Dialog Efektif", materi: "Dialog sesuai karakter, situasi, konflik, dan tujuan cerita serta menggerakkan alur.", contoh_catatan: "Penghematan kata berbobot.", jalur_gambar: "J1.png" },
    { id: 38, kode: "J2", tema: "Bahasa & Teknik Penulisan Drama", judul: "Subteks", materi: "Makna tersirat di balik ucapan atau dialog yang disampaikan tokoh.", contoh_catatan: "Pesan tersembunyi di balik kata.", jalur_gambar: "J2.png" },
    { id: 39, kode: "J3", tema: "Bahasa & Teknik Penulisan Drama", judul: "Diksi & Gaya Bahasa", materi: "Pemilihan kata dan gaya bahasa yang sesuai karakter, suasana, latar, dan tujuan dramatis.", contoh_catatan: "Penggunaan majas dan bahasa puitis.", jalur_gambar: "J3.png" },
    { id: 40, kode: "J4", tema: "Bahasa & Teknik Penulisan Drama", judul: "Repetisi & Jeda Dramatis", materi: "Pengulangan menegaskan gagasan/emosi; jeda menciptakan ketegangan atau penekanan.", contoh_catatan: "Pengulangan kata untuk efek emosi.", jalur_gambar: "J4.png" },

    // Tema K
    { id: 41, kode: "K1", tema: "Dramaturgi & Pengembangan Cerita", judul: "Motivasi & Tujuan Tokoh", materi: "Tujuan dan dorongan tokoh menjadi dasar tindakan dan sumber konflik.", contoh_catatan: "Pemicu aksi utama tokoh.", jalur_gambar: "K1.png" },
    { id: 42, kode: "K2", tema: "Dramaturgi & Pengembangan Cerita", judul: "Sebab-Akibat dalam Alur", materi: "Peristiwa saling berkaitan: tindakan tokoh menimbulkan akibat yang memengaruhi peristiwa berikutnya.", contoh_catatan: "Rantai kausalitas peristiwa.", jalur_gambar: "K2.png" },
    { id: 43, kode: "K3", tema: "Dramaturgi & Pengembangan Cerita", judul: "Tegangan Dramatis", materi: "Ketegangan karena penonton menunggu hasil konflik atau belum mengetahui akhir masalah.", contoh_catatan: "Puncak rasa penasaran penonton.", jalur_gambar: "K3.png" },
    { id: 44, kode: "K4", tema: "Dramaturgi & Pengembangan Cerita", judul: "Ironi Dramatis", materi: "Penonton mengetahui informasi yang tidak diketahui tokoh sehingga menciptakan ketegangan.", contoh_catatan: "Penonton tahu rahasia cerita.", jalur_gambar: "K4.png" },

    // Tema L
    { id: 45, kode: "L1", tema: "Proses Penulisan & Pementasan Naskah", judul: "Ide menjadi Naskah", materi: "Ide dari pengalaman, pengamatan, masalah sosial, atau imajinasi dikembangkan menjadi tokoh, konflik, alur.", contoh_catatan: "Inspirasi menjadi bentuk naskah.", jalur_gambar: "L1.png" },
    { id: 46, kode: "L2", tema: "Proses Penulisan & Pementasan Naskah", judul: "Menulis & Merevisi Naskah", materi: "Memeriksa dan memperbaiki struktur, tokoh, dialog, konflik, bahasa, dan petunjuk pementasan.", contoh_catatan: "Penyempurnaan draf naskah.", jalur_gambar: "L2.png" },
    { id: 47, kode: "L3", tema: "Proses Penulisan & Pementasan Naskah", judul: "Interpretasi Naskah", materi: "Sutradara dan tim menerjemahkan naskah menjadi konsep pementasan (akting, blocking, cahaya, kostum).", contoh_catatan: "Penerjemahan teks ke panggung.", jalur_gambar: "L3.png" },
    { id: 48, kode: "L4", tema: "Proses Penulisan & Pementasan Naskah", judul: "Naskah menjadi Pementasan", materi: "Naskah menjadi dasar pertunjukan yang diwujudkan melalui kerja sama aktor, sutradara, dan tim artistik.", contoh_catatan: "Hasil akhir eksekusi pementasan.", jalur_gambar: "L4.png" }
];

// -------------------------------------------------------------
// STATE APLIKASI
// -------------------------------------------------------------
let player = { name: "", class: "" };
let score = 0;
let combo = 1;
let lives = 3;
let timerSeconds = 300; // 5 Menit
let timerInterval = null;
let selectedTheme = "";
let unlockedCards = []; // List ID kartu yang telah dicocokkan
let completedThemes = [];

// -------------------------------------------------------------
// INITIALIZATION
// -------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("player-form").addEventListener("submit", startGame);
    document.getElementById("btn-restart").addEventListener("click", resetGame);
    document.querySelector(".close-modal").addEventListener("click", closeModal);
});

function startGame(e) {
    e.preventDefault();
    player.name = document.getElementById("player-name").value.trim();
    player.class = document.getElementById("player-class").value.trim();

    if (!player.name || !player.class) return;

    document.getElementById("start-screen").classList.remove("active");
    document.getElementById("game-screen").classList.add("active");
    document.getElementById("hud").style.display = "flex";

    document.getElementById("player-display").innerText = player.name;
    
    initCategories();
    startTimer();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timerSeconds--;
        let mins = Math.floor(timerSeconds / 60).toString().padStart(2, '0');
        let secs = (timerSeconds % 60).toString().padStart(2, '0');
        document.getElementById("timer-display").innerText = `${mins}:${secs}`;

        if (timerSeconds <= 0) {
            endGame(false, "Waktu Habis!");
        }
    }, 1000);
}

// -------------------------------------------------------------
// GAMEPLAY LOGIC
// -------------------------------------------------------------
function initCategories() {
    const catList = document.getElementById("category-list");
    catList.innerHTML = "";
    
    // Ambil daftar tema unik
    const themes = [...new Set(kuartetData.map(item => item.tema))];

    themes.forEach((tema, idx) => {
        const btn = document.createElement("button");
        btn.className = "cat-btn";
        btn.innerHTML = `<span>${String.fromCharCode(65 + idx)}. ${tema}</span> <span class="badge">0/4</span>`;
        btn.onclick = () => selectCategory(tema, btn);
        catList.appendChild(btn);
    });

    // Select tema pertama
    selectCategory(themes[0], catList.children[0]);
}

function selectCategory(tema, btnElement) {
    selectedTheme = tema;
    document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
    if(btnElement) btnElement.classList.add("active");

    document.getElementById("current-theme-title").innerText = `Tema: ${tema}`;
    renderBoard();
}

function renderBoard() {
    const board = document.getElementById("card-board");
    board.innerHTML = "";

    const cardsInTheme = kuartetData.filter(c => c.tema === selectedTheme);

    cardsInTheme.forEach(card => {
        const isUnlocked = unlockedCards.includes(card.id);
        const cardEl = document.createElement("div");
        cardEl.className = `kuartet-card ${isUnlocked ? 'unlocked' : ''}`;
        
        cardEl.innerHTML = `
            <div class="card-status">${isUnlocked ? '✅' : '🔒'}</div>
            <div class="card-header">${card.tema}</div>
            <div class="card-code">${card.kode}</div>
            <div class="card-title">${card.judul}</div>
            <div class="card-materi">${isUnlocked ? card.materi : 'Klik untuk membongkar materi ini melalui kuis!'}</div>
        `;

        cardEl.onclick = () => handleCardClick(card, isUnlocked);
        board.appendChild(cardEl);
    });
}

function handleCardClick(card, isUnlocked) {
    if (isUnlocked) return; // Kartu sudah terbuka

    // Trigger Kuis Pencocokan/Materi
    showQuizModal(card);
}

function showQuizModal(card) {
    const modal = document.getElementById("quiz-modal");
    const title = document.getElementById("quiz-title");
    const qText = document.getElementById("quiz-question");
    const optionsGrid = document.getElementById("quiz-options");

    title.innerText = `Kuis Kartu [${card.kode}] - ${card.judul}`;
    qText.innerText = `Manakah deskripsi/materi yang tepat untuk "${card.judul}"?`;
    
    optionsGrid.innerHTML = "";

    // Pilihan Jawaban (1 Benar, 2 Acak dari kartu lain)
    let wrongOptions = kuartetData.filter(c => c.id !== card.id).sort(() => 0.5 - Math.random()).slice(0, 2);
    let choices = [card, ...wrongOptions].sort(() => 0.5 - Math.random());

    choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.className = "opt-btn";
        btn.innerText = choice.materi;
        btn.onclick = () => checkAnswer(choice.id === card.id, card);
        optionsGrid.appendChild(btn);
    });

    modal.style.display = "flex";
}

function checkAnswer(isCorrect, card) {
    closeModal();

    if (isCorrect) {
        // Tambah Poin & Combo
        score += 20 * combo;
        combo++;
        unlockedCards.push(card.id);
        
        checkSetCompletion(card.tema);
    } else {
        // Penalti Salah
        score = Math.max(0, score - 10);
        combo = 1;
        lives--;
        
        updateLivesDisplay();
        
        if (lives <= 0) {
            endGame(false, "Nyawa Anda Habis!");
            return;
        }
    }

    updateHUD();
    renderBoard();
}

function checkSetCompletion(tema) {
    const themeCards = kuartetData.filter(c => c.tema === tema);
    const allUnlocked = themeCards.every(c => unlockedCards.includes(c.id));

    if (allUnlocked && !completedThemes.includes(tema)) {
        completedThemes.push(tema);
        score += 100; // Bonus Set Kuartet
        alert(`🎉 Selamat! Anda berhasil melengkapi 1 Set Kuartet Tema: "${tema}" (+100 Poin)`);
        
        updateCategoryBadges();
        
        if (completedThemes.length === 12) {
            endGame(true, "Selamat! Anda menyelesaikan seluruh Set Kuartet!");
        }
    }
}

function updateCategoryBadges() {
    const buttons = document.querySelectorAll(".cat-btn");
    buttons.forEach(btn => {
        const text = btn.innerText;
        const theme = text.substring(text.indexOf(". ") + 2, text.lastIndexOf(" 0/4")).trim();
        const count = kuartetData.filter(c => c.tema === selectedTheme && unlockedCards.includes(c.id)).length;
        
        if (completedThemes.includes(theme)) {
            btn.classList.add("completed");
        }
    });
}

function updateHUD() {
    document.getElementById("score-display").innerText = score;
    document.getElementById("combo-display").innerText = combo;
    document.getElementById("sets-display").innerText = completedThemes.length;
}

function updateLivesDisplay() {
    let hearts = "";
    for (let i = 0; i < lives; i++) hearts += "❤️";
    document.getElementById("lives-display").innerText = hearts || "❌";
}

function closeModal() {
    document.getElementById("quiz-modal").style.display = "none";
}

// -------------------------------------------------------------
// GAME OVER & INTEGRASI GOOGLE SHEETS
// -------------------------------------------------------------
function endGame(isWin, reason) {
    clearInterval(timerInterval);

    // Speed Bonus
    if (isWin) {
        score += Math.floor(timerSeconds * 2);
    }

    document.getElementById("game-screen").classList.remove("active");
    document.getElementById("result-screen").classList.add("active");

    document.getElementById("result-title").innerText = isWin ? "🏆 Kemenangan Luar Biasa!" : `💥 Game Over: ${reason}`;
    document.getElementById("res-name").innerText = player.name;
    document.getElementById("res-class").innerText = player.class;
    document.getElementById("res-score").innerText = score;
    
    let mins = Math.floor(timerSeconds / 60).toString().padStart(2, '0');
    let secs = (timerSeconds % 60).toString().padStart(2, '0');
    document.getElementById("res-time").innerText = `${mins}:${secs}`;
    document.getElementById("res-sets").innerText = `${completedThemes.length} / 12`;

    // Kirim Data ke Spreadsheet
    saveScoreToGoogleSheet({
        nama: player.name,
        kelas: player.class,
        skor: score,
        waktu: `${mins}:${secs}`,
        setTerkumpul: completedThemes.length
    });
}

async function saveScoreToGoogleSheet(playerData) {
    const statusEl = document.getElementById("upload-status");
    statusEl.innerText = "⏳ Menyimpan skor ke Google Sheets...";

    try {
        await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(playerData)
        });
        statusEl.innerText = "✅ Skor berhasil disimpan ke Google Sheets!";
    } catch (err) {
        console.error(err);
        statusEl.innerText = "⚠️ Gagal menyimpan skor secara otomatis.";
    }
}

function resetGame() {
    location.reload();
}
