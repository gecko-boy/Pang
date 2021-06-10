import Arpoon from "./arpoon.js"

export class Player extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame, arpoonTexture){
        //criar script do player
        super(scene, x, y, texture, frame, arpoonTexture);
        scene.add.existing(this);
        scene.physics.add.existing(this);

        //impedir movimento fora dajanela de jogo
        this.setCollideWorldBounds(true);

        //criar o player
        this.setScale(1);
        
        this.initialFrame = frame;

        this.hVelocity = 200;

        this.movementInput = scene.input.keyboard.createCursorKeys();

        this.scene.input.on("pointerdown", e => {this.fire(e)});
        this.playerIsFiring = false;

        this.arpoon = new Arpoon(this.scene, 0, 0, this.arpoonTexture, this);
    }

    fire(event) {
        this.playerIsFiring = true;
    }

    move() {
        //sistema de inputs MOVIMENTO
        if(this.movementInput.right.isDown) {
            this.setVelocityX(this.hVelocity);
        }
        else if (this.movementInput.left.isDown) {
            this.setVelocityX(-this.hVelocity);
        }
        else {
            this.setVelocityX(0);
        }
    }



    update(time) {
        this.move();
        if(this.playerIsFiring) {
            console.log("fire");
            //criar arpão
            this.arpoon.createSelf(this);
            this.playerIsFiring = false;
        }
    }

}