class Game {
    constructor() {

    }

    getState() {
        database.ref('gameState').on("value", function(data){
            gameState: data.val();
        }); 
    }

    update(state) {
        database.ref('/').update({
            gameState: state
        })
    }

    async start() {
        if(gameState == 0) {
            background(backGroundImg)
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
        car1 = createSprite(100, 200);
        car1.addImage(carImg1);
        car2 = createSprite(300, 200);
        car2.addImage(carImg2);
        car3 = createSprite(400, 200);
        car3.addImage(carImg3);
        car4 = createSprite(500, 200);
        car4.addImage(carImg4);

        cars = [car1, car2, car3, car4];
    }

    play() {
        form.hide();
        background(0, 0, 0);
        image(track, 0, -displayHeight * 4, displayWidth - 50, displayHeight * 5);
        Player.getPlayerInfo();

        if(allPlayers != undefined) {
            var position = 50;

            var index = 0;
            var x = 175;
            var y;

            for(var i in allPlayers) {
                index = index + 1;
                x = x + 200;
                y = displayHeight - allPlayers[i].distance;

                cars[index - 1].x = x + allPlayers[i].distanceX;
                cars[index - 1].y = y;

                position = position + 20
                var variable = createElement('p');
                variable.html(allPlayers[i].name + ": " + allPlayers[i].distance)
                variable.position(50, position);

                if(index == player.index) {
                    camera.position.x = displayWidth / 2;
                    camera.position.y = cars[index - 1].y;
                    cars[index - 1].shapeColor = "red";
                    fill("Blue");
                    ellipse(cars[index - 1].x, cars[index - 1].y, 60, 60);
                }
            }
        }

        if(keyIsDown(UP_ARROW)) {
            player.distance = player.distance + 20;
            player.update();
        }

        if(keyIsDown(RIGHT_ARROW)) {
            player.distanceX = player.distanceX + 20;
            player.update();
        }

        if(keyIsDown(LEFT_ARROW)) {
            player.distanceX = player.distanceX - 20;
            player.update();
        }

        if(player.distance ==  4200) {
            rank += 1;
            player.rank = rank;
            player.update();
            gameState = 2;
        }
 
        car1.bounceOff(car2);
        car1.bounceOff(car3);
        car1.bounceOff(car4);
        car2.bounceOff(car1);
        car2.bounceOff(car3);
        car2.bounceOff(car4);
        car3.bounceOff(car1);
        car3.bounceOff(car2);
        car3.bounceOff(car4);
        car4.bounceOff(car1);
        car4.bounceOff(car2);
        car4.bounceOff(car3);

        drawSprites();
    }

    end() {
        console.log("End Game" + player.rank + rank);
    }
}