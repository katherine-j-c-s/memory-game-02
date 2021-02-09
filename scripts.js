(function () {
    const cards = document.querySelectorAll('.memory-card'); // es un areray de elementos que tienen l;a clase memory card
    console.log(cards);
    function flipCard() {
        console.log("clik",this);
        this.classList.toggle('flip'); // -> si existe la clase "flip" la va a eliminar, si no existe, la va a agregar
    }
    for (var i=0; i<cards.length; i++){
        console.log(`%c index: ${i} elemento`,'color:green',cards[i])
        cards[i].addEventListener('click', flipCard);
    }
}());
// coment