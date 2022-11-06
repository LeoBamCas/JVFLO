class Zoo extends Phaser.Scene{
    constructor(){
        super ('zooMenu')
    }
    create(){
        this.add.text(20,20,'menu zoo');

        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }
    update(){
        if(Phaser.Input.Keyboard.JustDown(this.spacebar)){   //On lance le menu après une pression sur space
            this.scene.start('menuVillage');
        }
    }
    }