const form = document.getElementById('addForm')
const itemList = document.getElementById('items')
const filter = document.getElementById('filter');

//Event Listener - Add Items
form.addEventListener('submit',e =>{
    e.preventDefault()
    
    //get input value
    const newItemValue = document.getElementById('item').value
    
    //create new li element
    const newListItemElement = document.createElement('li');
    //add class
    newListItemElement.className = 'list-group-item';
    //create text node with input value
    const newItem = document.createTextNode(newItemValue);
    //add text node to li element
    newListItemElement.appendChild(newItem);
    
    //create delete button element
    const deleteButton = document.createElement('button');
    //add class to delete button element
    deleteButton.className='btn btn-danger btn-sm float-right delete'
    //create text node for delete button with X value
    const deleteButtonX = document.createTextNode('X');
    // add text node to delete button
    deleteButton.appendChild(deleteButtonX)
    
    //append delete button to li element
    newListItemElement.appendChild(deleteButton)
    //append li element to item list
    itemList.appendChild(newListItemElement)
})

//add delete event listener and remove item function
itemList.addEventListener('click',e =>{
    if(e.target.className.includes('delete')){
    //if(e.target.classList.contains('delete')){ alternative
    if(confirm('Are you sure ?')){
        const li = e.target.parentElement
        itemList.removeChild(li);
    }
        
    }
})

//add filter item event listener and filter item functions
filter.addEventListener('keyup',e =>{
    const filterInputValue = e.target.value.toLowerCase()
    const items = document.getElementsByTagName('li') 
    Array.from(items).forEach(item =>{
  
        const itemText = item.firstChild.textContent.toLowerCase();
        if(itemText.includes(filterInputValue)){
            item.style.display = 'block'         
        }
        else{
            item.style.display = 'none'
        }
    })
})
