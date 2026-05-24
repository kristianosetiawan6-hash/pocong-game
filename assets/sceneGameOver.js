class SceneGameOver extends Phaser.Scene {

    constructor() {
        // Menggunakan 'SceneGameOver' (huruf kapital) agar konsisten dengan scene lainnya
        super("SceneGameOver");
    }

    // Mengambil data skor yang dikirimkan dari ScenePlay saat game over
    init(data) {
        this.finalScore = data.score || 0;
    }

    create() {
        // 1. MEMBUAT OVERLAY HITAM TRANSPARAN
        // Menutup seluruh layar ukuran 768x1024 dengan warna hitam (opacity 0.7)
        this.add.rectangle(384, 512, 768, 1024, 0x000000, 0.7);

        // 2. MENAMPILKAN TEKS GAME OVER
        this.add.text(384, 350, 'GAME OVER', {
            fontSize: '64px',
            fill: '#ff0000',
            fontWeight: 'bold'
        }).setOrigin(0.5);

        // 3. MENAMPILKAN SKOR AKHIR
        this.add.text(384, 480, 'Skor Kamu: ' + this.finalScore, {
            fontSize: '36px',
            fill: '#ffffff'
        }).setOrigin(0.5);

        // 4. MEMBUAT TOMBOL MAIN LAGI
        // Menggunakan kotak hijau dengan padding agar rapi
        let btnUlang = this.add.text(384, 650, 'MAIN LAGI', {
            fontSize: '32px',
            fill: '#ffffff',
            backgroundColor: '#00aa00',
            padding: { x: 20, y: 10 }
        })
        .setOrigin(0.5)
        .setInteractive();

        // Efek visual saat kursor diarahkan ke tombol (Hover)
        btnUlang.on('pointerover', () => btnUlang.setStyle({ fill: '#ffff00' }));
        btnUlang.on('pointerout', () => btnUlang.setStyle({ fill: '#ffffff' }));

        // Logika ketika tombol diklik -> Kembali bermain
        btnUlang.on('pointerdown', () => {
            this.scene.start('ScenePlay');
        });
    }

}