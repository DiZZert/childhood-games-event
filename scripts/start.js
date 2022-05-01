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
      this.add.image(windowWidth / 2, widnowHeight / 2, 'dosBackground');
      var floppySound = this.sound.add('floppy');

        this.input.keyboard.once('keyup-ONE', function () {
            floppySound.play();
            this.scene.start('demo', { id: 0, image: 'grey_panel.png' });

        }, this);

        this.input.keyboard.once('keyup-TWO', function () {
            floppySound.play();
            this.scene.start('glist', 0);

        }, this);

        this.input.keyboard.once('keyup-EIGHT', function () {
            floppySound.play();
            this.scene.start('demo', { id: 8, image: 'van.png' });

        }, this);

        this.input.keyboard.once('keyup-NINE', function () {
            floppySound.play();
            this.scene.start('demo', { id: 9, image: 'billy.png' });

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

        this.add.image(windowWidth / 2, widnowHeight / 2, 'dosBackground');
        this.add.image(windowWidth / 2, widnowHeight / 2, 'pic' + this.imageID);

        this.input.keyboard.on('keydown-ESC', function () {
            this.scene.start('menu');
        }, this);
    }

});

var GamesList = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function GamesList () {
        Phaser.Scene.call(this, { key: 'glist' });
    },

    init: function () {

    },

    preload: function () {
        this.load.image('gamesPanelImage', 'assets/dos/pics/games_panel.png');
    },

    create: function () {
        this.add.image(windowWidth / 2, widnowHeight / 2, 'dosBackground');
        this.add.image(windowWidth / 2, widnowHeight / 2, 'gamesPanelImage');

        this.input.keyboard.on('keydown-ESC', function () {
            this.scene.start('menu');
        }, this);

        var text = this.add.text(100, 100, 'Big FUCKING text', { fontFamily: 'swissFont', font:'24px', fill: '#ffffff' });

        // text.setText([
        //   // 'Level: ' + this.data.get('level')
        //   'text for gameslist panel'
        // ]);
    }

});

var config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    pixelArt: true,
    parent: 'childhood-games',
    scene: [ Menu, Demo, GamesList ]
};

var game = new Phaser.Game(config);
var windowWidth = window.innerWidth;
var widnowHeight = window.innerHeight;
