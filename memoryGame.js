// empty arrays, pushing and storing items in them; set attribute, get attribute; create Element; math Random;  append child; sort; forEach loop;

//trigger everything on dom loaded:
document.addEventListener("DOMContentLoaded", () => {

    //cards
    const cardArr = [
        {
            name: 'cat1',
            img: 'images/cat1.jpg'
        },
        {
            name: 'cat1',
            img: 'images/cat1.jpg'
        },
        {
            name: 'cat2',
            img: 'images/cat2.jpg'
        },
        {
            name: 'cat2',
            img: 'images/cat2.jpg'
        },
        {
            name: 'cat3',
            img: 'images/cat3.jpg'
        },
        {
            name: 'cat3',
            img: 'images/cat3.jpg'
        },
        {
            name: 'cat4',
            img: 'images/cat4.jpg'
        },
        {
            name: 'cat4',
            img: 'images/cat4.jpg'
        },
        {
            name: 'cat5',
            img: 'images/cat5.jpg'
        },
        {
            name: 'cat5',
            img: 'images/cat5.jpg'
        },
        {
            name: 'cat6',
            img: 'images/cat6.jpg'
        },
        {
            name: 'cat6',
            img: 'images/cat6.jpg'
        }
    ]

    //getting grid
    const grid = document.querySelector(".grid")
    const resultDisplay = document.querySelector("#result");
    const h3= document.querySelector("h3");
    let cardsChoosen = [];
    let cardsChoosenId = [];
    let cardsWon = [];
    let cardsWonId = [];

    //create game board
    function createBoard() {
        //randomising the array for each load

        cardArr.sort(() => 0.5 - Math.random());

        //creating the Board
        cardArr.forEach(function (element, index) {

            var card = document.createElement("img");
            card.setAttribute("src", "images/blank.jpg");
            card.setAttribute("data-id", index);
            card.addEventListener("click", flipCard);

            grid.appendChild(card);
        });
    }

    //check for match
    function checkForMatch() {
        var cards = document.querySelectorAll("img");
        const firstChoosenCard = cardsChoosenId[0];
        const secondChoosenCard = cardsChoosenId[1];


        if (cardsChoosen[0] === cardsChoosen[1]) {
            alert("Hurray! You got a match.");
            cards[firstChoosenCard].setAttribute("src", "images/white.jpg");
            cards[secondChoosenCard].setAttribute("src", "images/white.jpg");
            cardsWon.push(cardsChoosen);
            cardsWonId.push(cardsChoosenId[0]);
            cardsWonId.push(cardsChoosenId[1]);
        }
        else {
            cards[firstChoosenCard].setAttribute("src", "images/blank.jpg");

            cards[secondChoosenCard].setAttribute("src", "images/blank.jpg");
            alert("Sorry, go for another shot.");

        }

        cardsChoosen = [];
        cardsChoosenId = [];
        resultDisplay.textContent = cardsWon.length;

        //checking for all cards found
        if (cardsWon.length === cardArr.length / 2) {
            h3.innerText="Congratulations! you found them all.";
        }
    }

    //flip card
    function flipCard() {
        var cardId = this.getAttribute("data-id");
        if (cardsWonId.includes(cardId)) {
            alert("you have already won this card!");
            return;
        }
        if (cardsChoosenId.includes(cardId)) {
            alert("you have already choosen this card!")
        }
        else {
            cardsChoosen.push(cardArr[cardId].name);
            cardsChoosenId.push(cardId);
            this.setAttribute("src", cardArr[cardId].img);
            if (cardsChoosen.length === 2) {
                setTimeout(checkForMatch, 500);
            }
        }

    }

    //initialise the game
    createBoard()

    //on restart button click
    restartBtn = document.querySelector(".restartBtn");
    restartBtn.addEventListener("click", function () {
        grid.innerHTML = ``;
        cardsChoosen = [];
        cardsChoosenId = [];
        cardsWon = [];
        cardsWonId = [];
        createBoard();
        resultDisplay.textContent = `0`;

    });
})