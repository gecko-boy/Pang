export default class Arpoon extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, parent) {
        super(scene, x, y, texture)

        this.parent = parent;

        this.setScale(1);

        this.directionY = -1;
        this.throwSpeed = 1;
        this.spawnOffset = -20;
    }

    createSelf(parent) {
        this.parent = parent;
        this.setPosition(this.parent.x, this.parent.y + this.spawnOffset);
        console.log("i'm born");
    }

    update(time) {
        this.y += this.directionY * this.throwSpeed;
    }
}