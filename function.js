const container = document.querySelector('#container'); // wraps rows
const rows = document.getElementById('rows'); // value
const btn = document.querySelector('#btn'); // adds rows
const clear = document.createElement('button'); // clears   items in the container
const items = document.getElementsByClassName('grid-item'); // row cards (the actual items) (this is for the hovering feature probably maybe others)
let sum = 0;
clear.textContent = 'Clear'; // assigns inner text to the value


btn.addEventListener('click' , () => {
    let row = +rows.value;
    sum += row;
    if(sum < 100 && items.length < 100){
        gridLayout(sum);
        console.log(`inputted rows ${sum}`);
        console.log(sum);
    }else{
        console.log('more then a hundred');
        console.log(`number of item cards: ${items.length}`);
        rows.value = '';
        return;
    }
    rows.value = '';
});

const gridLayout = (rows) => {
};

document.body.appendChild(clear).className = 'clear';
// const trial = document.getElementsByClassName('grid-item');
clear.addEventListener('click', () => {
    // for (i = 0; i < trial.length; i++){
    //     items[i].remove();
    // }
    container.remove();
    rows.value = '';
    document.body.appendChild(container);
    document.body.appendChild(clear);
});
