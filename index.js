const addButton = document.querySelector('.add-tasks__button');
const clearButton = document.querySelector('.clear');
clearButton.setAttribute('disabled', '');
let outputTasks = document.querySelector('.tasks-list');

function addTask() {

    document.getElementById('noTasks').innerHTML = " ";


    let div = document.createElement('div');
    div.classList.add('tasks-list__info');

    let oneMoreTask = document.createElement('p');
    oneMoreTask.classList.add('tasks-list__text');
    oneMoreTask.innerHTML = document.getElementById('input-task').value;

    let checkBox = document.createElement('input');
    checkBox.classList.add('tasks-list__checkbox');
    checkBox.type = 'checkbox';

    div.appendChild(oneMoreTask);
    div.appendChild(checkBox);

    outputTasks.appendChild(div);
    document.getElementById('input-task').value = "";

    clearButton.removeAttribute('disabled', '');

}
addButton.addEventListener('click', addTask);

function clearTasks() {

    outputTasks.innerHTML = " ";
    document.getElementById('noTasks').innerHTML = "Задачи отсутствуют";
    clearButton.setAttribute('disabled', '');
}
clearButton.addEventListener('click', clearTasks);