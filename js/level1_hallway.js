import {Player} from "./danny.js"

export default class Lvl1 extends Phaser.Scene{
    constructor() {
        super("Lvl1")
    }

    init() {

        //ir buscar inputs ao player
        this.gameControls = this.Player.movementInput;
    }

    create() {

        //criar plataformas
        this.platform = this.physics.add.staticGroup({
            allowGravity: false,
            immovable: true
        });

        //cenário
       this.add.image(0, 0, 'bg1').setOrigin(0).setScale(1);

       //criar player
       this.player = new Player(
           this,
           this.gameControls.config.width * 0.5,
           this.gameControls.config.height * 0.5,
           "playerFrame1", 0
       ).setScale(1);

       let platform = this.add.tileSprite(1748, 2480, 1500, 1000);
    }

    update(time) {
        this.player.updte(time);
    }
}