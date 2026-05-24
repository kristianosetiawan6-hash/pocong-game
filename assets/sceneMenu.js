class SceneMenu extends Phaser.Scene {

    constructor() {
        // Menggunakan nama 'SceneMenu' (diawali huruf kapital agar konsisten dengan nama class)
        super("SceneMenu");
    }

    preload() {
        // MEMUAT ASET GAMBAR
        this.load.image('bg_start', 'assets/images/bg_start.png');
        this.load.image('btn_play', 'assets/images/btn_play.png');
        this.load.image('title_game', 'assets/images/title_game.png');
    }

    create() {
        // MENAMPILKAN GAMBAR LATAR DAN JUDUL
        // Koordinat disesuaikan dengan ukuran layar game kamu
        this.add.image(384, 512, 'bg_start');
        this.add.image(384, 250, 'title_game');

        // MEMBUAT TOMBOL PLAY INTERAKTIF
        let tombol = this.add.image(384, 700, 'btn_play').setInteractive();

        // KETIKA TOMBOL DIKLIK, PINDAH KE SCENE PLAY
        tombol.on('pointerdown', () => {
            this.scene.start('ScenePlay');
        });
    }

}