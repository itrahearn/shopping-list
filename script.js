const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const itemClear = document.getElementById('clear');
const itemFilter = document.getElementById('filter');


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
        checkUI();
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
    i.addEventListener("click", (e)=> {

    });
    return i;
}
// Event Listeners

function removeItem(e){
    if(e.target.parentElement.classList.contains("remove-item"))
    {
        if(window.confirm("Are you sure you want to delete the item?"))
            e.target.parentElement.parentElement.remove();
        checkUI();
    }
    
}
function removeAllItems()
{
    while(itemList.firstChild)
    {
        itemList.removeChild(itemList.firstChild);
    }
    checkUI();
}

function checkUI(){

    const items = itemList.querySelectorAll('li');
    // there are no node items
    if(items.length === 0){
        itemFilter.style.display = itemClear.style.display="none";
    } else {
        itemFilter.style.display = itemClear.style.display="block";
    }
}
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
itemClear.addEventListener('click', removeAllItems);

checkUI();
