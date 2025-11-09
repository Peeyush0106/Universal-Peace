

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = { "orderedKeys": ["1db8aaa9-04bd-43b7-a968-b67b64481c3b", "7756880a-f1d7-4862-a55d-536ac98bec1e", "d0a9ed9c-26b9-4ec1-a286-f20123654c64", "3edc2d30-f8ff-4f59-87e6-5a49a49e6df9", "c8c253dd-0163-443b-8512-f0e9e377fc7a", "783aff6f-d51c-4b21-bd9b-8017fd2c11ac"], "propsByKey": { "1db8aaa9-04bd-43b7-a968-b67b64481c3b": { "name": "bg1.png", "sourceUrl": "assets/v3/animations/IPKnGiLe9d70KdB_tW1BNYeLq3oPdwB9TY0LPraPhR4/1db8aaa9-04bd-43b7-a968-b67b64481c3b.png", "frameSize": { "x": 402, "y": 403 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "JQ1F1YGdpLoKzMFuaGCjFfXr80yrkEc7", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 402, "y": 403 }, "rootRelativePath": "assets/v3/animations/IPKnGiLe9d70KdB_tW1BNYeLq3oPdwB9TY0LPraPhR4/1db8aaa9-04bd-43b7-a968-b67b64481c3b.png" }, "7756880a-f1d7-4862-a55d-536ac98bec1e": { "name": "bg2.png", "sourceUrl": "assets/v3/animations/IPKnGiLe9d70KdB_tW1BNYeLq3oPdwB9TY0LPraPhR4/7756880a-f1d7-4862-a55d-536ac98bec1e.png", "frameSize": { "x": 402, "y": 402 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "ZQQ0fGcdao1VPMoYKJqp9LixRg9dqjzY", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 402, "y": 402 }, "rootRelativePath": "assets/v3/animations/IPKnGiLe9d70KdB_tW1BNYeLq3oPdwB9TY0LPraPhR4/7756880a-f1d7-4862-a55d-536ac98bec1e.png" }, "d0a9ed9c-26b9-4ec1-a286-f20123654c64": { "name": "rover1.png", "sourceUrl": null, "frameSize": { "x": 103, "y": 75 }, "frameCount": 3, "looping": true, "frameDelay": 12, "version": "Qq6uoLbxGEb7qWwy6av2oi1zhE_Wf9sN", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 103, "y": 225 }, "rootRelativePath": "assets/d0a9ed9c-26b9-4ec1-a286-f20123654c64.png" }, "3edc2d30-f8ff-4f59-87e6-5a49a49e6df9": { "name": "rover2.png", "sourceUrl": null, "frameSize": { "x": 84, "y": 87 }, "frameCount": 3, "looping": true, "frameDelay": 12, "version": "ZtLA5kuH5MkWwMGNLmkdiw8vlexVQtFV", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 168, "y": 174 }, "rootRelativePath": "assets/3edc2d30-f8ff-4f59-87e6-5a49a49e6df9.png" }, "c8c253dd-0163-443b-8512-f0e9e377fc7a": { "name": "rover3.png", "sourceUrl": null, "frameSize": { "x": 113, "y": 102 }, "frameCount": 3, "looping": true, "frameDelay": 12, "version": "tCfqPvQ_xw3_1cpH3wGAKhzRkJSKFtUW", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 226, "y": 204 }, "rootRelativePath": "assets/c8c253dd-0163-443b-8512-f0e9e377fc7a.png" }, "783aff6f-d51c-4b21-bd9b-8017fd2c11ac": { "name": "rover4.png", "sourceUrl": null, "frameSize": { "x": 145, "y": 75 }, "frameCount": 2, "looping": true, "frameDelay": 12, "version": "hogIKj7cCukAJOIatl1i9CZswwmguwf2", "loadedFromSource": true, "saved": true, "sourceSize": { "x": 145, "y": 150 }, "rootRelativePath": "assets/783aff6f-d51c-4b21-bd9b-8017fd2c11ac.png" } } };
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
        image,
        props.frameSize.x,
        props.frameSize.y,
        frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }

    // -----

    // Mission: You are on the MISSION MARS. Make your Signature by creating trace using your ROVER  //

    //Create a sprite for the background and adding image
    var bg = createSprite(200, 200, 10, 10);
    bg.setAnimation("bg1.png");

    //Create a rover to make traces and adding image to the rover.
    var rover = createSprite(200, 200, 10, 10);
    rover.setAnimation("rover4.png");
    rover.scale = 0.75;


    //other variables
    var lines = [];
    var timeCalled = 0;
    var penDown = true;


    //Adding color to the trace created using the rover 
    stroke(rgb(61, 43, 31));
    strokeWeight(3);



    function draw() {
      background("white");

      drawSprites();

      //To display the trace you created using your rover. 
      for (var x = 0; x < lines.length; x++) {
        line(lines[x][0], lines[x][1],
          lines[x][2], lines[x][3]);
      }

      if (windowHeight < windowWidth) {
        document.body.style.zoom = (windowHeight / 400) - 0.03
      }
      else {
        document.body.style.zoom = (windowWidth / 400) - 0.03
      }
    }



    //       *******     sample code for reference      ********//

    // SYNTAX : functionname (input)
    // forward function moves front with the distance given as input. eg: forward(20) will move front by 20 steps.
    // backward function moves backward with the distance given as input. eg: backward(20) will move backward by 20 steps.
    // turnRight function rotates in clockwise with a certain degree . eg: turnRight(20) will rotate right side by 20 degrees.
    // turnLeft function rotates in anti-clockwise with a certain degree . eg: turnLeft(20) will rotate left side by 20 degrees.
    // lift up function will not make traces on the Mars.
    //lift down will not make traces on the Mars.




    //       *******     sample code for reference      ********//

    // ROVER INSTRUCTIONS TO MARK YOUR TRACE -- START //

    // enter your code here!



    // Move rover to starting position
    liftUp();
    turnRight(90);
    forward(15);
    liftDown();

    // Create fingers
    turnLeft(45);
    forward(80);
    // Create arc
    turnRight(45);
    for (var i = 0; i < 15; i++) {
      turnRight(6);
      forward(3);
    }

    // Other side fingers
    turnRight(135);
    liftUp();
    forward(41);
    turnRight(90);
    forward(2);
    liftDown();
    turnLeft(45);

    for (var i = 0; i < 15; i++) {
      turnLeft(6);
      forward(3);
    }
    turnLeft(45);
    forward(80);
    liftUp();
    backward(80);
    liftDown();
    turnRight(45);

    turnRight(90);
    for (var i = 0; i < 15; i++) {
      turnLeft(6);
      forward(3);
    }

    // Bring back rover for folded fingers
    turnLeft(45);
    forward(10);
    backward(10);
    turnLeft(90);
    liftUp();
    forward(123);
    liftDown();

    turnRight(45);

    // Create folded fingers
    // First 3 folded fingers

    for (var i = 0; i < 3; i++) {
      foldedFinger();
      turnRight(90);
      liftUp();
      forward(38);
      liftDown();
      turnLeft(45);
    }

    // Fourth folded finger
    foldedFinger();
    turnRight(90);
    liftUp();
    forward(38);
    turnLeft(90);
    forward(50);
    liftDown();
    turnRight(90);


    // Creating heart
    for (var i = 0; i < 22; i++) {
      turnRight(2);
      forward(5);
    }
    turnRight(1);

    for (var i = 0; i < 40; i++) {
      turnRight(3.5);
      forward(5);
    }

    turnRight(260);

    for (var i = 0; i < 40; i++) {
      turnRight(3.5);
      forward(5);
    }
    turnRight(1);
    for (var i = 0; i < 12; i++) {
      turnRight(3);
      forward(6);
    }

    turnRight(3);
    forward(2);

    turnRight(95);
    forward(120);

    // Create Thumb
    turnLeft(100);
    for (var i = 0; i < 7; i++) {
      turnRight(3);
      forward(10);
    }

    // increasing curve of the thumb
    for (var i = 1; i < 13; i++) {
      turnRight(i);
      forward(2);
    }

    for (var i = 1; i < 8; i++) {
      turnRight(6);
      forward(1);
    }

    turnRight(30);
    forward(80);

    turnRight(15);
    forward(25);


    // Bring rower to bottom
    turnRight(140);
    liftUp();
    forward(285);
    turnLeft(90);
    forward(130);
    liftDown();


    //make folded finger
    function foldedFinger() {
      turnLeft(45);
      for (var j = 0; j < 2; j++) {
        forward(60);
        for (var i = 0; i < 60; i++) {
          turnRight(3);
          forward(1);
        }
      }
    }




    // ROVER INSTRUCTIONS TO MARK YOUR TRACE -- END //


    //Function to control the steps and directions of the rover. 
    //rover.rotation is used for rotating the rover in a particular angle.
    //x1 - start position in x direction
    //y1- start position in y direction
    //x2 -  position in x direction after travelling a certain distance
    //y2 - position in y direction after travelling a certain distance
    //one degree is equivalent to pi/180 radians. 
    //Math.cos(),Math.sin() method returns a numeric value between -1 and 1.

    function move(angle, distance) {
      timeCalled += 1;
      setTimeout(function () {
        rover.rotation = rover.rotation + angle;
        var radian = rover.rotation * Math.PI / 180;
        var x1 = rover.x;
        var y1 = rover.y;
        var x2 = rover.x + (distance * Math.cos(radian));
        var y2 = rover.y + (distance * Math.sin(radian));
        rover.x = x2;
        rover.y = y2;
        if (penDown === true) {
          lines.push([x1, y1, x2, y2]);
        }
      }, timeCalled * 250);
    }

    // To move the rove in forward direction
    function forward(distance) {
      move(0, distance);
    }

    //To move the rover in backward riection
    function backward(distance) {
      move(0, -distance);
    }

    // To rotate the rover in clockwise directiopn
    function turnRight(angle) {
      move(angle, 0);
    }

    // To move the rover in anticlockwise direction
    function turnLeft(angle) {
      move(-angle, 0);
    }

    // Lift the rover up to avoid making traces on the ground
    function liftUp() {
      timeCalled += 1;
      setTimeout(function () {
        penDown = false;
      }, 250 * timeCalled);
    }

    // Make the rover touch the ground to draw traces on the ground
    function liftDown() {
      timeCalled += 1;
      setTimeout(function () {
        penDown = true;
      }, 250 * timeCalled);
    }



    // -----
    try { window.draw = draw; } catch (e) { }
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
