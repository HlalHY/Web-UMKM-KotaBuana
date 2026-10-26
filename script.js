// JavaScript Rumah Ramas Minang

// Nomor WhatsApp toko
const nomorWhatsApp = "6281234567890";

// Menunggu halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function () {

    // Mengambil semua kartu menu
    const menuCards = document.querySelectorAll(".menu-card");

    // Mengatur tombol pesan setiap menu
    menuCards.forEach(function (card) {

        const namaMenu = card.querySelector("h3").textContent;
        const hargaMenu = card.querySelector(".price").textContent;
        const tombolPesan = card.querySelector(".order-btn");

        tombolPesan.addEventListener("click", function (event) {
            event.preventDefault();

            // Meminta jumlah pesanan
            const jumlah = prompt(
                "Mau pesan berapa porsi " + namaMenu + "?",
                "1"
            );

            // Jika pelanggan membatalkan
            if (jumlah === null) {
                return;
            }

            const jumlahPorsi = Number(jumlah);

            // Validasi jumlah pesanan
            if (
                !Number.isInteger(jumlahPorsi) ||
                jumlahPorsi < 1
            ) {
                alert("Masukkan jumlah porsi yang benar!");
                return;
            }

            // Menghitung harga
            const hargaAngka = Number(
                hargaMenu.replace(/[^\d]/g, "")
            );

            const totalHarga = hargaAngka * jumlahPorsi;

            // Format harga menjadi Rupiah
            const formatRupiah = function (angka) {
                return "Rp" + angka.toLocaleString("id-ID");
            };

            // Membuat pesan WhatsApp
            const pesan =
                "Halo Rumah Ramas Minang!\n\n" +
                "Saya ingin memesan:\n" +
                "Menu: " + namaMenu + "\n" +
                "Harga: " + formatRupiah(hargaAngka) + "\n" +
                "Jumlah: " + jumlahPorsi + " porsi\n" +
                "Total: " + formatRupiah(totalHarga) + "\n\n" +
                "Mohon konfirmasi pesanan saya. Terima kasih!";

            // Membuka WhatsApp
            const linkWhatsApp =
                "https://wa.me/" + nomorWhatsApp +
                "?text=" + encodeURIComponent(pesan);

            window.open(linkWhatsApp, "_blank");
        });
    });

    // Efek navigasi menu
    const navigasi = document.querySelectorAll("nav a");

    navigasi.forEach(function (link) {
        link.addEventListener("click", function () {
            navigasi.forEach(function (item) {
                item.style.color = "";
                item.style.fontWeight = "";
            });

            link.style.color = "#a52a2a";
            link.style.fontWeight = "bold";
        });
    });

    // Pesan saat website siap
    console.log("Rumah Ramas Minang berhasil dimuat!");
});
