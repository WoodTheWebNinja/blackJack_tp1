/**
 *commentaire
 */
 import Game from './game.js';
 export default class Form {
 
 
     constructor(el) {
         this._el = el;

         this._elBtns = this._el.querySelector("[data-js-play]");
         this._elInputForm = this._el.querySelector("[data-js-input-wrapper]");

         this.elInput = this._elInputForm.querySelector('[type="number"]');
   
         this.init();
 
    
     }
 
     init() {

     

             this._elBtns.addEventListener('click', function(e) {
                e.preventDefault();
                
                new Game(this.elInput.value);
              
                
 
             }.bind(this)); // Pour pouvoir utiliser le  this du constructor 
         };
         
        

/* METHODE AFFICHER LISTE PLAYER 

         function affichePlayer() {

            let players = `
            <div data-js-players>

                Total : ${this.players}

                <button data-js-play>jouer</button>
                <button data-js-stop>jouer</button>
            </div>
           `;
    
            return players ;

        }

       */

 
 
 }
