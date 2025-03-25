const addItems = document.querySelector('.add-items');
const itemList = document.querySelector('.platos');
const items = JSON.parse(localStorage.getItem('items')) || [];

    function addItems(e) {
        e.preventDefault();
        const text = (this.querySelector('[name=item]')).value;
        const item = {
            text,
            done: false
        };

        items.push(item);
        populateList(items, itemList);
        localStorage.setItem('items', JSON.stringify(items));
        this.reset();
    }

    function populateList(platos = [], populateList)
    {
        populateList.innerHTML = platos.map((plato, i) => { return `
            <li>
            <input type="checkbox" data-index=${i}
            id="item${i}" ${plato.done ? 'checked' : ''}/>
            <label for="item${i}">${plato.text}</label>
            </li>
            `;
        }).join('');
    }

    function toggleDone(e) {
        if (!e.target.matches('input')) return;
        const el = e.target;
        const index = el.dataset.index;
        items[index].done = !items[index].done;
        localStorage.setItem('items', JSON.stringify(items));
        populateList(items, itemList);
    }

    addItems.addEventListener('submit', addItems);
    itemList.addEventListener('click', toggleDone);

    populateList(items, itemList)