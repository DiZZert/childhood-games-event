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

    initialize: function Demo () {
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
        // this.load.json('allGamesJSON', 'temp/games.json');
    },

    create: function () {
        this.add.image(windowWidth / 2, widnowHeight / 2, 'dosBackground');
        this.add.image(windowWidth / 2, widnowHeight / 2, 'gamesPanelImage');

        this.input.keyboard.on('keydown-ESC', function () {
            this.scene.start('menu');
        }, this);

        // var text = this.add.text(100, 100, 'Big FUCKING text', { fontFamily: 'SwissFont', font:'24px', fill: '#ffffff' });

        // text.setText([
        //   // 'Level: ' + this.data.get('level')
        //   'text for gameslist panel'
        // ]);

        // console.log(oldGames);
        // var phaserJSON = this.cache.json.get('allGamesJSON');
        // var text = this.add.text(100, 100, phaserJSON.name, { fontFamily: 'SwissFont', font:'24px', fill: '#ffffff' });
    }

});

class OS {
    constructor(data) {
        this.name = data.name;
        this.webcamOffset = data.webcamOffset;
        this.gridSizes = data.gridSizes;
    }

    GetGames() {
        // TODO: use backend data, endpoint?
        return [
            { id: '1', name: 'Doom III', icon: 'assets/win98/games/doom3.png' },
            { id: '2', name: 'Barbie', icon: 'assets/win98/games/barbie.png' },
            { id: '3', name: 'Barbie', icon: 'assets/win98/games/barbie.png' },
            { id: '4', name: 'Barbie', icon: 'assets/win98/games/barbie.png' },
            { id: '5', name: 'Barbie', icon: 'assets/win98/games/barbie.png' },
            { id: '6', name: 'Barbie', icon: 'assets/win98/games/barbie.png' },
            { id: '7', name: 'Barbie', icon: 'assets/win98/games/barbie.png' },
            { id: '8', name: 'Barbie', icon: 'assets/win98/games/barbie.png' },
            { id: '9', name: 'Barbie', icon: 'assets/win98/games/barbie.png' },
            { id: '10', name: 'Barbie', icon: 'assets/win98/games/barbie.png' },
            { id: '11', name: 'Barbie', icon: 'assets/win98/games/barbie.png' },
            { id: '12', name: 'Barbie', icon: 'assets/win98/games/barbie.png' },
        ]
    }
}

var OSData = [
    {
        name: 'win98',
        webcamOffset: 150,
        gridSizes: { xOffset: 40, yOffset: 40, width: 70, height: 60, gap: 20 },
    },
    {
        name: 'winXP',
        webcamOffset: 150,
        gridSizes: { xOffset: 40, yOffset: 40, width: 70, height: 60, gap: 20 }
    },
];

var Win98System = new OS(OSData[0]);
var WinXPSystem = new OS(OSData[1]);

var SceneLoader = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize: function Menu () {
        Phaser.Scene.call(this, 'SceneLoader');
    },

    preload: function () {
    },

    create: function () {
        // MOCK
        this.add.text(400, 200, '1 - Win98');
        this.add.text(400, 300, '2 - WinXP');

        this.input.keyboard.once('keyup-ONE', function () {
            this.scene.start('OSScene', Win98System);
        }, this);
        this.input.keyboard.once('keyup-TWO', function () {
            this.scene.start('OSScene', WinXPSystem);
        }, this);

        this.events.on('shutdown', this.shutdown, this);
    },



    shutdown: function () {
        this.input.keyboard.shutdown();
    }

});

var OSScene = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize: function Win98Scene () {
        Phaser.Scene.call(this, 'OSScene');
    },

    init: function (data) {
        this.OS = data;
    },

    preload: function () {
        this.load.image('menuPanel', `assets/${this.OS.name}/menuPanel.png`);
        this.load.image('menuPanelClicked', `assets/${this.OS.name}/menuPanelClicked.png`);
        this.load.image('background', `assets/${this.OS.name}/background.png`);
        this.load.image('bottomPanel', `assets/${this.OS.name}/bottomPanel.png`);
        this.load.image('webcam', `assets/${this.OS.name}/webcam.png`);
        this.load.image('gamesPlaceholderIcon', `assets/${this.OS.name}/games/placeholderIcon.png`);
    },

    create: async function() {
        this.drawBackgrounds();
        this.generateBottomLinks();
        await this.generateGames();
    },

    drawBackgrounds: function() {
        var webcamTexture = this.textures.get('webcam');
        var bottomPanelTexture = this.textures.get('bottomPanel');
        var webcamImage = webcamTexture.getSourceImage();
        var bottomPanelTextureImage = bottomPanelTexture.getSourceImage();
        this.add.image(windowWidth / 2, widnowHeight / 2, 'background');
        this.add.image(windowWidth / 2, widnowHeight - bottomPanelTextureImage.height/2, 'bottomPanel');
        this.add.image(windowWidth - webcamImage.width / 2 - this.OS.webcamOffset, widnowHeight / 2, 'webcam');
    },

    generateBottomLinks: async function() {
        const bottomPanelTexture = this.textures.get('bottomPanel');
        const bottomPanelTextureImage = bottomPanelTexture.getSourceImage();
        const bottomPosition = widnowHeight - bottomPanelTextureImage.height/2 + 4;
        const offset = 200;
        const width = 129;
        const gamesLink = this.add.image(offset + width, bottomPosition, 'menuPanel');
        gamesLink.displayHeight = bottomPanelTextureImage.height/1.3;
        this.add.text(offset + width - 46, bottomPosition - 8, 'Список Игр');
        const itemsLink = this.add.image(offset + width*2, bottomPosition, 'menuPanel');
        itemsLink.displayHeight = bottomPanelTextureImage.height/1.3;
        this.add.text(offset + width*2 - 46, bottomPosition - 8, 'Предметы');
        const inventoryLink = this.add.image(offset + width*3, bottomPosition, 'menuPanel');
        inventoryLink.displayHeight = bottomPanelTextureImage.height/1.3;
        this.add.text(offset + width*3 - 46, bottomPosition - 8, 'Инвентарь');
        const formatsLink = this.add.image(offset + width*4, bottomPosition, 'menuPanel');
        formatsLink.displayHeight = bottomPanelTextureImage.height/1.3;
        this.add.text(offset + width*4 - 46, bottomPosition - 8, 'Форматы');
    },

    generateGames: async function () {
        const games = await this.OS.GetGames();
        games.forEach((game, index) => {
            this.createIcon(game, index);
        });
    },

    createIcon: async function (game, index) {
        // each 10 games in column moved to right
        const xColumn = Math.floor(index / 10);
        const yRow = index % 10;
        const position = {
            x: this.OS.gridSizes.xOffset + xColumn * this.OS.gridSizes.width + xColumn * this.OS.gridSizes.gap,
            y: this.OS.gridSizes.yOffset + yRow * this.OS.gridSizes.height + yRow * this.OS.gridSizes.gap,
        };
        const imageBox = this.add.image(position.x, position.y, 'gamesPlaceholderIcon');
        this.add.text(position.x - imageBox.width/2 - this.OS.gridSizes.gap/2, position.y + imageBox.height/2, game.name);

        let loader = new Phaser.Loader.LoaderPlugin(this);
        loader.image(`icon-${game.name}`, game.icon);
        loader.once(Phaser.Loader.Events.COMPLETE, () => {
            imageBox.setTexture(`icon-${game.name}`);
        });
        loader.start();
    }
});

var config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    pixelArt: true,
    parent: 'childhood-games',
    scene: [ SceneLoader, OSScene, Menu, Demo, GamesList ]
};

var game = new Phaser.Game(config);
var windowWidth = window.innerWidth;
var widnowHeight = window.innerHeight;
