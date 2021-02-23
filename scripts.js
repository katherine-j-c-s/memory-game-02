(function () {
    const cards = document.querySelectorAll('.memory-card'); // es un areray de elementos que tienen l;a clase memory card
 //   console.log(cards);
    var hasFlippedCard = false;
    var firstCard, secondCard;
    function flipCard() {
        console.log("clik",this);
        this.classList.add('flip'); // -> si existe la clase "flip" la va a eliminar, si no existe, la va a agregar
        console.log("Esta volteada la carta?",hasFlippedCard)
        if(!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
        }
        console.log("bandera",hasFlippedCard)
        console.log("first card",firstCard)
    }
    for (var i=0; i<cards.length; i++){
     //   console.log(`%c index: ${i} elemento`,'color:green',cards[i])
        cards[i].addEventListener('click', flipCard);
    }
}());
// coment