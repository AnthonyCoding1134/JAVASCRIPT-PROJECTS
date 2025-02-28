/* this func gets the task from input */
function get_todos() {
    /*This creates an array of tasks that are inputted */
    var todos = new Array;
    /* this pulls the task that was saved in the web browser memory*/
    var todos_str = localStorage.getItem('todo');
    /*If the input isn't null then JSON.parse will communicate w/ browser to make task a JS object */
    if(todos_str != null) {
        todos = JSON.parse(todos_str);
    }
    return todos;  //return the object (task)
}


/*This function adds the inputted task to the get_todos function array */
function add() {
    //This takes the inputted task & creates a variable of it
    var task = document.getElementById('task').value;

    var todos = get_todos();
    /*This adds a new task the end of the array */
    todos.push(task);
    /*this converts the task input to a JSON string*/
    localStorage.setItem('todo', JSON.stringify(todos));
    //clears the input field
    document.getElementById('task').value = "";
    show();

    return false;
}

function remove() {
     var id = this.getAttribute('id');
     var todos = get_todos();
     todos.splice(id, 1);
     localStorage.setItem('todo', JSON.stringify(todos));
     /*this looks in the show() how to display a removed item on the screen */
     show();

     return false;

    


}


//This function keeps the tasks permanently displayed on the screen 
function show() {
    /*this sets the task that was retrieved as a variable */
    var todos = get_todos();

    // Sets up each task as an unordered list*/
     var html = '<ul>';
    ///This displays a task to the list in the order that it's inputted*/
    for(var i = 0; i < todos.length; i++) {
        //displays the task as a list and creates the button with the "x"
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
        
        // html.addEventListener('click', () => {
        //     console.log('Gotcha')
        // })
      
    };
    html += '</ul>';
    //Displays task as a list
    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i< buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
       
    



}




//Displays the inputted task when the 'Add Item' button is clicked*/
document.getElementById('add').addEventListener('click', add);
//keeps the inputs perm displayed on screen
show();


// document.addEventListener('click', e => { 
//     // check if the clicked thing(the "e.target") has a particular css class
//     if(e.target.classList.contains('remove')) { 
//         // do something when a dynamically added thing with css class ".something-added-dynamically" is clicked
//         console.log('yup');

//         remove();
//        //onsole.log(html);
//     }
// });
