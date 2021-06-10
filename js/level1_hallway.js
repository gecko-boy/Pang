import {Player} from "./danny.js"

let levelData= [
    //plataforma da esquerda
]

export default class Lvl1 extends Phaser.Scene{
    constructor() {
        super("Lvl1")
    }

    init() {
        //inputs
        this.gameControls = this.input.keyboard.createCursorKeys();
    }

    create() {        
        this.platforms= this.physics.add.staticGroup({
            allowGravity:true , immovable: true});

        //cenário
       this.add.image(0, 0, 'bg1').setOrigin(0).setScale(1);

       //criar plataformas
         let bigPlatform = this.add.image(0, this.game.config.height * 0.65, "plat_grande").setScale(0.5);

        this.platforms.add(bigPlatform);

       //criar player
       this.player = new Player(
           this,
           this.game.config.width * 0.5,
           this.game.config.height,
           "playerFrame1", 0
       ).setScale(0.45);

       this.physics.add.overlap(this.player, this.platforms, this.onPlatforms, null, this);
    }

    onPlatform(player, platforms) {
        this.player.setOnPlatform(true);
    }

    update(time) {
        this.player.update(time);
        this.player.setOnPlatform(false);

        console.log(this.player.onPlatforms);

    }
}