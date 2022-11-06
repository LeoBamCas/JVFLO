class Shop extends Phaser.Scene{
    constructor(){
        super ('shopMenu')
    }
    create(){
        this.add.text(20,20,'menu shop');
        
        
        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    }
    update(){
        if(Phaser.Input.Keyboard.JustDown(this.spacebar)){   //On lance le menu après une pression sur space
            this.scene.start('menuVillage');
        }
    }
    }