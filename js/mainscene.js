export default class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
    }

    init() {}

    create() {
        
       this.add.image(0, 0, 'bg1').setOrigin(0).setScale(1);
       
    }

    update(time) {}
}