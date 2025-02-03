const messages = [
    "Are you sure?",
    "Really sure??",
    "Quai please...",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

const gif_srcs = [
    "gif/huh.gif",
    "gif/why.gif",
    "gif/please.gif",
    "gif/cry.gif",
    "gif/sad.gif",
    "gif/very-sad.gif",
    "gif/angry.gif",
    "gif/please.gif",
    "gif/lew.gif"
]

let messageIndex = 0;
let srcIndex = 0;
var count = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const gifimg = document.getElementById('gif');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    // const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    // yesButton.style.fontSize = `${currentSize * 1.5}px`;
    gifimg.src = gif_srcs[srcIndex];
    srcIndex = (srcIndex + 1) % gif_srcs.length;
    count = count +1;
    if (count === 9){
        noButton.textContent = "Yes but red";
    }
    if (count > 9){
        window.location.href = "yes_page.html";
    }
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
