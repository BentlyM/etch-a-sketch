const container = document.querySelector('#container');
const rows = document.getElementById('rows');
const btn = document.querySelector('#btn');
const clear = document.createElement('button');
const items = document.getElementsByClassName('grid-item');
clear.textContent = 'Clear';

btn.addEventListener('click' , () => {
    let row = rows.value;
    gridLayout(row);
    rows.value = '';
});

const gridLayout = (rows) => {
    
};

document.body.appendChild(clear).className = 'clear';
const trial = document.getElementsByClassName('grid-item');

clear.addEventListener('click', () => {
    for (i = 0; i < trial.length; i++){
        trial[i].remove();
    }
});
