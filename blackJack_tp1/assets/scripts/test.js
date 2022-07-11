/* 
Créer le DOM de chaque joueur selon le nombre reçu.
Chaque joueur instancie la classe Player.

*/

import Player from "./player";

export default class Board {

    constructor(el) {
        this._el = el;

        this._elBtnPlay = this._el.querySelector("[data-js-play]");
        this._elForm = this._el.querySelector("[data-js-form]");
       // this._elFormWrapper= this._el.querySelector("[data-js-board]");
        this._elInput = this._elForm.querySelector('[type="number"]');
        this._elerror = this._el.querySelector("[data-js-error-msg]");

        this._elPlayerSection = this._el.querySelector("[data-js-list-players]");
        this._Playername = 'player1w'
       
        this.init();

        this.affichePlayer(); 

    }

  

  
    init() {
               
        this._elBtnPlay.addEventListener('click', function(e) {
            e.preventDefault();
            let errror1 = 'Selectionner un nombre de player plus grand que 0 svp ' ;
             let  NombrePlayers = this._elInput.value ; 

            if (NombrePlayers > 0) {
                this._elerror.innerHTML += '' ; 
                this._elForm.innerHTML = '' ; 
                let y = 0 
                //NombrePlayers =  NombrePlayers +1 ;


                for (let i = 0;  i < NombrePlayers; i++) {

                     y = y+1 ;
                    
                    this._Playername = 'player '+y;
                    let player =  this.affichePlayer(); 
                    this._elPlayerSection.insertAdjacentHTML("beforeend",player)
                    new Player(this._elPlayerSection)
                  
                    
                }

                

                
                //let btnPlay = this._elPlayerSection.querySelector("[data-js-start21]");
                //let btnStop = this._elPlayerSection.querySelector("[data-js-stop21]");
      
                
            }
            

            // Si l'input est selectionner est en bas de 0 
            if (NombrePlayers <= 0) {
                this._elerror.innerHTML += errror1;
            }

          


        }.bind(this)); // Pour pouvoir utiliser le  this du constructor 
            
                
           
        };



        
    affichePlayer() {

            let players = `
    
                <div class="titre"> <h2>   ${ this._Playername}  </h2>   </div>
                <div class="cards" data-js-cards >    </div>
    
                <div class="total"> Total : ${this._elInput.value} </div>
             
                <div class="btn" data-js-btn>
                    <button data-js-start21> Play</button>
                    <button data-js-stop21> Stop</button>
                </div>   
          
           `;
    
            return players ;
    
        }     



}

/* 
Mécaniques de jeu communes à tous les joueurs :
- joueur suivant ;
- comportements en fin de la partie



import Deck from "./deck";



export default class Game {

    constructor(sectionJoueur,board) {
  
        this._el = sectionJoueur ;
        this._elBoard = board;
        this._PtsTotal = this._elBoard.querySelectorAll("[data-js-points]");
        // Determiner les pts ou les faire heriter de joueur ? 
        this._PtsPlayer =  this._el.querySelectorAll("[data-js-points]");

        this._elCards = this._elBoard.querySelector("[data-js-list-cards]");
        
        this.init();
        


        
    }




    init() {
        const valeur = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"] ;
        const enseigne = ['♦','♣','♥','♠'] ;

       let  newDeck = new Deck(valeur,enseigne) ;

        console.log( newDeck._deck)


    }
}

*/