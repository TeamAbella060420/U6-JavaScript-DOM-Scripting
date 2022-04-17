const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');

function createLI(text) {
        const li = document.createElement('li');
        li.textContent = text;
        const label = document.createElement('label');
        label.textContent = 'Confirmed';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        label.appendChild(checkbox);
        li.appendChild(label)

        const editbutton = document.createElement('button');
        editbutton.textContent = 'edit';
        li.appendChild(editbutton);

        const removebutton = document.createElement('button');
        removebutton.textContent = 'remove';
        li.appendChild(removebutton);
        return li;
}

form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = input.value;
        input.value = '';
        const li = createLI(text);
        ul.appendChild(li);
});

ul.addEventListener('change', (e) => {
    const checkbox = event.target;
    const checked = checkbox.checked;
    const listItem = checkbox.parentNode.parentNode;

    if (checked) {
        listItem.className = 'responded';
    } else {
        listItem.className = '';
    }
});

ul.addEventListener('click', (e) => {   
    if (e.target.tagName === 'BUTTON') {
        const button = e.target;
        const li = button.parentNode;
        const ul = li.parentNode;
        if (button.tagName === 'remove'){
        ul.removeChild(li);
    } else if (button.tagName === 'edit');
    }
});

