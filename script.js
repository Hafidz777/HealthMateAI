// ======================================================
// HEALTHMATEAI
// SCRIPT UTAMA - VERSI UPGRADE
// Database 30 penyakit/kondisi
// ======================================================


// =========================
// MULAI
// =========================

function mulai() {
    window.location.href = "data.html";
}


// =========================
// INPUT DATA
// =========================

function simpanData() {

    const namaInput = document.getElementById("nama");
    const umurInput = document.getElementById("umur");
    const jenisKelaminInput = document.getElementById("jenisKelamin");

    const nama = namaInput ? namaInput.value.trim() : "";
    const umur = umurInput ? umurInput.value : "";
    const jenisKelamin = jenisKelaminInput
        ? jenisKelaminInput.value
        : "";

    if (!nama || !umur || !jenisKelamin) {
        alert("Silakan lengkapi semua data terlebih dahulu.");
        return;
    }

    localStorage.setItem("nama", nama);
    localStorage.setItem("umur", umur);
    localStorage.setItem("jenisKelamin", jenisKelamin);

    window.location.href = "gejala.html";
}


// ======================================================
// DATABASE 30 PENYAKIT / KONDISI
// ======================================================

const databasePenyakit = [

    {
        nama: "Flu (Influenza)",
        gejala: [
            "demam",
            "batuk",
            "pilek",
            "sakit tenggorokan",
            "nyeri otot",
            "lemas",
            "menggigil"
        ],
        saran: "Istirahat cukup, minum cairan yang cukup, dan pantau perkembangan gejala.",
        bahaya: [
            "sesak napas berat",
            "nyeri dada berat",
            "kesadaran menurun"
        ]
    },

    {
        nama: "Batuk Pilek (Common Cold)",
        gejala: [
            "pilek",
            "bersin",
            "batuk",
            "hidung tersumbat",
            "hidung berair",
            "sakit tenggorokan"
        ],
        saran: "Istirahat, cukup minum, dan jaga kebersihan tangan.",
        bahaya: [
            "sesak napas berat",
            "sulit bernapas"
        ]
    },

    {
        nama: "Demam Berdarah Dengue (DBD)",
        gejala: [
            "demam tinggi",
            "demam",
            "sakit kepala",
            "nyeri belakang mata",
            "nyeri otot",
            "nyeri sendi",
            "mual",
            "muntah",
            "ruam",
            "bintik merah"
        ],
        saran: "Jika demam tinggi disertai gejala lain yang mengarah ke dengue, segera periksa ke tenaga kesehatan.",
        bahaya: [
            "nyeri perut hebat",
            "muntah terus-menerus",
            "perdarahan",
            "muntah darah",
            "darah pada tinja",
            "lemas berat"
        ]
    },

    {
        nama: "Gastritis (Maag)",
        gejala: [
            "nyeri perut bagian atas",
            "sakit perut bagian atas",
            "mual",
            "muntah",
            "perut kembung",
            "perih lambung"
        ],
        saran: "Perhatikan makanan yang memicu keluhan dan usahakan makan secara teratur.",
        bahaya: [
            "muntah darah",
            "bab hitam",
            "nyeri perut hebat"
        ]
    },

    {
        nama: "Diare Akut",
        gejala: [
            "diare",
            "bab cair",
            "mencret",
            "sering bab",
            "nyeri perut",
            "kram perut",
            "mual"
        ],
        saran: "Perbanyak cairan untuk membantu mencegah dehidrasi.",
        bahaya: [
            "tidak mampu minum",
            "darah pada tinja",
            "lemas berat",
            "pingsan"
        ]
    },

    {
        nama: "Migrain",
        gejala: [
            "sakit kepala berdenyut",
            "kepala berdenyut",
            "mual",
            "muntah",
            "sensitif cahaya",
            "sensitif suara"
        ],
        saran: "Beristirahat di tempat yang tenang dan redup.",
        bahaya: [
            "sakit kepala sangat mendadak",
            "kelemahan anggota tubuh",
            "gangguan bicara"
        ]
    },

    {
        nama: "Sakit Kepala Tegang",
        gejala: [
            "sakit kepala",
            "tekanan di kepala",
            "tegang leher",
            "leher tegang",
            "nyeri bahu"
        ],
        saran: "Istirahat cukup dan perhatikan posisi tubuh.",
        bahaya: [
            "sakit kepala sangat mendadak",
            "gangguan penglihatan",
            "kelemahan anggota tubuh"
        ]
    },

    {
        nama: "Alergi",
        gejala: [
            "bersin",
            "hidung berair",
            "hidung gatal",
            "mata gatal",
            "ruam",
            "gatal kulit",
            "biduran"
        ],
        saran: "Hindari pemicu alergi yang diketahui.",
        bahaya: [
            "sesak napas berat",
            "pembengkakan wajah",
            "pembengkakan tenggorokan"
        ]
    },

    {
        nama: "Asma",
        gejala: [
            "sesak napas",
            "mengi",
            "napas berbunyi",
            "batuk",
            "dada terasa sesak",
            "sulit bernapas"
        ],
        saran: "Hindari pemicu yang diketahui dan ikuti rencana penanganan dari tenaga kesehatan jika ada.",
        bahaya: [
            "sulit bernapas berat",
            "bibir kebiruan",
            "sulit berbicara karena sesak"
        ]
    },

    {
        nama: "Bronkitis Akut",
        gejala: [
            "batuk",
            "dahak",
            "nyeri dada saat batuk",
            "lelah",
            "demam ringan"
        ],
        saran: "Istirahat dan cukup minum.",
        bahaya: [
            "sesak napas berat",
            "nyeri dada berat",
            "batuk darah"
        ]
    },

    {
        nama: "Pneumonia",
        gejala: [
            "demam",
            "batuk",
            "dahak",
            "sesak napas",
            "nyeri dada",
            "lemas",
            "napas cepat"
        ],
        saran: "Pneumonia perlu dinilai oleh tenaga kesehatan, terutama jika disertai sesak.",
        bahaya: [
            "sesak napas berat",
            "bibir kebiruan",
            "kesadaran menurun",
            "nyeri dada berat"
        ]
    },

    {
        nama: "Sinusitis",
        gejala: [
            "hidung tersumbat",
            "pilek",
            "nyeri wajah",
            "sakit wajah",
            "sakit kepala",
            "lendir hidung"
        ],
        saran: "Jaga kecukupan cairan dan periksakan diri jika keluhan semakin berat.",
        bahaya: [
            "bengkak di sekitar mata",
            "gangguan penglihatan",
            "sakit kepala berat"
        ]
    },

    {
        nama: "Radang Tenggorokan",
        gejala: [
            "sakit tenggorokan",
            "sulit menelan",
            "demam",
            "tenggorokan merah"
        ],
        saran: "Istirahat dan cukup minum.",
        bahaya: [
            "sulit bernapas",
            "tidak bisa menelan cairan",
            "pembengkakan leher"
        ]
    },

    {
        nama: "Konjungtivitis",
        gejala: [
            "mata merah",
            "mata berair",
            "mata gatal",
            "kotoran mata",
            "belekan"
        ],
        saran: "Jaga kebersihan tangan dan hindari menggosok mata.",
        bahaya: [
            "nyeri mata berat",
            "gangguan penglihatan",
            "sensitif cahaya berat"
        ]
    },

    {
        nama: "Dermatitis / Eksim",
        gejala: [
            "kulit gatal",
            "kulit kering",
            "ruam",
            "kulit kemerahan",
            "eksim",
            "dermatitis"
        ],
        saran: "Hindari pemicu dan jaga kelembapan kulit.",
        bahaya: [
            "luka terinfeksi",
            "demam",
            "pembengkakan berat"
        ]
    },

    {
        nama: "Infeksi Saluran Kemih (ISK)",
        gejala: [
            "nyeri saat buang air kecil",
            "sakit saat buang air kecil",
            "sering buang air kecil",
            "anyang anyangan",
            "nyeri perut bawah",
            "urin keruh"
        ],
        saran: "Konsultasikan keluhan kepada tenaga kesehatan.",
        bahaya: [
            "demam tinggi",
            "nyeri pinggang berat",
            "muntah"
        ]
    },

    {
        nama: "Cacar Air",
        gejala: [
            "demam",
            "ruam",
            "gatal",
            "bintil berisi cairan",
            "lepuhan kulit"
        ],
        saran: "Hindari menggaruk ruam dan batasi kontak dekat dengan orang lain.",
        bahaya: [
            "sesak napas",
            "kesadaran menurun",
            "ruam dekat mata"
        ]
    },

    {
        nama: "Anemia",
        gejala: [
            "mudah lelah",
            "lemas",
            "pusing",
            "kulit pucat",
            "jantung berdebar",
            "cepat lelah"
        ],
        saran: "Keluhan yang mengarah ke anemia perlu dikonfirmasi melalui pemeriksaan kesehatan.",
        bahaya: [
            "sesak napas berat",
            "pingsan",
            "nyeri dada"
        ]
    },

    {
        nama: "GERD / Asam Lambung",
        gejala: [
            "rasa terbakar di dada",
            "dada terasa panas",
            "asam naik",
            "asam lambung naik",
            "asam ke mulut",
            "sendawa"
        ],
        saran: "Perhatikan makanan atau kebiasaan yang memicu keluhan.",
        bahaya: [
            "nyeri dada berat",
            "sulit menelan",
            "muntah darah"
        ]
    },

    {
        nama: "Konstipasi / Sembelit",
        gejala: [
            "sulit bab",
            "bab jarang",
            "tinja keras",
            "feses keras",
            "perut kembung",
            "sembelit"
        ],
        saran: "Perhatikan kecukupan cairan, serat, dan aktivitas fisik.",
        bahaya: [
            "nyeri perut hebat",
            "muntah terus-menerus",
            "perut sangat membesar"
        ]
    },

    {
        nama: "Chikungunya",
        gejala: [
            "demam",
            "nyeri sendi",
            "sakit kepala",
            "ruam",
            "nyeri otot"
        ],
        saran: "Istirahat, cukup minum, dan konsultasikan kepada tenaga kesehatan.",
        bahaya: [
            "sesak napas",
            "kesadaran menurun",
            "muntah terus-menerus"
        ]
    },

    {
        nama: "Campak",
        gejala: [
            "demam",
            "batuk",
            "pilek",
            "mata merah",
            "ruam",
            "bintik merah"
        ],
        saran: "Hindari kontak dekat dengan orang lain dan konsultasikan kepada tenaga kesehatan.",
        bahaya: [
            "sesak napas",
            "kesadaran menurun",
            "kejang",
            "dehidrasi berat"
        ]
    },

    {
        nama: "Gondongan",
        gejala: [
            "pipi bengkak",
            "rahang bengkak",
            "bengkak sekitar rahang",
            "demam",
            "sakit saat mengunyah",
            "nyeri rahang"
        ],
        saran: "Istirahat dan konsultasikan kepada tenaga kesehatan.",
        bahaya: [
            "sulit bernapas",
            "sulit menelan",
            "kesadaran menurun"
        ]
    },

    {
        nama: "Faringitis",
        gejala: [
            "sakit tenggorokan",
            "demam",
            "sulit menelan",
            "tenggorokan merah",
            "suara serak"
        ],
        saran: "Cukup minum dan istirahat.",
        bahaya: [
            "sulit bernapas",
            "tidak bisa menelan cairan",
            "pembengkakan leher"
        ]
    },

    {
        nama: "Tonsilitis",
        gejala: [
            "amandel bengkak",
            "amandel merah",
            "sakit tenggorokan",
            "sulit menelan",
            "demam",
            "bercak putih pada amandel"
        ],
        saran: "Istirahat dan cukup minum. Periksakan diri jika gejala berat atau berulang.",
        bahaya: [
            "sulit bernapas",
            "tidak bisa menelan cairan"
        ]
    },

    {
        nama: "Otitis Media",
        gejala: [
            "nyeri telinga",
            "sakit telinga",
            "demam",
            "telinga terasa penuh",
            "pendengaran berkurang",
            "cairan dari telinga"
        ],
        saran: "Jangan memasukkan benda ke dalam telinga dan konsultasikan jika keluhan berlanjut.",
        bahaya: [
            "bengkak di belakang telinga",
            "kesadaran menurun",
            "sakit kepala berat"
        ]
    },

    {
        nama: "Gastroenteritis",
        gejala: [
            "diare",
            "muntah",
            "mual",
            "kram perut",
            "nyeri perut",
            "demam"
        ],
        saran: "Utamakan cairan dan pantau tanda dehidrasi.",
        bahaya: [
            "tidak mampu minum",
            "darah pada tinja",
            "pingsan"
        ]
    },

    {
        nama: "Vertigo",
        gejala: [
            "pusing berputar",
            "ruangan terasa berputar",
            "sensasi berputar",
            "mual",
            "gangguan keseimbangan"
        ],
        saran: "Duduk atau berbaring di tempat aman saat pusing.",
        bahaya: [
            "kelemahan anggota tubuh",
            "gangguan bicara",
            "sakit kepala sangat mendadak"
        ]
    },

    {
        nama: "Insomnia",
        gejala: [
            "sulit tidur",
            "susah tidur",
            "sering terbangun",
            "sulit kembali tidur",
            "tidur tidak nyenyak"
        ],
        saran: "Usahakan jadwal tidur teratur dan kurangi penggunaan layar menjelang tidur.",
        bahaya: [
            "kebingungan berat",
            "pingsan"
        ]
    },

    {
        nama: "Hipertensi",
        gejala: [
            "tekanan darah tinggi",
            "hasil tensi tinggi",
            "tekanan darah meningkat"
        ],
        saran: "Hipertensi sering tidak menimbulkan gejala. Jika tekanan darah terukur tinggi, konsultasikan kepada tenaga kesehatan.",
        bahaya: [
            "nyeri dada berat",
            "sesak napas berat",
            "kelemahan anggota tubuh",
            "gangguan bicara",
            "gangguan penglihatan"
        ]
    }

];


// ======================================================
// MESIN ANALISIS GEJALA
// ======================================================

function analisisGejala(teks) {

    const teksNormal = normalisasi(teks);

    const hasil = databasePenyakit.map(function (penyakit) {

        const gejalaCocok = penyakit.gejala.filter(function (gejala) {

            return teksNormal.includes(
                normalisasi(gejala)
            );

        });

        return {
            nama: penyakit.nama,
            cocok: gejalaCocok,
            skor: gejalaCocok.length,
            saran: penyakit.saran,
            bahaya: penyakit.bahaya
        };

    });

    return hasil
        .filter(function (item) {
            return item.skor > 0;
        })
        .sort(function (a, b) {
            return b.skor - a.skor;
        });
}


// ======================================================
// KELUHAN & GEJALA
// ======================================================

function lanjutKeAnalisis() {

    const keluhanInput = document.getElementById("keluhan");
    const gejalaInput = document.getElementById("gejala");
    const durasiInput = document.getElementById("durasi");
    const tingkatInput = document.getElementById("tingkat");

    const keluhan = keluhanInput
        ? keluhanInput.value.trim()
        : "";

    const gejala = gejalaInput
        ? gejalaInput.value.trim()
        : "";

    const durasi = durasiInput
        ? durasiInput.value
        : "";

    const tingkat = tingkatInput
        ? tingkatInput.value
        : "";

    if (!keluhan || !gejala || !durasi || !tingkat) {

        alert("Silakan lengkapi semua data terlebih dahulu.");

        return;
    }

    // Simpan data
    localStorage.setItem("keluhan", keluhan);
    localStorage.setItem("gejala", gejala);
    localStorage.setItem("durasi", durasi);
    localStorage.setItem("tingkat", tingkat);


    // Gabungkan semua gejala
    const semuaGejala =
        keluhan + " " + gejala;


    // Jalankan analisis
    const hasil =
        analisisGejala(semuaGejala);


    // Simpan hasil analisis
    localStorage.setItem(
        "hasilAnalisis",
        JSON.stringify(hasil.slice(0, 5))
    );


    // Pindah ke analisis
    window.location.href = "analisis.html";
}


// ======================================================
// HASIL
// ======================================================

function lihatHasil() {
    window.location.href = "hasil.html";
}


function tampilkanHasil() {

    const nama =
        localStorage.getItem("nama") || "Pengguna";

    const keluhan =
        localStorage.getItem("keluhan") || "-";

    const gejala =
        localStorage.getItem("gejala") || "-";

    const durasi =
        localStorage.getItem("durasi") || "-";

    const tingkat =
        localStorage.getItem("tingkat") || "-";


    const sapaan =
        document.getElementById("sapaan");

    const hasilKeluhan =
        document.getElementById("hasilKeluhan");

    const hasilGejala =
        document.getElementById("hasilGejala");

    const hasilDurasi =
        document.getElementById("hasilDurasi");

    const hasilTingkat =
        document.getElementById("hasilTingkat");


    if (sapaan) {

        sapaan.textContent =
            "Halo, " + nama +
            ". Berikut hasil analisis awal berdasarkan informasi yang kamu masukkan.";

    }


    if (hasilKeluhan) {

        hasilKeluhan.textContent =
            "Keluhan utama: " + keluhan;

    }


    if (hasilGejala) {

        hasilGejala.textContent =
            "Gejala: " + gejala;

    }


    if (hasilDurasi) {

        hasilDurasi.textContent =
            "Durasi: " + durasi;

    }


    if (hasilTingkat) {

        hasilTingkat.textContent =
            "Tingkat keluhan: " + tingkat;

    }


    // =========================
    // HASIL PENYAKIT
    // =========================

    const hasilPenyakit =
        document.getElementById("hasilPenyakit");


    if (hasilPenyakit) {

        const hasil =
            JSON.parse(
                localStorage.getItem(
                    "hasilAnalisis"
                ) || "[]"
            );


        if (hasil.length === 0) {

            hasilPenyakit.innerHTML = `
                <p>
                    Belum ditemukan kecocokan
                    yang cukup berdasarkan
                    gejala yang dimasukkan.
                </p>
            `;

        } else {

            hasilPenyakit.innerHTML = `

                <h2>🔍 Kemungkinan Kondisi</h2>

                ${hasil.map(function (item) {

                    return `

                        <div class="hasil-box">

                            <h3>${item.nama}</h3>

                            <p>
                                <strong>
                                    Gejala yang cocok:
                                </strong>
                                ${item.cocok.join(", ")}
                            </p>

                            <p>
                                <strong>
                                    Skor kecocokan:
                                </strong>
                                ${item.skor}
                            </p>

                        </div>

                    `;

                }).join("")}


                <p>
                    ⚠️ Hasil ini bukan diagnosis medis.
                </p>

            `;
       
