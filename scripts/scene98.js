var Scene98 = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "Scene98" });
    },
    init: function() {},
    preload: function() {
      this.load.image('background98', 'assets/win98/pics/background98.png');
      this.load.audio('startup98', 'assets/win98/audio/98_startup.mp3')
    },

    create: function() {
      this.add.image(windowWidth / 2, widnowHeight / 2, 'background98');
      var startupSound98 = this.sound.add('startup98');
      startupSound98.play();

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
