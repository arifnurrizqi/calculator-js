const clear = document.getElementById('clear');
const input = document.querySelectorAll('.num');
const equal = document.getElementById('equal');

clear.addEventListener('click', ()=> {
    calc.txt.value = '';
});

input.forEach((e) => {
    e.addEventListener('click', ()=> {
        document.calc.txt.value += `${e.textContent}`;
    });
});

equal.addEventListener('click', ()=> {
    document.calc.txt.value = eval(calc.txt.value);
});
