export class Platform extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        scene.add.existing(this);
        scene.physics.add.existing(this);

        //criar a plataforma
        this.setScale(1);

        this.physics.allowGravity = false;
    }
}