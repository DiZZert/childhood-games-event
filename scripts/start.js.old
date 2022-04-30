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

var keys;
var grFrame;

var game = new Phaser.Game(config);

function preload () {

    this.load.image('dosBackground', 'assets/dos/background.png');
    this.load.image('gFrameImg', 'assets/dos/grey_panel.png');

  }

function create () {

  keys = this.input.keyboard.addKeys('q, esc');

  var windowWidth = window.innerWidth;
  var widnowHeight = window.innerHeight;
  this.add.image(windowWidth / 2, widnowHeight / 2, 'dosBackground');

  // var GreyFrame = new Phaser.Class({
  //   Extends: Phaser.GameObjects.Image,
  //
  //       initialize:
  //
  //       function greyFrame (scene)
  //       {
  //           Phaser.GameObjects.Image.call(this, scene, 0, 0, 'gFrameImg');
  //       },
  //
  //       show: function () {
  //           this.setPosition(windowWidth / 2, widnowHeight / 2);
  //           this.setActive(true);
  //           this.setVisible(true);
  //       }
  //
  // });
  //
  // grFrame = this.add.group({
  //   classType: GreyFrame,
  //   maxSize: 1,
  // });

  }

  function update () {

    var windowWidth = window.innerWidth;
    var widnowHeight = window.innerHeight;

    if (Phaser.Input.Keyboard.JustDown(keys.q)) {
        // var getFrame = grFrame.get();
        console.log(this.children.getChildren());
        //
        // if (getFrame) {
        //     getFrame.show();
        // }
        this.add.image(windowWidth / 2, widnowHeight / 2, 'gFrameImg');
    }

    if (Phaser.Input.Keyboard.JustDown(keys.esc)) {
      console.log("pushed esc");
      var objToDestroy = this.children.getChildren().length-1;
      console.log((this.children.getChildren().length)-1);

      var childrensArray = this.children.getChildren();
      var lastName = childrensArray[this.children.getChildren().length-1].texture.key;
      console.log(lastName);
    }
}
