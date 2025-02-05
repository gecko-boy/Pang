export default class LoadScene extends Phaser.Scene{
    constructor(){
        super('LoadScene');
    }
    //pré-carregar as imagens
    preload(){
        this.load.image('bg1', './images/1cenario.png');
        this.load.image('bg2', './images/2cenario.png');
        this.load.image('bg3', './images/3cenario (2).png');
        this.load.image('playerFrame1', './images/player.png');
        this.load.image("playerFrame2", "./images/player2.png");
        this.load.image('bola_tran', './images/bolas.png');
        this.load.image('bola_op', './images/bolas2.png');
        this.load.image('arp', './images/lança.png');
        this.load.image('plat_grande', './images/plataformas.png');
        this.load.image('plat_pequena', './images/plataformas2.png');

    }

    //criar a cena
    create(){
        //this.input.mouse.disableContextMenu();
        this.scene.start('Lvl1');
    }

    update(time) {}
}