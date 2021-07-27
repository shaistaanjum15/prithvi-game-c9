var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["39c3fcc6-83c8-47b9-b14b-03a6d89e93ab","0d6642a0-d5f7-4ef4-8751-0cbf9e58134f","e5555964-de36-44b8-ac91-9289d23c8d88"],"propsByKey":{"39c3fcc6-83c8-47b9-b14b-03a6d89e93ab":{"name":"basketball_1","sourceUrl":"assets/api/v1/animation-library/gamelab/lJ_EH4DV2ueKL_rNgl9vTVZREP_YfLJf/category_sports/basketball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"lJ_EH4DV2ueKL_rNgl9vTVZREP_YfLJf","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/lJ_EH4DV2ueKL_rNgl9vTVZREP_YfLJf/category_sports/basketball.png"},"0d6642a0-d5f7-4ef4-8751-0cbf9e58134f":{"name":"sports_basketballhalf2_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"sFJEXuazSoZcfv9jZClXOJ4NtKG65tSw","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/0d6642a0-d5f7-4ef4-8751-0cbf9e58134f.png"},"e5555964-de36-44b8-ac91-9289d23c8d88":{"name":"hand_ball","sourceUrl":"assets/api/v1/animation-library/gamelab/pwucKp9Jx5Ksr1oGABFcKnFJjewfORMI/category_sports/soccer_blue.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"pwucKp9Jx5Ksr1oGABFcKnFJjewfORMI","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/pwucKp9Jx5Ksr1oGABFcKnFJjewfORMI/category_sports/soccer_blue.png"}}};
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


var playground = createSprite(200,200);
playground.setAnimation("sports_basketballhalf2_1");

var top_wall1 = createSprite(75,5,150,10);
top_wall1.shapeColor = "red";

var top_wall2 = createSprite(325,5,150,10);
top_wall2.shapeColor = "red";

var ball = createSprite(200, 370);
ball.setAnimation("hand_ball");
ball.scale = 0.08;



var player=createSprite(200,395,100,10);
player.shapeColor="black";




var gameState = "serve";


createEdgeSprites();

function draw() {
  background("white");
  
  drawSprites();
  textSize(20);
 
 
  if (gameState == "serve") {
    text("Mouse Click to Serve",110,180);
  }
  
  
if (gameState=="over") {
  text("GAME OVER",110,180)
}



  
  ball.bounceOff(top_wall1);
  ball.bounceOff(top_wall2);
  

  ball.bounceOff(leftEdge)
  ball.bounceOff(rightEdge)
  ball.bounceOff(player)
  
  
  player.x=World.mouseX

  
  
  
  if(ball.isTouching(topEdge)) {
    playSound("assets/category_achievements/vibrant_game_positive_item_4.mp3");
    reset()
  
    gameState = "serve";
  }
  
  
    if (ball.isTouching(bottomEdge)) {
      gameState="over"
      playSound("assets/category_alerts/playful_game_error_sound_4.mp3");
    }
  
  
}
if (player.x >=390) {
  player.x=355
}
if (player.x < 5) {
  player.x=20
}

function mousePressed() {
  
  ball.velocityX=5;
  ball.velocityY = -4;
  
  gameState = "play";
}

function reset() {
  
  ball.velocityX = 8;
  ball.velocityY = 8;
  
  
  if (gameState=="over") {
  ball.x = 200;
  ball.y = 370;
}
}

// -----
    try { window.draw = draw; } catch (e) {}
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
