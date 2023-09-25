// Define an array of keyboard keys
const keyboardKeys = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'],
    ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.'],
    ['space', 'backspace', 'enter']
];

 

// Create the virtual keyboard
function createKeyboard() {
    const keyboardElement = document.querySelector('.keyboard');

    keyboardKeys.forEach(row => {
        const rowElement = document.createElement('div');
        rowElement.classList.add('keyboard-row');

        row.forEach(key => {
            const keyElement = document.createElement('div');
            keyElement.classList.add('keyboard-key');
            keyElement.textContent = key;
            keyElement.addEventListener('click', () => handleKeyClick(key));
            rowElement.appendChild(keyElement);
        });

        keyboardElement.appendChild(rowElement);
    });
}

 

// Handle key clicks
function handleKeyClick(key) {
    const textInput = document.getElementById('text-input');

    switch (key) {
        case 'backspace':
            textInput.value = textInput.value.slice(0, -1);
            break;
        case 'space':
            textInput.value += ' ';
            break;
        case 'enter':
            textInput.value += '\n';
            break;
        default:
            textInput.value += key;
    }
}

 

// Initialize the virtual keyboard
createKeyboard();