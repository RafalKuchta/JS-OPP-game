class Statistics {
    constructor(){
        this.gameResults = []
    }

    addGameStatistics(win, bid){
        let gameResult = {
            win,
            bid
        }
        this.gameResults.push(gameResult);
        return gameResult
    }

    showGameStatistics(){
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(result => result.win).length;
        let losses = games - wins;
        return [games, wins, losses]
    }
}

// const stats = new Statistics();
