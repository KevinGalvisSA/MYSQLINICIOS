function handleDecision(option) {
    let message = document.getElementById('message');
    if (option === 'opcion1') {
        message.innerText = 'Has seleccionado la opción 1';
    } else if (option === 'opcion2') {
        message.innerText = 'Has seleccionado la opción 2';
    }
}