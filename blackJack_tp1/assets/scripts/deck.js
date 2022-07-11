/* 
Mécaniques de jeu communes à tous les joueurs :
-Deck 

*/

export default class Deck {

    constructor(valeur,enseigne) {

        this._valeur = valeur ;
        this._enseigne = enseigne;
        
        this._21 = [];
        this.init();
       
        this.shuffle();
    }
                                
    init() {

        let deck = this._21 ;
        for (let i= 0; i< this._enseigne.length; i++) {
           for (let j = 0; j < this._valeur.length; j++) {
               deck.push(this._valeur[j]+ "-" + this._enseigne[i]);
            
           }
            
        };

        if (deck.length > 0 ) {

         this.shuffle(deck);
            
        };
      
    };

    // Utiliser la fonction Math.floor 
    // source : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor 
   shuffle() {
      
        let l =this._21.length ;

            for (let i= 0; i < l; i++) {
                // pour le enelever 51.999  
                let j = Math.floor(Math.random()* l)
                let temp = this._21[i];
               this._21[i] =this._21[j] ;
               this._21[j] = temp ; 
               
            }
            return this._21 ;
    }  



}
