//To DO App

//task 1:Implement the Add Function.
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

//add eventlistner to listen submit(enter)
addForm.addEventListener('submit', (e) => {
    //to remove submit default behaviour 
    e.preventDefault();
       
    const todo = (addForm.add.value.trim());
    //call generateTemplate function to add Todo in the list.
    if(todo.length){
        generateTemplate(todo);
        //remove the todo from the input field
        addForm.reset();

    }
})
//Implement a function that creates an HTML template that we can add to the DOM.
const generateTemplate = (todo) => { 
    const html =`
    <li class="list-group-item d-flex justify-content-between align-items-center text-light">
        <span>${todo}</span>
        <i class="fa fa-trash-o delete" aria-hidden="true"></i>
    </li>`;
        list.innerHTML += html;
}

//Task 2: Implement the delete Function
list.addEventListener('click',(e) => {
    // console.log(e.target.classList.contains('delete'))
   
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
    
})


// // Task 3 :Implement the searching and Filtering Function.
//get input value
const search = document.querySelector('.search input');

//add eventlistner to listen keyup event
search.addEventListener('keyup',() => {
    const term = search.value.toLowerCase();
    filteredTodos(term);
})

// //Implement a function that takes the term and matches with the todo item list.
const filteredTodos = (term) =>{
    // console.log(list)
    // console.log(list.children)
    // console.log(list.children[3].textContent)

    Array.from(list.children)
        .filter((todo)=> !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'))
    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'))

}