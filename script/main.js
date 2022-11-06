const config = {
    type: Phaser.AUTO,
    width: 760,
    height: 500,
    backgroundColor: '#872A87',
    parent: 'canvas',
    scene: [Preload, Menu, Maison, Zoo, Bib, Shop],
    physics: {
        default: 'arcade',
        arcade: {debug:false}
    }
}

game = new Phaser.Game(config);