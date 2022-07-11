/* 
Créer le DOM de chaque joueur selon le nombre reçu.
Chaque joueur instancie la classe Player.

*/

import Player from "./player";
import Game from "./game";


export default class Board {

    constructor(el) {
        this._el = el;

        this._elBtnPlay = this._el.querySelector("[data-js-play]");
        this._elForm = this._el.querySelector("[data-js-form]");
       // this._elFormWrapper= this._el.querySelector("[data-js-board]");
        this._elInput = this._elForm.querySelector('[type="number"]');
        this._elerror = this._el.querySelector("[data-js-error-msg]");

        this._elPlayerSection = this._el.querySelector("[data-js-list-players]");

        this.init();

        this._Playername = 'DefaultNom'
        this._elPlayerpts = 0 ;
        

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
                let wb = [] ;
                //NombrePlayers =  NombrePlayers +1 ;

                new Game() 
                for (let i = 0;  i < NombrePlayers; i++) {

                     y = y+1 ;
                    
                    this._Playername = 'player '+y;
                    let player =  this.affichePlayer(); 
                    this._elPlayerSection.insertAdjacentHTML("beforeend",player)

                    let btnStart = this._elPlayerSection.querySelectorAll("[data-js-start21]");
                    let  btnStop = this._elPlayerSection.querySelectorAll("[data-js-stop21]");
                    this._elPoints =this._elPlayerSection.querySelectorAll("[data-js-points]");
                    this._elCards = this._elPlayerSection.querySelectorAll("[data-js-cards]");
                    // Section Div pour chaque joueur 
                    this._elSectionsPlayers = this._el.querySelectorAll("[data-js-section-player]");
                    
                 
             
                   this._Playername =  new Player(this._elPlayerSection,this._elSectionsPlayers[i],btnStart[i],btnStop[i],this._elPoints[i],this._elCards[i], this._Playername)
                   
                  
                  wb[i] = this._elSectionsPlayers[i]
                  
                 
                    
                }
            
            }
            
            // Si l'input est selectionner est en bas de 0 
            if (NombrePlayers <= 0) {
                this._elerror.innerHTML += errror1;
            }

          
           

        }.bind(this)); // Pour pouvoir utiliser le  this du constructor 
           
    };
 
    affichePlayer() {

            let players = `
            <div class="section_player " data-js-section-player>

                <div class="titre"> <h2>   ${ this._Playername}  </h2>   </div>
    
                <div class="total" " data-js-points> Total : ${ this._elPlayerpts} </div>
             
                <div class="btn" data-js-btn>
                    <button data-js-start21> Play</button>
                    <button data-js-stop21> Stop</button>
                </div>   
            </div>  

            <div class="cards " data-js-list-cards>  
            
          
            
            </div>




           `;
    
            return players ;
    
        }     

}



