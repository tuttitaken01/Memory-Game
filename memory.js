const clicked = { emoji: 0, index: 0 };
const score = document.getElementById("score");
let counter = 0;

function getRandIndex(arr) {
    const randIndex = Math.floor(Math.random() * arr.length);
    return randIndex;
}

function newGame() {
    console.log("Starting the game");
    const emojis = ["😎", "😎", "😤", "😤", "😴", "😴", "🙄", "🙄", "😇", "😇", "😈", "😈"];
    const randEmojis = [];

    while (emojis.length) {
        const currIndex = getRandIndex(emojis);
        const currEmoji = emojis.splice(currIndex, 1);
        randEmojis.push(currEmoji[0]);
    }

    console.log(randEmojis, "<-- new array with random emojis");

    const buttons = document.getElementsByClassName("in-game");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
        buttons[i].innerText = "error?";
        buttons[i].setAttribute(
            "onclick",
            `toggleEmoji('${randEmojis[i]}', ${ i + 1 })`
        );
        
    }
    const score = document.getElementsByClassName("score");

    score.innerText = "Score: 0";
    console.log(score.innerText);
}

function toggleEmoji(emoji, index) {
    const button = document.getElementById(`but${index}`);
    const prevButton = document.getElementById(`but${clicked.index}`);

    console.log("toggle emoji");
    console.log(document.getElementById(`but${index}`));
    console.log(index);
    console.log(clicked.index);
    console.log(document.getElementById(`but${clicked.index}`));

    // if(clicked.emoji === 0) {
    //     clicked.emoji = emoji;
    //     clicked.index = index;
    // }
    console.log(counter);
    if(emoji === clicked.emoji && clicked.index !== index) {
        console.log("emoji are the same");
        button.disabled = true;
        prevButton.disabled = true;

        clicked.emoji = 0;
        clicked.index = 0;

        counter += 1;
        score.innerText =`Score: ${counter}`;
        console.log(counter);
        if (counter === 6) {
            document.getElementById("winMsg").style.color = "red";
        }
    }
}