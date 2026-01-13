const inputTask = document.querySelector(".task_input");
const btnSave = document.querySelector(".btn_save");
const ul = document.querySelector(".task_list");


btnSave.addEventListener('click', function(){
    if(inputTask.value === "")
        return alert('Введите задачу!');
    const li = document.createElement('li');
    const deleteBtn = document.createElement("button");
    deleteBtn.addEventListener('click', function(){
        li.remove();
    })
    li.textContent = inputTask.value;
    li.append(deleteBtn);
    ul.append(li);
    inputTask.value = "";
})


