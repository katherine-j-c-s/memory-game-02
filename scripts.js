(function () {
    const cards = document.querySelectorAll('.memory-card'); // es un areray de elementos que tienen l;a clase memory card
 //   console.log(cards);
    var hasFlippedCard = false;
    var lockBoard = false;
    var firstCard, secondCard;
    function flipCard() {
        console.log("clik",this);
        if (lockBoard) {
            return;
        } 
        // si la segunda carta es igual a la primera (es la misma carta)
        if (this === firstCard) return; // -> vamos a asumir que esto esta bien, luego investigamos por que
        this.classList.add('flip'); // -> si existe la clase "flip" la va a eliminar, si no existe, la va a agregar
        console.log("habia una carda volteada?",hasFlippedCard)
        if(!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
         console.log("Esta volteada la carta?",hasFlippedCard)   
            return;
        }
        secondCard = this;
        console.log("Esta volteada la carta?",hasFlippedCard)
        console.log("first card",firstCard)
        console.log("second card",secondCard)
        
        checkForMatch();
    }
    function checkForMatch() {
        if(firstCard.dataset.framework === secondCard.dataset.framework){
            console.log("son igualitos jeje")
            disableCards();
            return;
        }

        unflipCards();
    }
    function disableCards(){
        firstCard.removeEventListener('click',flipCard);
        secondCard.removeEventListener('click',flipCard);
        resetBoard();
    }
    function unflipCards() {
        lockBoard = true;
        // en js puedes tener funciones que tomen como parametro otras funciones
        setTimeout(removeFlipClass,500); 
    }
    function resetBoard() {
        lockBoard = false;
        hasFlippedCard = false;
        firstCard = null;
        secondCard = null;
        /* ES6 destructuring
        [lockBoard, hasFlippedCard] = [false,false];
        [firstCard, secondCard] = [null, null];
        */
    }
    function removeFlipClass(){
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        console.log("removeFlipClass")
        resetBoard();
    }
    for (var i=0; i<cards.length; i++){
     //   console.log(`%c index: ${i} elemento`,'color:green',cards[i])
        cards[i].addEventListener('click', flipCard);
    }

}());
// coment