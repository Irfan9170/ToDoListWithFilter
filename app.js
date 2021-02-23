const taskInput= document.querySelector('#task');
const form= document.querySelector('#task-form');
const taskList= document.querySelector('.collection');
const clearTask= document.querySelector('.clear-tasks');
const filter=document.querySelector('#filter');

loadEventListener();

function loadEventListener() {

    form.addEventListener('submit',addTask);
    clearTask.addEventListener('click',clear);
    taskList.addEventListener('click',removeTask);
    filter.addEventListener('keyup',filterTask);

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
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove();
    }
    
}
function filterTask(e) {
    const text=e.target.value.toLowerCase();
    // console.log(text);
    document.querySelectorAll('.collection-item').forEach
    (function (task) {

        const item = task.firstChild.textContent;

        if(item.toLowerCase().indexOf(text)!= -1){
            task.style.display='block';
        }
        else {
            task.style.display='none';
        }
    });


    
}