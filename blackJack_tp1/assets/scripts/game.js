/* 
Mécaniques de jeu communes à tous les joueurs :
- joueur suivant ;
- comportements en fin de la partie

*/

import Deck from "./deck.js";
export default class Game {

    constructor() {
        
        this._CurrentPlayer = false;
    
        

    }

        deck(){   
                
                const valeur = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"] ;
                //const enseigne = ['♦','♣','♥','♠'] ;
                const enseigne = ['C','D','H','S'] ;
               
                let  newDeck = new Deck(valeur,enseigne) ;
                let deck_21 = newDeck._21
                return deck_21                
        };
        

        initgame() {         
            if (this._Playername == 'player 1') {
                this._CurrentPlayer = true;

            };

             if (this._CurrentPlayer == false && this._Playername != 'player 1' &&this._Playername != undefined ) {
                this._el.classList.add("disabled")
        
            };
        
  
/*
                    if (this._Playername != undefined) {
    
                        if (this._CurrentPlayer == true) {
                
                        }
                    
                        if (this._CurrentPlayer == false) {
                         this._el.classList.add("disabled")
                    
                        }
                    }
*/
         };

    next() { 

        let sectionPlayers = this._boards.querySelectorAll("[data-js-section-player]")


        console.log( this._ptsTotal)

        if (this._ptsTotal > 21)  {
            console.log('BUSTED')
           
            //window.alert('BUSTED', this._Playername )

        let busted = `
            <div class="popup show">
            <img src="./assets/img/K-H.png" alt=""> 
          </div>
          <div class="show">
            <div class="overlay"></div>
            <div class="img-show">
              <span>X</span>
              <img src="">
            </div>
          </div>

       `;
       console.log( busted)
       this._elSectionCards.insertAdjacentHTML("beforebegin",busted)   


        }else if (this._ptsTotal == 21) {
            console.log('Black Jack')






            
        }

    
        if (this._CurrentPlayer == true) {
         
        

            for (let i = 0; i < sectionPlayers.length; i++) {

                if (this._el ==sectionPlayers[i] ) 
                {
                    let w = i + 1            
                    this._el.classList.add("disabled")

                    // Si element est le dernier dans le tableau, disabled le premier element du tableau 
                    if (sectionPlayers[w] == undefined) {
                        
                        sectionPlayers[0].classList.remove("disabled");

                    }else if (sectionPlayers[w] != undefined) {

                        sectionPlayers[w].classList.remove("disabled");
                    } 

        
                }   
             
                
            }

        }
 
 
     };

      // const randomElement = array[Math.floor(Math.random() * array.length)]; 
      // source : https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array 
 
     draw(deck) { 
           
            let card = deck[Math.floor(Math.random() * deck.length)];
            return card 
     };
    
    
     cardValue(card) { 

     console.log(card)
           
      let data = card.split('-');
      let value = data[0];
  
        if (isNaN(value)) {

             switch (value) {
                case value == 'A':
                    value = 11 ;
                    return value
                default /* "J","Q","K" */:
                    value = 10 ;
                    return value
             }
        };

        value = parseInt(value);
         return value ;         
        
 };

}




