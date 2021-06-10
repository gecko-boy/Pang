import {Player} from "./danny.js"
import {Platform} from "./platform.js"


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
           "playerFrame1", 0, "arp"
       ).setScale(0.4);

       this.arpoon = this.player.arpoon;
       
    }

    update(time) {
        this.player.update(time);
        this.player.arpoon.update(time);
    }
}