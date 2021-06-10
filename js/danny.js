export class Player extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture, frame){
        //criar script do player
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);

        //impedir movimento fora dajanela de jogo
        this.setCollideWorldBounds(true);

        //criar o player
        this.setScale(1);
        
        this.initialFrame = frame;

        this.hVelocity = 200;

        this.movementInput = scene.input.keyboard.createCursorKeys();

        this.onPlatforms = false;

    }
    setOnPlatform(value) {
        this.onPlatforms = value;
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
    }

}