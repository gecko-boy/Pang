import LoadScene from "./loadscene.js";
import Lvl1 from "./level1_hallway.js";


//configurar o jogo de jogo
const config = {
    width: 827,
    height: 583,
    type: Phaser.AUTO,
    parent: 'game-canvas',
    backgroundColor: ' #3ccd41',
    scene: [LoadScene, Lvl1],
    physics : {
        default: 'arcade',
        arcade: {
            gravity: { y: 150 },
            debug: true
        }
    }
}

new Phaser.Game(config);