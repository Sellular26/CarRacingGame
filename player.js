class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.distanceX = 0;
        this.rank = null;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data)=>{
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var index = "players/player" + player.index;
        database.ref(index).set({
            name: this.name,
            distance: this.distance,
            distanceX: this.distanceX,
            rank: this.rank
        });
    }

    static getPlayerInfo() {
        var playerCountRef = database.ref('players');
        playerCountRef.on("value", (data)=>{
            allPlayers = data.val();
        })
    }
}