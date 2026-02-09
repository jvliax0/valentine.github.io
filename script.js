document.addEventListener('DOMContentLoaded', () => {
    const valentineImage = document.getElementById('valentine-image');
    const questionText = document.getElementById('question');
    const yesButton = document.getElementById('yes-btn');
    const noButton = document.getElementById('no-btn');
    const buttonsContainer = document.querySelector('.buttons');

    const noButtonStates = [
        { text: "Are you sure?", image: "img2.jfif", yesSizeIncrease: 0.2 },
        { text: "Baby pleaseee", image: "img3.jfif", yesSizeIncrease: 0.4 },
        { text: "Don't do this to me :(", image: "img4.jfif", yesSizeIncrease: 0.6 },
        { text: "You're breaking my heart", image: "img5.jfif", yesSizeIncrease: 0.8 },
        { text: "Don't you wanna be my valentine? :c", image: "img6.jfif", yesSizeIncrease: 1.0 }
    ];

    let currentStateIndex = 0;
    let baseYesFontSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    let baseYesPadding = parseFloat(window.getComputedStyle(yesButton).paddingLeft);

    noButton.addEventListener('click', () => {
        if (currentStateIndex < noButtonStates.length) {
            const currentState = noButtonStates[currentStateIndex];
            noButton.textContent = currentState.text;
            valentineImage.src = currentState.image;
            
            // Increase Yes button size
            yesButton.style.fontSize = `${baseYesFontSize * (1 + currentState.yesSizeIncrease)}px`;
            yesButton.style.padding = `${baseYesPadding * (1 + currentState.yesSizeIncrease)}px ${baseYesPadding * (1 + currentState.yesSizeIncrease * 1.5)}px`;

            currentStateIndex++;
        } else {
            // Optional: If "No" is clicked too many times, loop back or keep the last state
            // For now, it will just stay on the last "No" state's text and image.
            console.log("No more 'No' states!");
        }
    });

    yesButton.addEventListener('click', () => {
        valentineImage.src = "img8.jfif";
        questionText.textContent = "Yayyy!! :3";
        buttonsContainer.classList.add('hidden'); // Hide the buttons (the poll)
        valentineImage.style.marginBottom = '0'; // Adjust margin if needed after hiding buttons
    });
});
