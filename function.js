const container = document.querySelector('#container');
const rows = document.getElementById('rows'); 
const btn = document.querySelector('#btn'); 
const clear = document.createElement('button');  
let sum = 0;

clear.textContent = 'Clear';

btn.addEventListener('click', () => {
    const row = +rows.value;
    if (isNaN(row) || row <= 0) return;

    if (sum + row > 100 || container.children.length + row > 100) {
        console.log('Cannot add more than 100 items');
        rows.value = '';
        return;
    }

    sum += row;
    gridLayout(row);
    console.log(`Added ${row} rows. Total rows: ${sum}`);

    rows.value = '';
});

const gridLayout = (rows) => {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < rows; i++) {
        const itemCard = document.createElement('div');
        itemCard.className = 'grid-item';
        fragment.appendChild(itemCard);
    }
    container.appendChild(fragment);
};

document.body.appendChild(clear).className = 'clear';

clear.addEventListener('click', () => {
    container.innerHTML = ''; 
    sum = 0; 
    rows.value = '';
});