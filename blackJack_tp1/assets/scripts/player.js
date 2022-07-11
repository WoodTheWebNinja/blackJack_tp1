
/* 
Mécanique de chaque joueur individuellement.
Hérite de la classe Game.
Gestion du cas ‘Jouer‘, plus précisément :
- tirage d’une carte (classe Card) ;
- affichage de la carte ;
- gestion du pointage et l’état du joueur.
Gestion du cas ‘Stop‘.

*/

import Game from './game'


export default class Player extends Game {

    constructor(board,sectionJoueur, btnStart,btnStop,elPoints,elCards, playerName) {

        super(board,sectionJoueur, btnStart,btnStop,elPoints,elCards, playerName);

        this._el = sectionJoueur ;
        this._elPoints = elPoints;
        this._elCards = elCards;

        this._elBtnStart = btnStart;
        this._elBtnStop = btnStop;
        
        this._Playername =  playerName;

        this._boards = board;

        this._elSectionCards =  this._el.nextElementSibling;

        this._ptsTotal = 0 ;

        this.initgame();

     
        this._deck =  this.deck() 

      
        this.init() ;
       
       

    }
  
    init() {

            // comportement bouton Play 

 
            this._elBtnStart.addEventListener('click', function(e) {
          
            this._CurrentPlayer = true;
                
              let card =  this.draw(this._deck)
            
              // insérer la carte 

              let card_inject = this.injecterCarte(card)    

              this._elSectionCards.insertAdjacentHTML("beforeend",card_inject)

              let pts = this.cardValue(card) ;


              this._ptsTotal =  this._ptsTotal+pts ; 
              this._elPoints.innerHTML= this._ptsTotal ;


              this.next();
            
            








            }.bind(this)); // Pour pouvoir utiliser le  this du constructor 

            // comportement bouton Stop

            this._elBtnStop.addEventListener('click', function(e) {

                e.preventDefault(e);
                this._CurrentPlayer = true;
               // this._el.classList.add("disabled")
                this.next();
                
            }.bind(this));
        
            
    }

    injecterCarte(card) {

        let card_insert = `
        <div class="cards " data-js-list-cards>  
        <img src="./assets/img/${card}.png" alt="">   
        </div>

       `;

        return card_insert ;

    }     





}
