import {Player} from "./danny.js"

export default class Lvl1 extends Phaser.Scene{
    constructor() {
        super("Lvl1")
    }

    init() {

        //inputs
        this.gameControls = this.input.keyboard.createCursorKeys();
    }

    create() {

        

        //cenário
       this.add.image(0, 0, 'bg1').setOrigin(0).setScale(1);

       //criar player
       this.player = new Player(
           this,
           this.game.config.width / 2,
           this.game.config.height,
           "playerFrame1", 0
       ).setScale(0.4);

//criar plataformas
        // this.platforms = this.physics.add.staticGroup({
        //     allowGravity: false,
        //     immovable: true
        // });
    //    let platform = this.add.tileSprite(1024, 2048 - 1300, 3* 1500, 1000, 'ground', 0).setScale(2);
    //    this.platforms.add(platform);

    }

    update(time) {
        this.player.update(time);
    }
}