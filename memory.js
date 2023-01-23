const clicked = { emoji: 0, index: 0 };
let score = document.getElementById("score");
let counter = 0;

function getRandIndex(arr) {
    const randIndex = Math.floor(Math.random() * arr.length);
    return randIndex;
}

function newGame() {
    const emojis = ["😎", "😎", "😤", "😤", "😴", "😴", "🙄", "🙄", "😇", "😇", "😈", "😈"];
    const randEmojis = [];

    while (emojis.length) {
        const currIndex = getRandIndex(emojis);
        const currEmoji = emojis.splice(currIndex, 1);
        randEmojis.push(currEmoji[0]);
    }

    const buttons = document.getElementsByClassName("in-game");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
        buttons[i].innerText = "emoji";
        buttons[i].setAttribute(
            "onclick",
            `toggleEmoji('${randEmojis[i]}', ${ i + 1 })`
        );
        
    }
    score = document.getElementById("score");
    counter = 0;
    score.innerText = `Score: ${counter}`;
}

function toggleEmoji(emoji, index) {
    const button = document.getElementById(`but${index}`);
    const prevButton = document.getElementById(`but${clicked.index}`);

    button.innerText = emoji;


    if(clicked.emoji === 0) {
        clicked.emoji = emoji;
        clicked.index = index;
    } else {
        if(emoji === clicked.emoji && clicked.index !== index) {
        button.disabled = true;
        prevButton.disabled = true;

        clicked.emoji = 0;
        clicked.index = 0;
            
        score = document.getElementById("score");
        counter += 1;
        score.innerText =`Score: ${counter}`;

        if (counter === 6) {
            document.getElementById("winMsg").style.color = "white";
        }
     } else { // make them go back
        setTimeout(() => {
            button.innerText = "emoji";
            prevButton.innerText = "emoji";
        }, 1000);
        clicked.emoji = 0;
        clicked.index = 0;
    } 
    }
}