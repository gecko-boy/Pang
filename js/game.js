import LoadScene from './loadscene.js';
import MainScene from './mainscene.js'

const config = {
    width: 825,
    height: 550,
    type: Phaser.Auto,
    parent: 'game-canvas',
    backgroundColor: ' #3ccd41',
    scene: [LoadScene, MainScene],
    physics : {
        default: 'arcade',
        arcade: {
            gravity: { y: 150 },
            debug: false
        }
    }
}

new Phaser.Game(config);