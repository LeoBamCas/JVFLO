class Menu extends Phaser.Scene{
    constructor(){
        super("menuVillage");
    }
    create(){
        this.background = this.add.image(0,0,'menuVillageBg')  //Creation du BG
        this.background.setOrigin(0,0)
        this.maison = this.physics.add.image(100,70,'maison').setInteractive()  //ajout des lieux puis du groupe batiments
        this.zoo = this.physics.add.image(650,350,'zoo')
        this.bib = this.physics.add.image(100,350,'bib')
        this.shop = this.physics.add.image(600,150,'shop')
        this.batiments = this.physics.add.group();
        this.batiments.add(this.maison);
        this.batiments.add(this.zoo);
        this.batiments.add(this.bib);
        this.batiments.add(this.shop);
        this.batiments.on('clicked', this.changeMenu, this);
        this.player = this.physics.add.sprite(config.width/2, config.height/2, 'villager').setScale(0.5); //creation du perso
        this.cursorKeys = this.input.keyboard.createCursorKeys();  //assignation des touches premières
        this.physics.add.overlap(this.player, this.batiments, this.changeMenu, null, this);
    }
    update(){
       this.movePlayer()   //appelle la fonction de mouvement et animation joueur
    }

    movePlayer(){     //Fonction pour gerer les mouvements et animations du joueur
        var playerTexture = this.player.texture.key; //on crée une variable qui vient chercher le nom du spritesheet en cours du joueur, pur ensuite adapter son animation
        this.player.setVelocity(0);
        if(this.cursorKeys.up.isDown){
            this.player.setVelocityY(-100);
            this.player.play(playerTexture+ "Up", true);

        }else if(this.cursorKeys.down.isDown){
            this.player.setVelocityY(100);
            this.player.play(playerTexture + "Down", true);

        }else if(this.cursorKeys.left.isDown){
            this.player.setVelocityX(-100);
            this.player.play(playerTexture+"Left", true);
        }else if(this.cursorKeys.right.isDown){
            this.player.setVelocityX(100);
            this.player.play(playerTexture + "Right", true);
        }else{
            this.player.play(playerTexture + 'Still', true);
        }
    }
    changeMenu(player, batiment){  // permet de passer au menu lié au batiment
        this.scene.start(batiment.texture.key+'Menu');
    }
}