var SceneXP = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "SceneXP" });
    },
    init: function() {},
    preload: function() {
      this.load.image('backgroundXP', 'assets/winXP/pics/backgroundXP.png');
      this.load.audio('startupXP', 'assets/winXP/audio/XP_startup.mp3')
    },

    create: function() {
      this.add.image(windowWidth / 2, widnowHeight / 2, 'backgroundXP');
      var startupSoundXP = this.sound.add('startupXP');
      startupSoundXP.play();

        this.input.keyboard.once('keyup-ZERO', function () {
            this.scene.start('SceneOne', 0);
        }, this);

        this.events.on('shutdown', this.shutdown, this);
    },

    update: function() {},

    shutdown: function () {
        this.input.keyboard.shutdown();
    }
});
