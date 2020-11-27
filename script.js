(function() {
    const input_text = document.querySelector('.text-input');
    const text = document.querySelector('.text');

    input_text.focus();

    input_text.addEventListener('input', () => {
        text.innerHTML = input_text.value;
    });
}());