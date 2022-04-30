var Menu = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Menu () {
        Phaser.Scene.call(this, 'menu');
    },

    preload: function () {
        this.load.image('dosBackground', 'assets/dos/pics/background.png');
        this.load.audio('floppy', 'assets/dos/audio/floppy_sound.mp3')
    },

    create: function () {
      var windowWidth = window.innerWidth;
      var widnowHeight = window.innerHeight;
      this.add.image(windowWidth / 2, widnowHeight / 2, 'dosBackground');
      var floppySound = this.sound.add('floppy');

        this.input.keyboard.once('keyup-ONE', function () {
            floppySound.play();
            this.scene.start('demo', { id: 0, image: 'grey_panel.png' });

        }, this);

        this.input.keyboard.once('keyup-TWO', function () {

            this.scene.start('demo', { id: 1, image: 'van.jpg' });

        }, this);

        this.input.keyboard.once('keyup-THREE', function () {

            this.scene.start('demo', { id: 2, image: 'billy.jpg' });

        }, this);

        this.events.on('shutdown', this.shutdown, this);
    },



    shutdown: function () {
        this.input.keyboard.shutdown();
    }

});


//заготовка сцены
var Demo = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Demo () {
        Phaser.Scene.call(this, { key: 'demo' });
    },

    init: function (data) {
        console.log('init', data);

        this.imageID = data.id;
        this.imageFile = data.image;
    },

    preload: function () {
        this.load.image('pic' + this.imageID, 'assets/dos/pics/' + this.imageFile);
    },

    create: function () {
        var windowWidth = window.innerWidth;
        var widnowHeight = window.innerHeight;
        this.add.image(windowWidth / 2, widnowHeight / 2, 'dosBackground');
        this.add.image(windowWidth / 2, widnowHeight / 2, 'pic' + this.imageID);

        this.input.keyboard.on('keydown-ESC', function () {
            this.scene.start('menu');
        }, this);
    }

});

var config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    // backgroundColor: '#2d2d8d',
    pixelArt: true,
    parent: 'phaser-example',
    scene: [ Menu, Demo ]
};

var game = new Phaser.Game(config);
