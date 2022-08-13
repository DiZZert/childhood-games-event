var windowWidth = window.innerWidth;
var widnowHeight = window.innerHeight;

var EpochScreen = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "SceneOne" });
    },
    init: function() {},
    preload: function() {
        this.load.image('buttonDOS', 'assets/epochs/buttonDOS.png');
        this.load.image('button98', 'assets/epochs/button98.png');
        this.load.image('buttonXP', 'assets/epochs/buttonXP.png');
    },
    create: function() {

        this.clickButton = this.add.image(windowWidth / 2, (widnowHeight / 2) - 90 , 'buttonDOS')
         .setInteractive()
         .on('pointerdown', () => this.scene.start('SceneDOS', 0) );

         this.clickButton = this.add.image(windowWidth / 2, widnowHeight / 2, 'button98')
          .setInteractive()
          .on('pointerdown', () => this.scene.start('Scene98', 0) );

          this.clickButton = this.add.image(windowWidth / 2, (widnowHeight / 2) + 90, 'buttonXP')
           .setInteractive()
           .on('pointerdown', () => this.scene.start('SceneXP', 0) );

    },
    update: function() {}
});
