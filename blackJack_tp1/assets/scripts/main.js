/* 
Traite le formulaire initial.
Lance le jeu (classe Board).
Photos des cartes : https://www.freepik.com/free-vector/illustration-online-gambling_3139780.htm#query=cards&position=6&from_view=search
Photos Mario : https://www.kindpng.com/downpng/mwiToJ_peaches-clipart-mario-new-super-mario-bros-2/

*/

import Board from "../scripts/board";

window.addEventListener('DOMContentLoaded', function() {


    let elboard= document.querySelectorAll("[data-js-board]");
    

    for (let i = 0; i < elboard.length; i++) {

      let  nbPlayer = new Board(elboard[i]) ;
    }



});
