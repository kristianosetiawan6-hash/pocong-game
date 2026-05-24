class ScenePlay extends Phaser.Scene {

    constructor() {
        // Menggunakan 'ScenePlay' (huruf kapital) agar konsisten dengan SceneMenu
        super('ScenePlay');
    }

    preload() {
        // Memuat gambar latar belakang dan karakter utama (pocong)
        this.load.image('bg_play', 'assets/images/fg_loop_back.png'); // Menggunakan fg_loop_back agar sesuai tema bermain
        this.load.image('player', 'assets/images/chara.png');
    }

    create() {
        // MENAMPILKAN BACKGROUND
        // Menggunakan ukuran 768x1024 sesuai dengan skala layar tegak (portrait)
        this.add.image(384, 512, 'bg_play')
            .setDisplaySize(768, 1024);

        // MENAMPILKAN PLAYER (POCONG)
        // Posisi X di 200 (agak ke kiri) supaya pemain punya waktu melihat rintangan dari kanan
        this.player = this.add.image(200, 700, 'player');
        this.player.setScale(0.3);

        // LOGIKA GERAKAN JUMP / HOVER JIKA DIPERLUKAN
        // (Nanti kamu bisa menambahkan rintangan dan kontrol klik di sini)
    }

    update() {
        // Logika perulangan game (seperti pergerakan rintangan) akan berjalan di sini
    }
}