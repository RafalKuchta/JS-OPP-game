// link do gry: https://websamuraj.pl/examples/js/gra/

 class Game {
    constructor(start) {
        this.stats = new Statistics();
        this.wallet = new Wallet(start);
        document.getElementById("start").addEventListener("click", this.startGame.bind(this));

        this.boards = [...document.querySelectorAll("div.color")];
        this.inputBid = document.getElementById("bid");
        this.spanWallet = document.querySelector(".panel .wallet");

        this.spanResult = document.querySelector(".result");
        this.spanNumber = document.querySelector(".number");
        this.spanWin = document.querySelector(".win");
        this.spanLoss = document.querySelector(".loss");

        this.render()
    }

    render(colors = ["#aaa","#aaa", "#aaa"], panel = 200, result = "", score = [0,0,0], bid = 0, wonMonay = 0){
        this.boards.forEach((board, i) => {
            board.style.backgroundColor = colors[i];
        })
        this.spanWallet.textContent = panel;
         if(result){
            result = `Wygrałeś ${wonMonay} $`
        } else if(!result && result !== ""){
            result = `Przegrałeś ${bid} $`
        }
        this.spanResult.textContent = result;
        this.spanNumber.textContent = score[0]
        this.spanWin.textContent = score[1]
        this.spanLoss.textContent = score[2]

        this.inputBid.value = ""
        

 }

startGame(){
    if(this.inputBid.value < 1) return alert("Za mał stawka");
     const bid = Math.floor(this.inputBid.value);

    if(!this.wallet.checkCanPlay(bid)){ 
        return alert("Masz za mało pieniędzy")}

        this.wallet.changeWallet(bid, "-");
       
        this.draw = new Draw();
        const colors = this.draw.getDrawResult();
        const win = Result.checkWinner(colors);
        const wonMonay = Result.moneyWonInGame(win, bid);
        this.wallet.changeWallet(wonMonay);
        this.stats.addGameStatistics(win, bid)
        // const stat = Statistics.showGameStatistics()
        this.render(colors, this.wallet.getWalletValue(), win, this.stats.showGameStatistics(), bid, wonMonay)
}

 }
 
