const inputTask = document.querySelector(".task_input");
const btnSave = document.querySelector(".btn_save");
const ul = document.querySelector(".task_list");
let tasks = [];
const savedTasks = localStorage.getItem("tasks");

if(savedTasks != null)
{
    tasks = JSON.parse(savedTasks);
}

tasks.forEach(function(task) {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
        deleteBtn.addEventListener('click', function(){
        tasks = tasks.filter(t => t !== task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        li.remove();
    })
    li.textContent = task;
    ul.append(li);
    li.append(deleteBtn);

});

btnSave.addEventListener('click', function(){
    if(inputTask.value === "")
        return alert('Введите задачу!');
    tasks.push(inputTask.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    const li = document.createElement('li');
    const deleteBtn = document.createElement("button");
    const taskText = inputTask.value;
    deleteBtn.addEventListener('click', function(){
        tasks = tasks.filter(t => t !== taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        li.remove();
    })
    li.textContent = inputTask.value;
    li.append(deleteBtn);
    ul.append(li);
    inputTask.value = "";
})


