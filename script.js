const buttons = document.querySelectorAll('.container .button-holder .button');
const wrapperHolder = document.querySelector('.container .wrapper-holder');

// Add event listeners to each button
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Stop animation for manual control
    wrapperHolder.style.animation = 'none';

    // Move the slider to the corresponding image
    const translateValue = -index * 100;
    wrapperHolder.style.transform = translateX`(${translateValue}%)`;

    // Highlight the active button
    buttons.forEach(btn => btn.style.backgroundColor = 'white');
    button.style.backgroundColor = 'cyan';
  });
});