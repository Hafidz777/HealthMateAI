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
    const jenisKelamin = jenisKelaminInput ? jenisKelaminInput.value : "";

    if (!nama || !umur || !jenisKelamin) {
        alert("Silakan lengkapi semua data terlebih dahulu.");
        return;
    }

    localStorage.setItem("nama", nama);
    localStorage.setItem("umur", umur);
    localStorage.setItem("jenisKelamin", jenisKelamin);

    window.location.href = "gejala.html";
}


// =========================
// KELUHAN & GEJALA
// =========================

function lanjutKeAnalisis() {
    const keluhanInput = document.getElementById("keluhan");
    const gejalaInput = document.getElementById("gejala");
    const durasiInput = document.getElementById("durasi");
    const tingkatInput = document.getElementById("tingkat");

    const keluhan = keluhanInput ? keluhanInput.value.trim() : "";
    const gejala = gejalaInput ? gejalaInput.value.trim() : "";
    const durasi = durasiInput ? durasiInput.value : "";
    const tingkat = tingkatInput ? tingkatInput.value : "";

    if (!keluhan || !gejala || !durasi || !tingkat) {
        alert("Silakan lengkapi semua data terlebih dahulu.");
        return;
    }

    // Simpan DATA TERBARU
    localStorage.setItem("keluhan", keluhan);
    localStorage.setItem("gejala", gejala);
    localStorage.setItem("durasi", durasi);
    localStorage.setItem("tingkat", tingkat);

    // Pindah ke halaman analisis
    window.location.href = "analisis.html";
}


// =========================
// HASIL
// =========================

function lihatHasil() {
    window.location.href = "hasil.html";
}


function tampilkanHasil() {
    const nama = localStorage.getItem("nama") || "Pengguna";
    const keluhan = localStorage.getItem("keluhan") || "-";
    const gejala = localStorage.getItem("gejala") || "-";
    const durasi = localStorage.getItem("durasi") || "-";
    const tingkat = localStorage.getItem("tingkat") || "-";

    const sapaan = document.getElementById("sapaan");
    const hasilKeluhan = document.getElementById("hasilKeluhan");
    const hasilGejala = document.getElementById("hasilGejala");
    const hasilDurasi = document.getElementById("hasilDurasi");
    const hasilTingkat = document.getElementById("hasilTingkat");

    if (sapaan) {
        sapaan.textContent =
            "Halo, " + nama + ". Berikut rangkuman informasi yang kamu masukkan.";
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
}


// =========================
// SARAN
// =========================

function lanjutKeSaran() {
    window.location.href = "saran.html";
}


// =========================
// TANDA BAHAYA
// =========================

function lanjutKeTandaBahaya() {
    window.location.href = "bahaya.html";
}


// =========================
// BANTUAN
// =========================

function lanjutKeBantuan() {
    window.location.href = "bantuan.html";
}


// =========================
// JALANKAN SAAT HALAMAN SIAP
// =========================

document.addEventListener("DOMContentLoaded", function () {

    if (document.getElementById("sapaan")) {
        tampilkanHasil();
    }

});