const container = document.querySelector('#container'); // wraps rows
const rows = document.getElementById('rows'); // value
const btn = document.querySelector('#btn'); // adds rows
const clear = document.createElement('button'); // clears   items in the container
const items = document.getElementsByClassName('grid-item'); // row cards (the actual items)
clear.textContent = 'Clear'; // assigns inner text to the value

btn.addEventListener('click' , () => {
    let row = rows.value;

    if(rows.value < 100 && items.length < 100){
        gridLayout(row);
        console.log(`inputted rows ${row}`);
    }else{
        console.log('more then a hundred');
        console.log(items.length);
        return;
    }
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
