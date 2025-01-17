const today= new Date()
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString(undefined, options);
document.getElementById('current-date').textContent=formattedDate;
const todoInput=document.getElementById('todo-input');
const addBtn= document.getElementById('add-btn');
const listContainer=document.getElementById('list-container');
function addTask(){
    if(todoInput.value === ''){
        alert('please enter a task')
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=todoInput.value;
        listContainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
todoInput.value='';
saveData();


}
listContainer.addEventListener('click', (e)=>{
if(e.target.tagName==='LI'){
    e.target.classList.toggle('checked');
    saveData();
}
else if(e.target.tagName==='SPAN'){
    e.target.parentElement.remove();
    saveData();
}
},false);


function saveData(){
    localStorage.setItem('data', listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML= localStorage.getItem('data');
}
showTask();





