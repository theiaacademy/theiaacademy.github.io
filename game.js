let humanScore = 0;
let computerScore = 0;
let humanHand = 3;
let computerHand = 2;
function start() {
    humanScore = 0;
    computerScore = 2;
    refreshUI();
}

function refreshUI() {
    document.getElementById("humanScore").innerText = "Score: " + humanScore;
    document.getElementById("computerScore").innerText = "Score: " + computerScore;

    let pictureName = "img/avatar.jpg";
    if (humanHand === 1) {
        pictureName = "img/human_scissor.png";
    } else if (humanHand === 2) {
        pictureName = "img/human_rock.png";
    } else if (humanHand === 3) {
        pictureName = "img/human_paper.png";
    }
    document.getElementById("humanHand").setAttribute("src", pictureName);

    pictureName = "img/computer.png";
    if (computerHand === 1) {
        pictureName = "img/computer_scissor.png";
    } else if (computerHand === 2) {
        pictureName = "img/computer_rock.png";
    } else if (computerHand === 3) {
        pictureName = "img/computer_paper.png";
    }

    document.getElementById("computerHand").setAttribute("src", pictureName);
}