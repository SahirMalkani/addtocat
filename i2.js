var cards = [
    {
        id: 0,
        im: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1doliMOjhYovkMhjHQdASKq3HjoxqP1Jmf8ndIrZV&s",
        tit: "Card Title"


    }, {

        id: 1,
        im: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1doliMOjhYovkMhjHQdASKq3HjoxqP1Jmf8ndIrZV&s",
        tit: "Card Title2"


    }



]

// var arr = [];

// function cart(i) {

//     console.log(cards[i];

//     var sendob = cards[i]




// }


var cardcont = document.getElementById("carcon");

for (var i = 0; i < cards.length; i++) {

    var img = cards[i].im;
    var id = cards[i].id;
    var tit = cards[i].tit;

    console.log(img, id, tit);


}

