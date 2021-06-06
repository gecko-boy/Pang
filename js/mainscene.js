export default class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
    }

    init() {}

    create() {

       this.bg1 = this.add.sprite(0, 0, 'bg1').setOrigin(0);
       
    }

    update(time) {}
}