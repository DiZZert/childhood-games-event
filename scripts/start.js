var config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      // gravity: { y: 0 }
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var game = new Phaser.Game(config);

function preload () {

    // this.load.setBaseURL('http://labs.phaser.io');

    this.load.image('dosBackground', 'assets/dos/background.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');

  }

function create () {

  var windowWidth = window.innerWidth;
  var widnowHeight = window.innerHeight;
  // this.bg.setDisplaySize(windowWidth, widnowHeight);

  this.add.image(windowWidth / 2, widnowHeight / 2, 'dosBackground');
  this.add.image(400, 100, 'logo');

  }

  function update ()
{
    if (Phaser.Input.Keyboard.JustDown(spacebar))
    {
        
    }
}
