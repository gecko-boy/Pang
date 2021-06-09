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
        this.platform = this.physics.add.staticGroup({
            allowGravity: false,
            immovable: true
        })
        

        //cenário
       this.add.image(0, 0, 'bg1').setOrigin(0).setScale(1);

       //criar player
       this.player = new Player(
           this,
           this.game.config.width / 2,
           this.game.config.height,
           "playerFrame1", 0
       ).setScale(0.4);

            //será esta a melhor forma de o fazer??
    //    this.platform1 = new Platform(
    //     this,
    //     0,
    //     0,
    //     "plat_grande", 0
    //     ).setScale(1);

//criar plataformas
    }

    platformSpawning() {
        levelData.forEach(data => {
            let newPlatform = undefined;
            if (data.repeat == 1) {
                newPlatform = this.add.sprite(data.x, data.y, data.frame);
            } else {
                newPlatform = this.add.tileSprite(data.x, data.y, data.repeat * data.width, data.height, data.key, data.frame);
            }
            this.platformSpawning.add(newPlatform);
        })
    }

    update(time) {
        this.player.update(time);
    }
}