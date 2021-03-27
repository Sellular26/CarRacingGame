class Form {
    constructor (){
        this.title = createElement('H2');
        this.input = createInput('name');
        this.button = createButton('play');
        this.reset = createButton('reset');
        this.greet = createElement('H3');
    }

    hide() {
        this.greet.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){
        
        this.title.html('Racer Game');
        this.title.position(displayWidth / 2 - 50, 30);
        
        
        this.input.position(displayWidth / 2 - 100, displayHeight / 2 - 180);

       
        this.button.position(displayWidth / 2, displayHeight / 2 - 100);

        this.button.mousePressed(()=> {
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount = playerCount + 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            
            this.greet.position(displayWidth / 2, displayHeight / 2);
            this.greet.html("Hello " + player.name);
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.updateState(0);
        })
    }
}