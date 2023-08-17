const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function addItem(e)
{
    e.preventDefault();

    //Validate Input
    const newItem = itemInput.value;
    if( newItem === ''){
        debugger;
        alert('please add an item');
        return;
    }
    else {
        debugger;
        // Create list item
        const li = document.createElement('li');
        li.appendChild( document.createTextNode(newItem));

        const button = createButton('remove-item btn-link text-red');
        li.appendChild(button);
        itemList.appendChild(li);
        itemInput.value = '';
    }
    
}

/*
        <li>
          Apples
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </li>
*/

function createButton(classes)
{
    debugger;
    const button = document.createElement('button');
    button.className = classes;
    button.appendChild(createIcon('fa-solid fa-xmark'));
    return button;

}
function createIcon(classes){
    debugger;
    const i = document.createElement('i');
    i.className = classes;
    return i;
}
// Event Listeners

itemForm.addEventListener('submit', addItem)
