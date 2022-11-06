class Preload extends Phaser.Scene{
    constructor(){
        super('bootGame')
    }
    preload(){          //pour charger tout les assets
        this.load.image('menuVillageBg', 'assets/menuVillage.png')
        this.load.spritesheet('barbarian', 'assets/spritesheets/barbarian.png', {frameWidth: 100, frameHeigth: 100})
        this.load.spritesheet('villager', 'assets/spritesheets/villager.png', {frameWidth: 100, frameHeigth: 100})
        this.load.spritesheet('mage', 'assets/spritesheets/mage.png', {frameWidth: 100, frameHeigth: 100})
        this.load.image('maison', 'assets/modeleMaisonMoche.png')
        this.load.image('zoo', 'assets/modeleZooMoche.png')
        this.load.image('bib', 'assets/modeleBibMoche.png')
        this.load.image('shop', 'assets/modeleShopMoche.png')
    }

    create(){
        let spriteTab = ['barbarian', 'villager','mage'];  //tableau contenant les identifiants des spritesheets, pour pouvoir les selectionner aleatoirement plus tard
        this.add.text(20,20,"en cours");                //petit message, puis ajout d'une animation pendant le chargement
        this.player = this.physics.add.sprite(config.width/2, config.height/2, 'barbarian');
        this.add.text(300,350,"press space to play");
        this.anims.create({   //On défini les animations
            key: 'show',
            frames: this.anims.generateFrameNumbers(spriteTab[Math.floor(Math.random()*spriteTab.length)]),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: 'villagerUp',
            frames: this.anims.generateFrameNumbers("villager", {start:15, end: 18 }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: 'villagerDown',
            frames: this.anims.generateFrameNumbers("villager", {start:0, end: 4 }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: 'villagerLeft',
            frames: this.anims.generateFrameNumbers("villager", {start:10, end: 14 }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: 'villagerRight',
            frames: this.anims.generateFrameNumbers("villager", {start:5, end: 9 }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: 'villagerStill',
            frames: this.anims.generateFrameNumbers("villager", {start:0, end: 0 }),
            frameRate: 10,
            repeat: -1
        })
        this.player.play('show');
        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(this.spacebar)){   //On lance le menu après une pression sur space
            this.scene.start('menuVillage');
        }
    }
}
