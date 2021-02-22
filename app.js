const taskInput= document.querySelector('#task');
const form= document.querySelector('#task-form');
const taskList= document.querySelector('.collection');
const clearTask= document.querySelector('.clear-tasks');

loadEventListener();

function loadEventListener() {

    form.addEventListener('submit',addTask);
    clearTask.addEventListener('click',clear);

}
function addTask(e) {

    if(taskInput.value===''){
        alert("enter a task");
    }
//   console.log("hello")   
    const li = document.createElement('li');
    li.className='collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('a');

    link.className = 'delete-item secondary-content';

    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
   // console.log(li);

    taskList.appendChild(li);

    taskInput.value='';

    e.preventDefault();
}

function clear (e) {

    taskList.innerHTML='';
    
}