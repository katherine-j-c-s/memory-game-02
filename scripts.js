(function () {
    const cards = document.querySelectorAll('.memory-card');
    console.log(cards);
    function flipCard() {
        console.log("clik",this);
        this.classList.toggle('flip');
    }
    for (var i= 0; i<cards.length; i++){
        cards[i].addEventListener('click', flipCard);
    }
}());
