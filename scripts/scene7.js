var Scene7 = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "Scene7" });
    },
    init: function() {},
    preload: function() {
      this.load.image('background7', 'assets/win7/pics/background7.png');
      this.load.audio('startup7', 'assets/win7/audio/7_startup.mp3')
    },

    create: function() {
      this.add.image(windowWidth / 2, widnowHeight / 2, 'background7');
      var startupSoundXP = this.sound.add('startup7');
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
