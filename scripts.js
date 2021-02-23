(function () {
    const cards = document.querySelectorAll('.memory-card'); // es un areray de elementos que tienen l;a clase memory card
 //   console.log(cards);
    var hasFlippedCard = false;
    var firstCard, secondCard;
    function flipCard() {
        console.log("clik",this);
        this.classList.add('flip'); // -> si existe la clase "flip" la va a eliminar, si no existe, la va a agregar
        console.log("habia una carda volteada?",hasFlippedCard)
        if(!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
         console.log("Esta volteada la carta?",hasFlippedCard)   
            return;
        }
        secondCard = this;
        hasFlippedCard = false;
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
    }
    function unflipCards() {
        setTimeout(removeFlipClass,1500)
    }
    function removeFlipClass(){
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        console.log("removeFlipClass")
    }
    for (var i=0; i<cards.length; i++){
     //   console.log(`%c index: ${i} elemento`,'color:green',cards[i])
        cards[i].addEventListener('click', flipCard);
    }

}());
// coment